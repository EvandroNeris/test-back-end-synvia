export default interface RepositoryCreateInterface<T> {
  create(entity: T): Promise<void>
}