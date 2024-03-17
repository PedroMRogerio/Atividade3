import { DataSource } from "typeorm"
import { join } from "path"

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || './src/database/database.sqlite',
    entities: [
      join(__dirname, '..', 'models/*.{ts,js}')
    ],
    logging: true,
    synchronize: true
  })

dataBase.initialize()
.then(() => {
    console.log('Banco de dados iniciado!')
})
.catch(() => {
    console.log('Falha ao iniciar o banco de dados!')
})

export default dataBase