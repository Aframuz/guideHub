const client = require("../config/db.config");

const getGuides = async () => {
  const queryConf = {
    text: "SELECT * FROM guides",
  };
  try {
    const guides = await client.query(queryConf);
    return guides.rows;
  } catch (err) {
    console.error(`error getting guides!\n${err}`);
  }
};

module.exports = { getGuides };
