const API_URL = "http://localhost:8080";

async function fetchTasks() {
    const response = await fetch(API_URL + "/tasks");
    const tasks = await response.json();
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const row = document.createElement("tr");
        row.draggable = true;
        row.addEventListener("dragstart", dragStart);
        row.addEventListener("dragover", dragOver);
        row.addEventListener("drop", drop);

        row.innerHTML = `
            <td class="checkbox-cell" onclick="toggleTask(${task.id})">${task.done ? "✔️" : "❌"}</td>
            <td contenteditable="true">${task.title}</td>
            <td><button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button></td>
        `;

        taskList.appendChild(row);
    });

    updateProgress();
}

// Add Task
async function addTask() {
    const taskInput = document.getElementById("taskInput").value.trim();

    if (!taskInput) return;

    await fetch(API_URL + "/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: taskInput, done: false })
    });

    document.getElementById("taskInput").value = "";
    fetchTasks();
}

// Toggle Task Status
async function toggleTask(id) {
    await fetch(`${API_URL}/done?id=${id}`);
    fetchTasks();
}

// Delete Task
async function deleteTask(id) {
    await fetch(`${API_URL}/delete?id=${id}`);
    fetchTasks();
}

// Update Progress Bar
function updateProgress() {
    const tasks = document.querySelectorAll(".checkbox-cell");
    const completedTasks = document.querySelectorAll(".checkbox-cell:contains('✔️')");
    document.getElementById("progressBar").value = (completedTasks.length / tasks.length) * 100 || 0;
}

// Drag & Drop Sorting
let draggedRow;
function dragStart(event) { draggedRow = event.target; }
function dragOver(event) { event.preventDefault(); }
function drop(event) {
    event.preventDefault();
    const targetRow = event.target.closest("tr");
    if (targetRow && draggedRow !== targetRow) {
        document.getElementById("taskList").insertBefore(draggedRow, targetRow.nextSibling);
    }
}

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.getElementById("bulb-icon").src = isDarkMode ? "bulb-off.png" : "bulb-on.png";
}

// Load Theme on Page Load
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("bulb-icon").src = "bulb-off.png";
    }
    fetchTasks();
});
