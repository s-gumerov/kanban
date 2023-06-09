import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export interface IBoardRights {
  id: number,
  board_id: number,
  collection_id: number,
  role_id: number,
}

export const boardRightsModel: ModelAttributes<Model, IBoardRights> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  board_id: DataType.BIGINT,
  collection_id: DataType.BIGINT, /* входит в коллекцию User */
  role_id: DataType.BIGINT,
}
