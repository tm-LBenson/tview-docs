import { topics } from "./topics/index.js";

function init() {
  const navList = document.getElementById("nav-list");
  const content = document.getElementById("content");

  topics.forEach(function(topic) {
    const button = document.createElement("button");
    button.textContent = topic.title;
    button.className = "nav-item";
    button.dataset.topicId = topic.id;
    button.addEventListener("click", function() {
      navigateTo(topic.id);
    });
    navList.appendChild(button);
  });

  function navigateTo(id) {
    const topic = topics.find(function(t) {
      return t.id === id;
    });
    if (!topic) {
      return;
    }

    content.innerHTML = "";
    topic.render(content);

    const buttons = navList.querySelectorAll(".nav-item");
    buttons.forEach(function(btn) {
      const isActive = btn.dataset.topicId === id;
      if (isActive) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    window.location.hash = id;
  }

  const initialId = window.location.hash.replace("#", "") || topics[0].id;
  navigateTo(initialId);
}

init()
