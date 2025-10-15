import AiPricing from "../models/aiPricing.js";

export const GetPricing = async (req, res) => {
  try {
    const pricing = await AiPricing.find();
    res.status(200).json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get Pricing");
  }
};

export const CreatePricing = async (req, res) => {
  try {
    const del = await AiPricing.deleteMany();
    const pricing = await AiPricing.create(req.body);
    res.status(201).json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Pricing");
  }
};

export const UpdatePricing = async (req, res) => {
  try {
    const pricing = await AiPricing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Pricing");
  }
};

export const DeletePricing = async (req, res) => {
  try {
    const pricing = await AiPricing.findByIdAndDelete(req.params.id);
    res.status(200).json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Pricing");
  }
};
