var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: "firebase-adminsdk-gugfd@bytebeat-51b1a.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC84f1jm6XRc9uk\n3NL5Zgj36Zz183l6w6YuO3pCWFcN76QZDqc3DYFTlJPi9rCMXc/eVDUrGerPQ1Gg\njVwk4Cpj5vZxZ+eLI9IA09PXTLmsQEmifotE6/N5lJafxJZVFg3rLGcEEor41VC+\nKU+TzgujSBrArzaGVuIBAomdxUj6QtgI/k+pONnBXKLWD91SaDxvPgvmum1xn1UW\nPu2lCZmX+eO1DooLtRPwnS0+vSr08V6R6zXqEX4Y3OwfgCSbLVVH+oR1+/vo85dT\nNVS8SwyPXHKjFWbMzmKtu2aVAJQtFebV+u4Z21BuEHZOWAshoPY9uxfAVkJss1JF\nw+Wv0+ClAgMBAAECggEAS3i3QTY/pvX2xSSxLhMNsVWIsKPlHd8QRzffzaOzwS9I\nb/Sxbud4Dff3sYAloiiX9vvJtNupvcBl3NOvBlMFzR5LyZudYrTg5BC//C69n+ye\nH44VwufOxP1QxC0Obpgd3qLC1Nc97Vh650jlcacqckdM3UIFdN9BderYJxDd7JTa\nCCqj2oY6Rm2yGPtJe3IJvHsIIMWXNFre+owtDqhJWDIkQj9JV4WHVkcY8O8IGZxG\nCMHoqmrwvx9skbVBiaYxobK3B7ww+h9n4x0uHod/xmGtF6xSd6umQlho7XDcAja+\neklSsIwutBCXocrqdj2Ug1QbsUJ/KdxhfdPvOMLC7wKBgQDmRFtN0P4LEZ/a5AZ1\nETPLvWn+d4M67TEX3rOSjBkP9wpZo9r3v11DoiORH3QP6za7G39/BDU/M6MB3+ti\nRc5I5Jr5sZ1G1BGTrr15nfZZXGFqBDGZ5RX0v4MKtBiMQSyukxWWb2mob3YBdYfy\n+NtWdCm+uBQfvMVAMHgsimGb9wKBgQDR/a7exsOYdRJesysRBBq9/RdjgmihS3/J\n6hUdHngvVSCrUQnZ9VjvNyFpy37YGGJykoXDb/XbdnoQPxqQ7SWShrDMVdwLM0/Z\nCw/j9XdFG4iEfAPDAwsU4DgfIbp5orXkzFRJNBO5xlRig1rw2mvr9o0NDyOJis9Y\nlLthMb6pQwKBgQDVbwLabB8tj1aGg9lgZWOHM7itf4WJ9xUMNQZpjaYlYCydzf1G\nqn/+Eqm4+FiR8Mm4QNK6nuHkBS7QrAb3/hApDIyBaRqI7kSkiNFjiwEu7yv0IpL/\nPJJPW7xRDYG7byXFYtwdpoNe9oGA9Lnggr57sgyHlQRCLqz+xG5/inzTHQKBgQCJ\nzEz6h7hGzVxWpIA4VFcwIWs9s4/xeFfNKjzctOftN5GOmkk6rBPGNolIoW8FY0sH\nIDuC+m99qouDKcXHILetJZHTJOyWtP9K0EWHM8cmpGC7f54AVHjrJA/v7fQuaaWv\nFJ6iwvfGyu0JEGWW894qI8p/rVWGpn5WBJPJvhj9fQKBgBamjnpppGlKiDLTweP3\nJW/dUxFPcXGfjIt7r3VTq3icxPBfE66mX7t077nlsrl5C8JWaUUuv+VFPyneMVUE\nZvEt+aj/uws2SIWQ7RF7Zi9j8NTNvK7YYzaeob643YCHjFA6lhH5oDcmg3pz4fJI\nFxc/dclmK3nvmr1yf7ODaRKL\n-----END PRIVATE KEY-----\n",
      project_id: "bytebeat-51b1a",
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

module.exports = admin.firestore();
