export default interface RepositoryUpdateInterface<T> {
  update(entity: T): Promise<void>
}