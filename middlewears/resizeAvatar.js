const Jimp = require("jimp");

const resizeAvatar = async (path) => {
  const image = await Jimp.read(path);
  image.resize(250, 250, Jimp.RESIZE_BEZIER);
  await image.writeAsync(path);
};

module.exports = resizeAvatar;
