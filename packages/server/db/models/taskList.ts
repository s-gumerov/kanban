import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export interface ITaskList {
  id: number,
  collection_id: number,
  board_index: number,
  title: string,
  creator: string,
  task_arr: number[],
}

export const taskListModel: ModelAttributes<Model, ITaskList> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  collection_id: DataType.BIGINT, /* входит в коллекцию Board */
  board_index: DataType.INTEGER, /* для размещения на доске слева направо */
  title: DataType.STRING,
  creator: DataType.STRING,
  task_arr: DataType.ARRAY(DataType.BIGINT)
}
