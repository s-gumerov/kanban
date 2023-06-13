import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export interface IPicture {
  id: number
  content: Blob
}

export const pictureModel: ModelAttributes<Model, IPicture> = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  content: DataType.BLOB,
}
