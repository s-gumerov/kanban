import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export interface IUser {
  id: number,
  email: string,
  login: string,
  full_name: string,
  public_name: string,
  phone: string,
  password: string,
  avatar_url: string,
  board_rights_arr: number[]
}

export const userModel: ModelAttributes<Model, IUser> = {
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
  board_rights_arr: DataType.ARRAY(DataType.BIGINT)
}


