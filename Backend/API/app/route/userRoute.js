const router = require('express').Router();
const userController = require('../controller/userController');


router.get("/client", userController.getUser);
router.delete("/client/:id", userController.deleteUser);
router.route('/')
    .get(userController.getUser)
    .post(userController.postUser);

router.post("/client", userController.postUser);

router.delete("/:id", userController.deleteUser);



module.exports = router;