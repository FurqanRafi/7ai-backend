import AiQuestion from "../models/aiQuestion.js";

export const GetQuestion = async (req, res) => {
  try {
    const question = await AiQuestion.find();
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get Question");
  }
};

export const CreateQuestion = async (req, res) => {
  try {
    const del = await AiQuestion.deleteMany();
    const question = await AiQuestion.create(req.body);
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Question");
  }
};

export const UpdateQuestion = async (req, res) => {
  try {
    const question = await AiQuestion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Question");
  }
};

export const DeleteQuestion = async (req, res) => {
  try {
    const question = await AiQuestion.findByIdAndDelete(req.params.id);
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Question");
  }
};
