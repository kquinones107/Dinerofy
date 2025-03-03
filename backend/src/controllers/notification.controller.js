import { getNotifications } from "../services/notification.service.js";

export const getNotificationsBySenderId = async (req, res) => {
    try {
        console.log('query =>', req.query)
        const notifications = await getNotifications(req.query.senderId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};