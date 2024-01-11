const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const multer = require('multer');
const userrouter = require('./routers/userrouter');
const adminrouter = require('./routers/adminrouter');

const app = express();

// Define the storage strategy for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      // Specify the directory where uploaded files will be stored
      cb(null, "./public/uploads"); // Create the 'uploads' directory in your project
  },
  filename: (req, file, cb) => {
      // Define the file name for the uploaded file
      cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the Multer instance with the specified storage configuration
const upload = multer({ storage: storage });

// Use cors, cookie-parser, and serve the 'public' directory as static
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use multer for file uploads
app.use(upload.single('file'));

// Use your routers
app.use(userrouter);
app.use(adminrouter);

app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
