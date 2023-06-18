import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export type TRoleName = 'owner' | 'editor' | 'reader' 

export type TBoardRoles = {
  id: number
  role: TRoleName
}

export const boardRoleModel: ModelAttributes<Model, TBoardRoles> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  role: DataType.STRING,
}
