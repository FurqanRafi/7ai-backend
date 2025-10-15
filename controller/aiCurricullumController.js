import AiCurricullum from "../models/aiCurricullum.js";

export const GetCurricullum = async (req, res) => {
  try {
    const curricullum = await AiCurricullum.find();
    res.status(200).json(curricullum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get Curricullum");
  }
};

export const CreateCurricullum = async (req, res) => {
  try {
    const del = await AiCurricullum.deleteMany();
    const curricullum = await AiCurricullum.create(req.body);
    res.status(201).json(curricullum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Curricullum");
  }
};

export const UpdateCurricullum = async (req, res) => {
  try {
    const curricullum = await AiCurricullum.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(curricullum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Curricullum");
  }
};

export const DeleteCurricullum = async (req, res) => {
  try {
    const curricullum = await AiCurricullum.findByIdAndDelete(req.params.id);
    res.status(200).json(curricullum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Curricullum");
  }
};
