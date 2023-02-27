import {
  Model,
  Table,
  PrimaryKey,
  Column,
} from 'sequelize-typescript'

@Table({
  tableName: 'toxicologicalSample',
  timestamps: false
})
export default class ToxicologicalSampleModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string

  @Column({ allowNull: false })
  declare sampleCode: string

  @Column
  declare cocaine: number

  @Column
  declare amphetamine: number

  @Column
  declare methamphetamine: number

  @Column
  declare mda: number

  @Column
  declare mdma: number

  @Column
  declare thc: number

  @Column
  declare morphine: number

  @Column
  declare codeine: number

  @Column
  declare heroine: number

  @Column
  declare benzoylecgonine: number

  @Column
  declare cocaethylene: number

  @Column
  declare norcocaine: number

  @Column
  declare sampleResult: string
}

