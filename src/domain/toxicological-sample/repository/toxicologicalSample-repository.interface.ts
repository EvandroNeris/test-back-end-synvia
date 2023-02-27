import RepositoryCreateInterface from '../../@shared/repository/repository-create-interface'
import RepositoryFindAllInterface from '../../@shared/repository/repository-find-all-interface'
import RepositoryFindOneInterface from '../../@shared/repository/repository-find-one-interface'
import ToxicologicalSample from '../entity/toxicologicalSample'

export default interface ToxicologialSampleRepositoryInterface extends 
    RepositoryCreateInterface<ToxicologicalSample>, 
    RepositoryFindAllInterface<ToxicologicalSample>,
    RepositoryFindOneInterface<ToxicologicalSample> {}