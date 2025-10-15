import AiSenior from "../models/aiSenior.js";

export const GetSenior = async (req, res) => {
  try {
    const senior = await AiSenior.find();
    res.status(200).json(senior);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get Senior");
  }
};

export const CreateSenior = async (req, res) => {
  try {
    const del = await AiSenior.deleteMany();
    const senior = await AiSenior.create(req.body);
    res.status(201).json(senior);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Senior");
  }
};

export const UpdateSenior = async (req, res) => {
  try {
    const senior = await AiSenior.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(senior);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Senior");
  }
};

export const DeleteSenior = async (req, res) => {
  try {
    const senior = await AiSenior.findByIdAndDelete(req.params.id);
    res.status(200).json(senior);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Senior");
  }
};
