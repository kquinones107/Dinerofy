import { send, getTransactions } from '../services/transaction.service.js'


export const transferMoney = async (req, res) => {
    try {
        console.log(req.body)
        const response = await send(req.body.from, req.body.to, req.body.amount, req.body.note);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getTransactionsBySenderId = async (req, res) => {
    try {
        const senderId = req.query.senderId;
        const transactions = await getTransactions(senderId);
        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};