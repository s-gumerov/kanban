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
  board_rights_arr: DataType.ARRAY(DataType.BIGINT)
},
{
  freezeTableName: false
})


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

const Board = sequelize.define('tb_board', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataType.STRING,
  description:DataType.STRING,
  picture_id: DataType.INTEGER,
  creator: DataType.STRING,
  task_list_arr: DataType.ARRAY(DataType.BIGINT)
},
{
  freezeTableName: false
})

const TaskList = sequelize.define('tb_task_list', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  collection_id: DataType.BIGINT, /* входит в коллекцию Board */
  board_index: DataType.NUMBER, /* для размещения на доске слева направо */
  title: DataType.STRING,
  creator: DataType.STRING,
  task_arr: DataType.ARRAY(DataType.BIGINT)
},
{
  freezeTableName: false
})

const BoardRights = sequelize.define('tb_board_right', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  board_id: DataType.BIGINT,
  collection_id: DataType.BIGINT, /* входит в коллекцию User */
  role_id: DataType.STRING,
},
{
  freezeTableName: false
})

const Pictures = sequelize.define('tb_picture', {
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

const Task = sequelize.define('tb_task', {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  collection_id: DataType.BIGINT, /* входит в коллекцию TaskList */
  title: DataType.STRING,
  description:DataType.STRING,
  deadline: DataType.DATE,
  creator: DataType.STRING,
},
{
  freezeTableName: false
})

User.sync()
Board.sync()
BoardRoles.sync()
BoardRights.sync()
TaskList.sync()
Task.sync()
Pictures.sync()

type TBoardRole = 'owner' | 'editor' | 'reader'

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
