import User from '../models/userModels.js';
import bcrypt from 'bcryptjs';

//buscar todos os usuarios
export const getUsers = async (req, res) => {
  const Users = await User.findAll();
  res.json(Users);
}

//buscar um unico usuario
export const getUserById = async (req, res) => {
  try {
   const { id } = req.params;
   const user = await User.findByPk(id);
   if (!user) return res.status(404).json({ Error: 'usuario nao encontrado!' });
   res.status(200).json(user);
  }catch(error){
    
  }
};

//atualizar um usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'usuario nao encontrado' });

   await user.update({
      ...(nome && { nome }),
      ...(email && { email }),
      ...(senha && { senha }),
    });

    res.status(200).json('o usuario foi atualizado com sucesso!');
  } catch (error) {
    res.status(400).json({error: 'erro ao atualizar usuario'});
  }
};


//deletar um usuario
export const deleteUser = async (req, res) => {
  try {
   const { id } = req.params;
   const user = await User.findByPk(id);
   if(!user) return res.status(404).json('Usuario nao encontrado')
   await user.destroy();
   res.status(200).json('Usuario deletado com sucesso!')
  }catch(error){
   res.status(400).json('Erro ao excluir usuario')
  }
}

//perfil do usuario
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });
    if (!user) return res.status(400).json({ error: 'Usuario Não Encontrado!' });
    
    res.status(200).json(`Ola ${user.nome}! Você Acessou a Rota Protegida!`);
  } catch (error) {
    res.status(500).json({ error: "erro interno do servidor"});
  }
};
