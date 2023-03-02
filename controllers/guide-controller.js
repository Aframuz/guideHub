const db = require("../models/guide");

const getGuides = async (req, res) => {
  try {
    const guides = await db.getGuides();
    res.status(200).json(guides);
  } catch (err) {
    console.error(`error getting guides!\n${err}`);
    res.status(500).send("Error getting songs");
  }
};

module.exports = { getGuides };
