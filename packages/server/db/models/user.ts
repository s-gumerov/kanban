import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'
import type { TUserData } from '../../../shared/API/types'

export const userModel: ModelAttributes<Model, TUserData> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: DataType.STRING,
  login: DataType.STRING,
  full_name: DataType.STRING,
  public_name: DataType.STRING,
  phone: DataType.STRING,
  password: DataType.STRING,
  avatar_url: DataType.STRING,
  board_rights_arr: DataType.ARRAY(DataType.BIGINT),
}
