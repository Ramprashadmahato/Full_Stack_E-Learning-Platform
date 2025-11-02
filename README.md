# 🎓 E-Learning Platform — Full Stack MERN Application

## 📘 Overview
The **E-Learning Platform** is a dynamic web application developed as part of my **Full Stack Developer Internship** at **TanviTech Pvt. Ltd.**  
This platform is designed to simplify online learning and management by integrating **role-based access**, **real-time notifications**, and **secure data management**.

The system allows **Admins**, **Recruiters (Instructors)**, and **Students** to interact through a unified platform.  
Built using the **MERN stack** with **Socket.io** for real-time communication, the project demonstrates both front-end and back-end proficiency in a production-level environment.


## 🧠 Project Objectives
- Develop a **role-based e-learning platform** (Admin, Recruiter, Student).
- Integrate **real-time notifications** using Socket.io.
- Design an intuitive **frontend** for course and user management.
- Build **RESTful APIs** and **secure authentication** using JWT.
- Manage data efficiently using **MongoDB**.
- Deploy a full-stack system for demonstration and learning purposes.


## 🏗️ System Architecture
**Tech Stack:**
- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Real-Time Communication:** Socket.io
- **Authentication:** JWT, bcrypt
- **Version Control & Tools:** Git, GitHub, Postman, VS Code
- **Deployment:** Render (Backend), Vercel (Frontend), MongoDB Atlas (Database)

## ⚙️ Features

### 👨‍💼 Admin
- Manage users (students and recruiters)
- Create, update, and delete courses
- Send real-time announcements to all users

### 🧑‍🏫 Recruiter / Instructor
- Upload and manage course content
- Interact with enrolled students
- Notify students about new updates or deadlines

### 👩‍🎓 Student
- Enroll in courses and access materials
- Receive **real-time notifications** (via Socket.io)
- Track progress and complete assignments

### 🌐 System-Level Features
- Role-Based Access Control (RBAC)
- Secure Login/Registration (JWT)
- Real-Time Notification System
- Fully Responsive UI
- RESTful API Integration
- Centralized State Management with React Context API


## 🧩 Folder Structure


E-Learning-Platform/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── socket.js
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   └── package.json
│
├── README.md
├── .env
└── package.json



## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/e-learning-platform.git
cd e-learning-platform
=

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
npm start
```

Create a `.env` file in the **Backend** folder:

```
PORT=4000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

### 4️⃣ Run the project

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:4000/api](http://localhost:4000/api)
* Socket.io Server: integrated within backend

---

## 🔔 Real-Time Notification Workflow

1. Admin or Recruiter performs an action (e.g., course update).
2. Server emits a notification event via **Socket.io**.
3. All connected students receive the update instantly on their dashboard.
4. Notifications are also saved to the database for persistence.

---

## 🧑‍💻 Developer Information

**Name:** Ram Prashad Mahato
**Role:** Full Stack Developer Intern
**Company:** TanviTech Pvt. Ltd.
**Internship Period:** 5 Sept 2025 – 5 Dec 2025
**Mentor:** Rajendra Pd. Joshi (CTO, TanviTech Pvt. Ltd.)


## 🏆 Key Learnings

* Full-stack application design and architecture (MERN)
* Real-time app development using Socket.io
* Role-based access and authentication management
* Database modeling and API integration
* Frontend UI/UX design with React and Tailwind CSS
* Version control and collaborative workflow (GitHub)
* Problem-solving and debugging in a professional environment


## 🛠️ Future Enhancements

* Integrate live video conferencing (WebRTC / Zoom API)
* Add AI-based course recommendation system
* Introduce push notifications (Firebase)
* Implement analytics dashboard for instructors
* Mobile version using React Native


## 📜 License

This project is developed as part of an internship at **TanviTech Pvt. Ltd.**
All rights reserved © 2025 TanviTech Pvt. Ltd.


## 🙌 Acknowledgement

Special thanks to my mentor **Rajendra Pd. Joshi (CTO, TanviTech Pvt. Ltd.)**
and the TanviTech development team for their guidance, feedback, and professional collaboration during the internship.


Would you like me to:
- 📝 **add installation screenshots and sample `.env` file example** (to make your GitHub README visually appealing), or  
- 🎨 **generate a README with GitHub-style badges and logos (React, Node.js, MongoDB, Socket.io)** for a more professional touch?

