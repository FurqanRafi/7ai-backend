import AiCertificate from "../models/aiCertification.js";

export const GetCertificate = async (req, res) => {
  try {
    const certificate = await AiCertificate.find();
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get Certificate");
  }
};

export const CreateCertificate = async (req, res) => {
  try {
    const del = await AiCertificate.deleteMany();
    const certificate = await AiCertificate.create(req.body);
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Certificate");
  }
};

export const UpdateCertificate = async (req, res) => {
  try {
    const certificate = await AiCertificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Certificate");
  }
};

export const DeleteCertificate = async (req, res) => {
  try {
    const certificate = await AiCertificate.findByIdAndDelete(req.params.id);
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Certificate");
  }
};
