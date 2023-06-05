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

const User = sequelize.define('tb_user', {
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
  board_rights_arr: DataType.ARRAY(DataType.INTEGER)
},
{
  freezeTableName: false
})

User.sync()


type TBoardRole = 'owner' | 'editor' | 'reader'

const BoardRoles = sequelize.define('tb_board_role', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataType.STRING,
},
{
  freezeTableName: false
})

BoardRoles.sync()

const Board = sequelize.define('tb_board', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataType.STRING,
  description:DataType.STRING,
  pictures_id: DataType.INTEGER,
  creator: DataType.STRING,
},
{
  freezeTableName: false
})

Board.sync({
  force: true
})

const BoardRights = sequelize.define('tb_board_right', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  board_id: DataType.BIGINT,
  collection_id: DataType.STRING,
  role_id: DataType.STRING,
},
{
  freezeTableName: false
})

BoardRights.sync()

const Pictures = sequelize.define('tb_pictures', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  content: DataType.BLOB,
},
{
  freezeTableName: false
})

Pictures.sync()

const defaultBoardRoles: TBoardRole[] = ['owner', 'editor', 'reader']

defaultBoardRoles.forEach( roleName => {
  return BoardRoles.findOrCreate({
    where: {
      name: roleName,
    },
    defaults: {
      name: roleName,
    }
  })
})

export { sequelize, User }
