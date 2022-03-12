import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

interface Repository {
  name: string
  description: string
  stargazers_count: number
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/jonathanbcsouza/repos')
      // 1- Take the response and converts into Json
      .then((response) => response.json())
      // 2- Save it in "data"
      // 3- Update the "repositories" via Hook state
      .then((data) => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>My Repo List</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
