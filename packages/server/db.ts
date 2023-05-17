import { Sequelize, SequelizeOptions, DataType } from 'sequelize-typescript'

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  dialect: 'postgres',
}
const sequelize = new Sequelize(sequelizeOptions)

const User = sequelize.define('User', {
  id: {
    type: DataType.INTEGER,
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
},
{
  freezeTableName:true
})

User.sync()

export { sequelize, User }
