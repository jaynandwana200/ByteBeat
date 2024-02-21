var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      "client_email": "firebase-adminsdk-wuggk@beat-byte-f7224.iam.gserviceaccount.com",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDeKEH5ZyOGFVM+\nDtQ0UBLG41TjFvNKMieeotcHtALMvRusJyY7aM6AinYISNZ/frKOHCL2z7iwUIi6\n3uJhWDx+6b0m80fnUitvRTFN/oCl92zqxDAWFuI5na9oVDXYsetc1szD6bXNjcMh\nJukMDS9llv1GNuzXIY12SnEDJHAD2PEHiBv20IkS2eQDtUQLe5XJFML+GgHz8Di+\nM3rMeN4Ncc8QfAWoTyiFmOWJz62hrrobux10gcvBDkQOyE2oNT5fTBwK2l75Fbc9\nbhBrKI5MIG5VGkLen9y/L8nS/WVhHWKKJ+kMLTC6/iotQNrrDWRKv47Ez9MrM3Fo\nHfie2lI3AgMBAAECggEAZuP8Uld7c3FTAW36yFPBro3BVf/eJCIAiY9fyfiMR2ja\ndSwYn/FVmuEF86ZQefIjHoBXjTn9juNtwCbUcENemWUGLxED31YGOd2xDS9vQ+7J\nah39K23jzs2CXO6LldYpbPErGx2WDyK2GhecXfGJXyLEIQ31OVoX2450swDgRFcL\nu2DuPmtH8cgd07w1UYJsz/yKpJiu9IXgO/8Tt6veXBVgdlI/Tq2km//kzxP2Pnw0\np93dyZQX2eTF5/97KZm+A278Q8WbJEkyCnfJrzLU9x8JlgaX7MwynQRIqSlHRKxu\nw8rz7/KxB5tzs+nQwAchSKYUmjs44p2nBSMv40q6IQKBgQDvVMSPl0pKDWteeNe3\nfknVjxPUdqaJcFUtsEMWgwFqu/7MIcTqlILCeKlJTm7XpYlpMDyrHkKgt2XV0osr\nF5h0Hc3hCpJy3lVbX0wMwxmL8BQjctmn9FBe9TV2FsgfSnQzDIJO/PtB8v9P4vvQ\nv1XTorxH4aaaidSKEkJWXbouZwKBgQDtoUhnxCfSzYexOU61c2naDF0gwMIJwX8W\nEgkOMaKmTXqhmwjedk8dv4G7h/Y1mTXHO5RlIkBngHjfWMsa0DKooKv863d5c83b\n7OTbflKH+zUu92dPQhdtLjFNoAnrPs0elkS0bNeHI/2Tl6xk2NYTtQPde97Dmap1\nlihgGg27sQKBgAJ9lVYRMvq2TQm8pDIKpGYOiRxK58zCWICTNv+C+X7M2gfxygTO\n6tVvQAO9RzYDSPzJPbhiJjtZ7TteZ4hZRILg1IWlAIUlfynmQfpYBWoJY4xC47T1\nu+hhEN9buVVqBu+JD8oWo9650qJYMFqpwxDivqbY2Ez/ZjDRo9MWQpu9AoGBAJPr\n/gJ6HMAgqQMtRU22loHhiGdHFoK0LMQ0Xea0Bye2u0u2EoNI6l7+Q2fVbvJWeR+Y\nevupoqXLV3LQ9z2ttJs7yVQbz7eO2uq4QI5RyFZVjfm6kFjKL4MLai2EHiiOY2lS\n6VnXFyNMyCEEHZB5WmnSGKHa5gSkt3OTEXchQMNBAoGBAJ3A4XYWt3kvdzossBzh\nwhM7HQzRyhVkNkp46CklrBZJF0MwMAmP2aueOiAs7oM268/oQ9UAYKCVFv9VrhH2\nTGugtQZac3lObZbUZpSOhBKHVtOr8A/uBaQNezoivRx1fRaVW3k5WvhIK5qe13Wh\nhj9fkB0PnksAzH4D6hbnZHUv\n-----END PRIVATE KEY-----\n",
      "project_id": "beat-byte-f7224",
    }),
    databaseURL: "https://beat-byte-f7224-default-rtdb.firebaseio.com"
  });
}

module.exports = admin.firestore();
