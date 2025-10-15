import aiInstructors from "../models/aiInstructors.js";


export const GetInstructors = async (req, res) => {
    try {
        const instructors = await aiInstructors.find();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Get Instructors");
    }
};

export const CreateInstructors = async (req, res) => {
    try {
        const del = await aiInstructors.deleteMany();
        const instructors = await aiInstructors.create(req.body);
        await instructors.save();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Create Instructors");
    }
};

export const UpdateInstructors = async (req, res) => {
    try {
        const instructors = await aiInstructors.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Update Instructors");
    }
};

export const DeleteInstructors = async (req, res) => {
    try {
        const instructors = await aiInstructors.findByIdAndDelete(req.params.id);
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Delete Instructors");
    }
};
