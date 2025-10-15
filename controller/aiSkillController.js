import AiSkill from "../models/aiSkill.js";


export const GetSkill = async (req, res) => {
    try {
        const skill = await AiSkill.find();
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Get Skill");
    }
};

export const CreateSkill = async (req, res) => {
    try {
        const skill = await AiSkill.create(req.body);
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Create Skill");
    }
};

export const UpdateSkill = async (req, res) => {
    try {
        const skill = await AiSkill.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Update Skill");
    }
};

export const DeleteSkill = async (req, res) => {
    try {
        const skill = await AiSkill.findByIdAndDelete(req.params.id);
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.log("finally Delete Skill");
    }
};

