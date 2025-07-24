

```markdown
# 🎒 Lost and Found App - Backend

This is the **backend** for the Lost and Found web application, built using **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs for user authentication, post creation, image uploads, profile management, and email functionality.

🔗 **Frontend Repo**: [LostAndFoundApp_Frontend](https://github.com/Vivekkumar5697/LostAndFoundApp_Frontend)  
🔗 **Live API**: https://lostandfoundapp-backend.onrender.com

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (for image uploads)
- Nodemailer (for sending emails)
- JSON Web Tokens (JWT) for auth
- dotenv for environment configs

---

## ✨ Features

- ✅ User Signup & Login (JWT Authentication)
- ✅ Profile Update (including profile picture)
- ✅ Create, Read, Update, Delete (CRUD) posts
- ✅ Image Uploads using Multer (stored locally)
- ✅ Fetch logged-in user’s posts
- ✅ Send Email to item owner from contact section
- ✅ Serve uploaded images as static assets

---

## 📁 Folder Structure

```plaintext

backend/
├── controllers/       # Route logic
├── models/            # Mongoose schemas
├── routes/            # Express route definitions
├── middleware/        # JWT auth middleware
├── uploads/           # Uploaded images (local)
├── config/            # Email and DB config
├── .env               # Environment variables
└── server.js          # Entry point

````

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Vivekkumar5697/LostAndFoundApp_Backend.git
cd LostAndFoundApp_Backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=9000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
CLIENT_URL=https://lost-and-found-app-frontend.vercel.app/
```

### 4. Run the Server

```bash
npm run dev
```

---

## 📦 API Endpoints Overview

| Method   | Route                      | Description                |
| -------- | -------------------------- | -------------------------- |
| `POST`   | `/api/auth/signup`         | Register a user            |
| `POST`   | `/api/auth/login`          | Login user                 |
| `GET`    | `/api/auth/me`             | Get current user           |
| `PUT`    | `/api/user/update-profile` | Update user details        |
| `GET`    | `/api/user/posts`          | Get logged-in user’s posts |
| `POST`   | `/api/posts`               | Create a post              |
| `GET`    | `/api/posts`               | Get all posts              |
| `PUT`    | `/api/posts/:id`           | Update a post              |
| `DELETE` | `/api/posts/:id`           | Delete a post              |
| `POST`   | `/api/contact/:postId`     | Send email to post owner   |

---

## 🖼️ Serving Images

Uploaded images are stored locally in `/uploads` and served via:

```js
app.use("/uploads", express.static("uploads"));
```

To access an image:
`https://lostandfoundapp-backend.onrender.com//uploads/filename.jpg`

---
```
## 🙋‍♂️ Contact

Built by [Vivek Kumar](https://www.linkedin.com/in/vivekvodnala/).
Feel free to reach out for collaboration or feedback.

```
