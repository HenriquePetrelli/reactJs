import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform';
const repository = {
    name: "uniform",
    description: "Forms in React"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <RepositoryItem repository={repository} />
            <RepositoryItem />
        </section>
    )
}