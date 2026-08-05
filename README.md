# 🤖 REST API ChatBot

A simple AI ChatBot backend built using **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates how to integrate an external AI API into a RESTful backend while storing chat history in a database.

It was built as a learning project to understand API integration, backend architecture, database operations, and asynchronous programming.

---

## 🚀 Features

* 💬 AI Chat API
* 📝 Save Chat History
* 📖 Retrieve Previous Conversations
* 🌐 RESTful API Design
* ⚡ Express.js Backend
* 🗄️ MongoDB Database
* 🔄 Async/Await API Calls
* 📦 JSON Request & Response Handling
* 🔒 Environment Variables using dotenv

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Axios / Fetch API
* dotenv

---

## 📂 Project Structure

```text
RestAPI-ChatBot/
│
├── database/
│   ├── conversation.js
│   └── ...
│
├── routes/
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Lavish09-Mehra/RestAPI-ChatBot.git
```

Move into the project folder:

```bash
cd RestAPI-ChatBot
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
Mongo_url=YOUR_MONGODB_CONNECTION_STRING
API_KEY=YOUR_AI_API_KEY
```

Start the development server:

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 📮 API Endpoints

### Send a Prompt

```http
POST /api/chat
```

Example Request

```json
{
  "prompt": "Explain REST APIs in simple words."
}
```

---

### Get Chat History

```http
GET /api/chat-history
```

Returns all previously stored conversations from MongoDB.

---

## 📚 What I Learned

Through this project I learned:

* REST API development
* Calling third-party APIs
* Handling asynchronous requests
* MongoDB with Mongoose
* Database CRUD operations
* Error handling
* Environment variables
* Backend project structure
* JSON data flow between client and server

---

## 🎯 Future Improvements

* User Authentication (JWT)
* Conversation IDs
* Multiple Chat Sessions
* Streaming AI Responses
* Delete Chat History
* Search Conversations
* Pagination
* Rate Limiting
* API Documentation (Swagger)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 👨‍💻 Author

**Lavish Mehra**

GitHub: https://github.com/Lavish09-Mehra

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub. Your support motivates me to keep building and sharing more backend projects.
