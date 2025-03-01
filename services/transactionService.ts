import axios from "axios";

export const sendMoney = async (from?: string, to?: string, amount?: number) => {
    return axios.post('http://192.168.1.4:5000/api/transfer', {
        senderId: from,
        receiverEmail: to,
        amount
      });
};

export const getTransactions = async (senderId: string) => {
    return axios.get(`http://192.168.1.4:5000/api/transfers?senderId=${senderId}`);
};
