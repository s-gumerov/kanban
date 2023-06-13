import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export interface IBoard {
  id: number
  title: string
  description: string
  picture_id: number
  creator: string
  task_list_arr: number[]
}

export const boardModel: ModelAttributes<Model, IBoard> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataType.STRING,
  description: DataType.STRING,
  picture_id: DataType.INTEGER,
  creator: DataType.STRING,
  task_list_arr: DataType.ARRAY(DataType.BIGINT),
}
