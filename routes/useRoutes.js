import express from 'express';
import { getUsers, getUserById, updateUser, deleteUser, getUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/updateUser/:id', updateUser);
router.delete('/users/deleteUser/:id', deleteUser)

//rota protegida
router.get('/profile', authMiddleware, getUserProfile);

export default router;
