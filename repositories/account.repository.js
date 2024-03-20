import Account from "../models/Account.model.js";
import bcrypt from "bcrypt";

const AccountRepository = {
    register: async (account) => {
        const accountExisted = await Account.findOne({ username: account.username });
        if (accountExisted) throw new Error("Account already exists");
        const hashPassword = await bcrypt.hash(account.password, parseInt(process.env.SECRET_KEY));
        const newAccount = new Account({
            ...account,
            password: hashPassword
        });
        console.log(5);
        return await newAccount.save();
    },
    login: async (account) => {
        const acc = await Account.findOne({ username: account.username });
        if (!acc) throw new Error("User not found.");
        const isMatch = await bcrypt.compare(account.password, acc.password);
        if (!isMatch) throw new Error("Incorrect password.");
        return acc;
    },
    getById: async (id) => {
        return await Account.findById(id);
    }
};

export default AccountRepository;