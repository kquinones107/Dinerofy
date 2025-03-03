import axios from 'axios';

export const getNotifications = async (senderId: string) => {
    return axios.get(`http://192.168.1.4:5000/api/notifications?senderId=${senderId}`);
  };