import RepositoryCreateInterface from '../../@shared/repository/repository-create-interface'
import RepositoryFindOneInterface from '../../@shared/repository/repository-find-one-interface'
import User from '../entity/user'

export default interface UserRepositoryInterface extends RepositoryCreateInterface<User>, RepositoryFindOneInterface<User> {}