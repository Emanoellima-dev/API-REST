import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';

import useRoutes from './routes/useRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/', useRoutes);
app.use('/auth', authRoutes)

async function connect(){
  try {
    await sequelize.authenticate();
    console.log("Conexao Ao Banco De Dados Bem Sucedida!")
  }catch(error){
    console.log("Conexao Mal Sucedida", error)
  }
}

connect();

app.listen(PORT, () => {
  console.log("Servidor Ativo")
});
