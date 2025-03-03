import axios from "axios";

export const sendMoney = async (from?: string, to?: string, amount?: number, note?: string) => {
    return axios.post('http://192.168.1.4:5000/api/transfer', {
        from,
        to,
        amount,
        note
      });
};

export const getTransactions = async (senderId: string) => {
    return axios.get(`http://192.168.1.4:5000/api/transfers?senderId=${senderId}`);
};
