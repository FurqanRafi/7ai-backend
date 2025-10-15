import aiNavbar from "../models/aiNavbar.js";

export const GetNavbar = async (req, res) => {
  try {
    const navbar = await aiNavbar.find();
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Get Navbar");
  }
};

export const CreateNavbar = async (req, res) => {
  try {
    const del = await aiNavbar.deleteMany();
    const navbar = await aiNavbar.create(req.body);
    await navbar.save();
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Create Navbar");
  }
};

export const UpdateNavbar = async (req, res) => {
  try {
    const navbar = await aiNavbar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Update Navbar");
  }
};

export const DeleteNavbar = async (req, res) => {
  try {
    const navbar = await aiNavbar.findByIdAndDelete(req.params.id);
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Delete Navbar");
  }
};
