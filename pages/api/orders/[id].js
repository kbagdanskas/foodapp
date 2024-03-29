import dbConnect from '../../../util/mongo';
import Order from '../../../models/Order';

const handler = async (req, res) => {
    const {
        method,
        query: { id },
        cookies,
    } = req;
    const token = cookies.token;

    await dbConnect();

    if (method === 'GET') {
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === 'PUT') {
        try {
            const order = await Order.findByIdAndUpdate(
                id,
                req.body,
                {
                    new: true,
                }
            );
            res.status(201).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === 'DELETE') {
        if (!token || token !== process.env.token) {
            return res.status(401).json('You are not authenticated!');
        }
        try {
            await Order.findByIdAndDelete(id);
            res.status(201).json('The user was deleted successfully');
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

export default handler;
