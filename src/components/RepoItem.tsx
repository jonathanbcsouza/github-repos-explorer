interface RepoProps {
  repository: {
    name: string;
    description: string;
    stargazers_count: number;
    html_url: string;
  };
}

export function Repo(props: RepoProps) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description}</p>
      <p>★ {props.repository.stargazers_count}</p>
      <a href={props.repository.html_url}>Link</a>
      <hr />
    </li>
  );
}
