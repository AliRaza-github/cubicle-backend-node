const Notification = require("../model/notificationModel");

const getNotification = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ timestamp: -1 });
        return res.status(201).json({ error: null, data: notifications, message: "Notification data." })
    } catch (error) {
        return res.status(500).json({ error: error || error.message, data: null, message: "Notification error." })
    }

}

const markReadNotification = async (req, res) => {
    try {
        const { notificationId } = req.params;
        await Notification.findByIdAndUpdate(notificationId, { is_read: true });
        res.status(200).json({ error: null, data: null, message: 'Notification marked as read' });
    } catch (error) {
        return res.status(500).json({ error: error || error.message, data: null, message: "Notification error." })
    }

}
