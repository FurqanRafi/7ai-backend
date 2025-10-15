import AiWhat from "../models/aiWhat.js";

export const GetWhat = async (req, res) => {
  try {
    const what = await AiWhat.find();
    res.status(200).json(what);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get What");
  }
};

export const CreateWhat = async (req, res) => {
  try {
    const del = await AiWhat.deleteMany();
    const what = await AiWhat.create(req.body);
    res.status(201).json(what);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create What");
  }
};

export const UpdateWhat = async (req, res) => {
  try {
    const what = await AiWhat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(what);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update What");
  }
};

export const DeleteWhat = async (req, res) => {
  try {
    const what = await AiWhat.findByIdAndDelete(req.params.id);
    res.status(200).json(what);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete What");
  }
};
