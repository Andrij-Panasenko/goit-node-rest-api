const controllerWrapper = require("../../helpers/controllerWraper");
const path = require('path');
const fs = require('fs/promises');

const avatarsDir = path.join(__dirname, "avatars");

const updateAvatar = async (req, res, next) => {
    const { path: tempPath, filename } = req.file;
    const resultPath = path.join(avatarsDir, filename);
    await fs.rename(tempPath, resultPath);

    res.json({ok:true})
 };

module.exports = controllerWrapper(updateAvatar);