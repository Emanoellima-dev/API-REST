import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';

export const register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await User.create({ nome, email, senha: hashedPassword });
    res.status(201).json({ message: 'Usuario registrado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: "Erro ao registrar usuario"});
    console.error("erro ao registrar", error);
  }
};

export const login = async (req, res) => {
  try {
    const { nome, senha } = req.body;
    const user = await User.findOne({ where: { nome } });
    if (!user) return res.status(404).json({ error: 'Usuario Não Encontrado!' });

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) return res.status(401).json({ error: 'Credenciais Inválidas' });
 
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login Bem Sucedido!', token });
  } catch (error) {
    res.status(400).json({ error: "Erro ao Fazer o Login"});
  }
};
