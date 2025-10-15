import AiFAQs from "../models/aiFAQs.js";

export const GetFAQs = async (req, res) => {
  try {
    const faqs = await AiFAQs.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get FAQs");
  }
};

export const CreateFAQs = async (req, res) => {
  try {
    const del = await AiFAQs.deleteMany();
    const faqs = await AiFAQs.create(req.body);
    res.status(201).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create FAQs");
  }
};

export const UpdateFAQs = async (req, res) => {
  try {
    const faqs = await AiFAQs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update FAQs");
  }
};

export const DeleteFAQs = async (req, res) => {
  try {
    const faqs = await AiFAQs.findByIdAndDelete(req.params.id);
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete FAQs");
  }
};
