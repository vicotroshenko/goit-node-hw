const express = require("express");
const router = express.Router();


const ctrl = require("../../controllers/auth");
const {validateBody, authenticate} = require("../../middlewares");
const {schemas} = require("../../models/user")
const jsonParser = express.json();



router.post("/register", validateBody(schemas.registerSchema), jsonParser, ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), jsonParser, ctrl.login)

router.get("/current", jsonParser, authenticate, ctrl.getCurrent);

router.post("/logout", jsonParser, authenticate, ctrl.logout);

router.patch("/users", jsonParser, authenticate, validateBody(schemas.subscriptionSchema), ctrl.updateSubscribe);


module.exports = router;