const express = require("express");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroupChat,
  addGroupChat,
  removeGroupChat,
} = require("../controllers/chatController");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);

router.route("/").get(protect, fetchChat);

router.route("/group").post(protect, createGroupChat);

router.route("/rename").put(protect, renameGroupChat);

router.route("/groupremove").put(protect, removeGroupChat);

router.route("/groupadd").put(protect, addGroupChat);

module.exports = router;
