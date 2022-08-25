const express = require("express");
const {
  sendMessage,
  recieveMessage,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.route("/").post(protect, sendMessage);

router.route("/:chatId").get(protect, recieveMessage);

module.exports = router;
