export default interface RepositoryFindOneInterface<T> {
  findOne(value: string): Promise<T>
}