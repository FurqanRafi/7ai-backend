import AiFooter from "../models/aiFooter.js";

export const GetFooter = async (req, res) => {
  try {
    const footer = await AiFooter.find();
    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get Footer");
  }
};

export const CreateFooter = async (req, res) => {
  try {
    const del = await AiFooter.deleteMany();
    const footer = await AiFooter.create(req.body);
    res.status(201).json(footer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Footer");
  }
};

export const UpdateFooter = async (req, res) => {
  try {
    const footer = await AiFooter.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Footer");
  }
};

export const DeleteFooter = async (req, res) => {
  try {
    const footer = await AiFooter.findByIdAndDelete(req.params.id);
    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Footer");
  }
};
