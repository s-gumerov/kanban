import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export interface IBoardRoles {
  id: number
  name: 'owner' | 'editor' | 'reader'
}

export const boardRoleModel: ModelAttributes<Model, IBoardRoles> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataType.STRING,
}
