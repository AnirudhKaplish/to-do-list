# 📝 Go To-Do App 🚀  

A simple **To-Do List** web application built using **Golang**, **HTML**, **CSS**, and **JavaScript**. This app provides essential task management features, a clean UI, and a RESTful API for handling tasks.  

---

## 🌟 Features  
✅ Add, Edit, and Delete tasks  
✅ Mark tasks as completed ✅/❌  
✅ Drag-and-drop task sorting  
✅ Dark mode toggle 🌙  
✅ Persistent task storage (`tasks.json`)  
✅ Progress bar to track completed tasks  

---

## 🛠️ Tech Stack  
- **Backend**: Golang (`net/http`, `encoding/json`, `sync`, `os`)  
- **Frontend**: HTML, CSS, JavaScript (fetch API, DOM manipulation)  
- **Storage**: JSON file (`tasks.json`) for persistent data  

---

## 📂 Project Structure
```
/go-todo-app
│── main.go        # Go backend server
│── tasks.json     # Task storage file
│── /static
│   │── to-do.html # Frontend UI
│   │── to-do.css  # Stylesheet
│   │── to-do.js   # Frontend logic
```

---

## 🔧 Future Improvements
- Add user authentication 🔑
- Implement task due dates & priorities 📅
- Sync tasks with a database (SQLite/PostgreSQL)
- Deploy using Docker or a cloud platform 🌐

---

## 🚀 Setup Instructions  
To run the project locally, follow these steps:

### **Prerequisites**
- Install [Go](https://go.dev/dl/) (Version 1.18 or later)
- Clone the repository:

   ```bash
   git clone https://github.com/AnirudhKaplish/go-todo-app.git
   cd go-todo-app
   ```

### **Run the Server**
   ```bash
   go run main.go
   ```

### **Open in Browser**
- Go to: [`http://localhost:8080`](http://localhost:8080)  

---

## 👥 Contributing  
Contributions are welcome! Feel free to fork the repo and submit a PR.

