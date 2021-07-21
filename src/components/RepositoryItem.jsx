export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description}</p>
        </li>
    );
}