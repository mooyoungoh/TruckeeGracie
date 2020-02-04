const admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://truckee-f9191.firebaseio.com",
    storageBucket: "truckee-f9191.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
