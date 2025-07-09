// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.submitContactForm = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const {name, email, message} = req.body;

    try {
      await admin.firestore().collection("contacts").add({
        name,
        email,
        message,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });

      return res.status(200).send("Message sent successfully.");
    } catch (error) {
      console.error("Error saving contact:", error);
      return res.status(500).send("Error saving message");
    }
  });
});
