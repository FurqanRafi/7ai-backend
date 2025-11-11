import aiHero from "../models/aiHero.js";

export const GetHero = async (req, res) => {
  try {
    const hero = await AiHero.findOne(); // or find()
    res.status(200).json(hero); // ✅ send JSON
  } catch (error) {
    console.error("Error fetching hero:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  } finally {
    console.log("finally Get Hero");
  }
};

export const CreateHero = async (req, res) => {
  try {
    const del = await aiHero.deleteMany();
    const hero = await aiHero.create(req.body);
    await hero.save();
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Hero");
  }
};

export const updateHero = async (req, res) => {
  try {
    const hero = await aiHero.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Hero");
  }
};

export const deleteHero = async (req, res) => {
  try {
    const hero = await aiHero.findByIdAndDelete(req.params.id);
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Hero");
  }
};
