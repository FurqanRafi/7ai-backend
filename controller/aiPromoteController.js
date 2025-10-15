import AiPromote from "../models/aiPromote.js";

export const GetPromote = async (req, res) => {
    try {
        const promote = await AiPromote.find();
        res.status(200).json(promote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Get Promote");
    }
};

export const CreatePromote = async (req, res) => {
    try {
        const promote = await AiPromote.create(req.body);
        res.status(201).json(promote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Create Promote");
    }
};

export const UpdatePromote = async (req, res) => {
    try {
        const promote = await AiPromote.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(200).json(promote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Update Promote");
    }
};

export const DeletePromote = async (req, res) => {
    try {
        const promote = await AiPromote.findByIdAndDelete(req.params.id);
        res.status(200).json(promote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Delete Promote");
    }
};
