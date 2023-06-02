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
  boards_id: DataType.ARRAY(DataType.INTEGER)
},
{
  freezeTableName: false
})

User.sync()

/* создаем тестового пользователя */
User.findOrCreate({
  where: {
    email: "admin@kanban.ru",
  },
  defaults: {
    email: "admin@kanban.ru",
    login: "admin",
    full_name: "admin admin admin",
    public_name: "admin",
    phone: "88005553535",
    password: "22102016",
    avatar_url: "",
    boards_id: [1,2,3]
  }
})


type TBoardRole = 'owner' | 'editor' | 'reader'

const BoardRoles = sequelize.define('tb_board_role', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataType.STRING,
},
{
  freezeTableName: false
})

BoardRoles.sync()

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


const Board = sequelize.define('tb_board', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  creator: DataType.STRING,
  name: DataType.STRING,
  avatar_url: DataType.STRING,
},
{
  freezeTableName: false
})

Board.sync()

const BoardRights = sequelize.define('tb_board_right', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  collection_id: DataType.INTEGER,
  name: DataType.STRING,
  avatar_url: DataType.STRING,
},
{
  freezeTableName: false
})

BoardRights.sync()

export { sequelize, User }
