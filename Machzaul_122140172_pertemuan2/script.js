class Dashboard {
    constructor() {
      this.scheduleKey = "student_schedule";
      this.taskKey = "student_tasks";
      this.noteKey = "student_note";
      this.loadAll();
      this.startClock();
    }
  
    loadAll = () => {
      this.renderList(this.scheduleKey, "scheduleList", this.removeSchedule);
      this.renderList(this.taskKey, "taskList", this.removeTask);
      const savedNote = localStorage.getItem(this.noteKey);
      document.getElementById("savedNote").textContent = savedNote || "";
    };
  
    startClock = () => {
      const updateClock = () => {
        const now = new Date();
        document.getElementById("clock").textContent = `⏰ ${now.toLocaleTimeString()}`;
      };
      updateClock();
      setInterval(updateClock, 1000);
    };
  
    renderList = (key, listId, removeCallback) => {
      const list = JSON.parse(localStorage.getItem(key)) || [];
      const ul = document.getElementById(listId);
      ul.innerHTML = "";
      list.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item} <button onclick="${removeCallback.name}(${index})">Hapus</button>`;
        ul.appendChild(li);
      });
    };
  
    addSchedule = () => {
      const value = document.getElementById("scheduleInput").value.trim();
      if (value) {
        this.saveToStorage(this.scheduleKey, value);
        document.getElementById("scheduleInput").value = "";
        this.renderList(this.scheduleKey, "scheduleList", this.removeSchedule);
      }
    };
  
    addTask = () => {
      const value = document.getElementById("taskInput").value.trim();
      if (value) {
        this.saveToStorage(this.taskKey, value);
        document.getElementById("taskInput").value = "";
        this.renderList(this.taskKey, "taskList", this.removeTask);
      }
    };
  
    saveNote = async () => {
      const note = document.getElementById("noteInput").value.trim();
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulasi async
      localStorage.setItem(this.noteKey, note);
      document.getElementById("savedNote").textContent = note;
      document.getElementById("noteInput").value = "";
    };
  
    saveToStorage = (key, value) => {
      const items = JSON.parse(localStorage.getItem(key)) || [];
      items.push(value);
      localStorage.setItem(key, JSON.stringify(items));
    };
  
    removeSchedule = (index) => {
      this.removeItem(this.scheduleKey, index, "scheduleList", this.removeSchedule);
    };
  
    removeTask = (index) => {
      this.removeItem(this.taskKey, index, "taskList", this.removeTask);
    };
  
    removeItem = (key, index, listId, removeCallback) => {
      const items = JSON.parse(localStorage.getItem(key)) || [];
      items.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(items));
      this.renderList(key, listId, removeCallback);
    };
  }
  
  const dashboard = new Dashboard();
  