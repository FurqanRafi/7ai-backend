import aiproductivity from "../models/aiproductivity.js";

export const GetProductivity = async (req, res) => {
  try {
    const productivity = await aiproductivity.find();
    res.status(200).json(productivity);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Get Productivity");
  }
};

export const CreateProductivity = async (req, res) => {
  try {
    const del = await aiproductivity.deleteMany();
    const productivity = await aiproductivity.create(req.body);
    await productivity.save();
    res.status(200).json(productivity);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Create Productivity");
  }
};

export const UpdateProductivity = async (req, res) => {
  try {
    const productivity = await aiproductivity.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(productivity);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Update Productivity");
  }
};

export const DeleteProductivity = async (req, res) => {
  try {
    const productivity = await aiproductivity.findByIdAndDelete(req.params.id);
    res.status(200).json(productivity);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Delete Productivity");
  }
};
