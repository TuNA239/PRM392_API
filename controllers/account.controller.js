import AccountRepository from "../repositories/account.repository.js";
import bcrypt from "bcrypt";


const AccountController = {
    register: async (req, res) => {
        console.log(1);
        try {
            const account = await AccountRepository.register(req.body);
            res.status(201).json(account);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    login: async (req, res) => {
        try {
            const account = await AccountRepository.login(req.body);
            res.status(200).json(account);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getById: async (req, res) => {
        try {
            const account = await AccountRepository.getById(req.params.id);
            res.status(200).json(account);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
export default AccountController;