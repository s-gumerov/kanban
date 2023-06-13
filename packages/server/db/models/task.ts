import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export interface ITask {
  id: number
  collection_id: number
  title: string
  description: string
  deadline: Date
  creator: string
}

export const taskModel: ModelAttributes<Model, ITask> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  collection_id: DataType.BIGINT /* входит в коллекцию TaskList */,
  title: DataType.STRING,
  description: DataType.STRING,
  deadline: DataType.DATE,
  creator: DataType.STRING,
}
