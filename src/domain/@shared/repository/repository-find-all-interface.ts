export default interface RepositoryFindAllInterface<T> {
  findAll(): Promise<T[]>
}