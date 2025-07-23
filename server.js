import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.router.js";
import userRoutes from "./routes/user.router.js";
import postRoutes from "./routes/post.router.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";
import contactRoute from "./routes/contact.js";
import path from "path";
import { fileURLToPath } from "url";

// These two lines emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
connectDB();

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json()); 
app.use(cookieParser());
app.use(cors(
    {
    origin: "https://lost-and-found-app-frontend.vercel.app", // frontend URL
    credentials: true, // allow cookies
  }
));
app.use(errorHandler);
app.use(express.urlencoded({ extended: false }));
// Routes
app.use("/api/contact", contactRoute);
app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

// Error handling

app.use('/',(req,res)=>{
  res.send("Its My Lost and Found App Backend");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
