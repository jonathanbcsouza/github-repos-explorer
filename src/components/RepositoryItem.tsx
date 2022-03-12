interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    stargazers_count: number
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>
      <p>★ {props.repository.stargazers_count}</p>
      <a href={props.repository.html_url} target="_blank">
        Link
      </a>
      <hr />
    </li>
  )
}
