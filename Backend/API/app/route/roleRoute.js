const router = require('express').Router();
const roleController = require("../controller/roleController");
const roleLogger = require('../middleware/roleLogger');


router.route('/')
    .get(roleController.getRole)
    .post(roleLogger, roleController.postRole);
router.delete("/:id", roleController.deleteRole)


router.all("*", (req, res) => {
    res.send("404 Not Found");
});
module.exports = router;