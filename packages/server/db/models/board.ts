import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'
import type { TBoardData } from '../../../shared/API/types'

export const boardModel: ModelAttributes<Model, TBoardData> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataType.STRING,
  description: DataType.STRING,
  picture_id: DataType.INTEGER,
  creator_id: DataType.INTEGER,
  task_list_arr: DataType.ARRAY(DataType.BIGINT),
}
