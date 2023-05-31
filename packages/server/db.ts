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
  boards_id: DataType.ARRAY(DataType.STRING)
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


type TRoles = 'owner' | 'editor' | 'reader'

const Roles = sequelize.define('Role', {
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

Roles.sync()

const defaultRoles: TRoles[] = ['owner', 'editor', 'reader']

defaultRoles.forEach(roleName => {
  return Roles.findOrCreate({
    where: {
      name: roleName,
    },
    defaults: {
      name: roleName,
    }
  })
})


const Board = sequelize.define('Board', {
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

export { sequelize, User }
