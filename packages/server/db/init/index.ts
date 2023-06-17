import { userModel } from '../models/user'
import { boardModel } from '../models/board'
import { boardRoleModel } from '../models/boardRole'
import { boardRightsModel } from '../models/boardRight'
import { taskListModel } from '../models/taskList'
import { taskModel } from '../models/task'
import { pictureModel } from '../models/picture'

import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  dialect: 'postgres',
}

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions)

// Инициализируем модели
export const User = sequelize.define('tb_user', userModel, {
  freezeTableName: false,
})
export const Board = sequelize.define('tb_board', boardModel, {
  freezeTableName: false,
})
export const BoardRoles = sequelize.define('tb_board_role', boardRoleModel, {
  freezeTableName: false,
})
export const BoardRights = sequelize.define('tb_board_right', boardRightsModel,{ 
  freezeTableName: false 
})
export const TaskList = sequelize.define('tb_task_list', taskListModel, {
  freezeTableName: false,
})
export const Task = sequelize.define('tb_task', taskModel, {
  freezeTableName: false,
})
export const Pictures = sequelize.define('tb_picture', pictureModel, {
  freezeTableName: false,
})

/* сделать ручку и реализовать заполнение таблицы дефолтными ролями
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
*/

export async function dbConnect() {
  try {
    await sequelize.authenticate() // Проверка аутентификации в БД
    await sequelize.sync() // Синхронизация базы данных
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
