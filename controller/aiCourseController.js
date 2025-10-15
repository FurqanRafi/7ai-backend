import aiCourse from "../models/aiCourse.js";

export const GetCourse = async (req, res) => {
  try {
    const course = await aiCourse.find();
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Get Course");
  }
};

export const CreateCourse = async (req, res) => {
  try {
    const del = await aiCourse.deleteMany();
    const course = await aiCourse.create(req.body);
    await course.save();
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Create Course");
  }
};

export const UpdateCourse = async (req, res) => {
  try {
    const course = await aiCourse.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Update Course");
  }
};

export const DeleteCourse = async (req, res) => {
  try {
    const course = await aiCourse.findByIdAndDelete(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.Message });
  } finally {
    console.log("finally Delete Course");
  }
};
