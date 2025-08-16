import Request from '../models/Request.js'

export const createRequest = async (req, res) => {
    const { title, description, category, payment_method, amount, payment_status } = req.body;
    const userId = req.user._id;

    try{
        if(!title || !description || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newRequest = new Request({
            userId,
            title,
            description,
            category,
            payment_method,
            amount,
            payment_status,
        });

        await newRequest.save();
        return res.status(201).json(newRequest, { message: 'Request created successfully' });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export const getRequestsById = async (req, res) => {
    const userId = req.user._id;

    try {
        const requests = await Request.find({ userId });
        return res.status(200).json(requests);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export const getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        return res.status(200).json(requests);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export const deleteRequest = async (req, res) => {
    const { requestId } = req.params;

    try {
        const request = await Request.findByIdAndDelete(requestId);
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }
        return res.status(200).json({ message: 'Request deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}   