import { useState, useEffect } from "react";
import { Repo } from "./RepoItem";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

export function RepoList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [sortAscending, setSortAscending] = useState<boolean>(true);

  const handleClick = () => {
    const sortedRepositories = [
      ...repositories
    ].sort((a: Repository, b: Repository) =>
      sortAscending
        ? a.stargazers_count - b.stargazers_count
        : b.stargazers_count - a.stargazers_count
    );
    setRepositories(sortedRepositories);
    setSortAscending(!sortAscending);
  };

  useEffect(() => {
    fetch("https://api.github.com/users/jonathanbcsouza/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>My Github Repo List</h1>
      <button onClick={handleClick}>
        {sortAscending ? "Sort Descending" : "Sort Ascending"}
      </button>
      <ul>
        {repositories.map((repository) => {
          return <Repo key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
