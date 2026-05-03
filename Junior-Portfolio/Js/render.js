import { projectsData } from "./projetcts-data.js";
import { experiencesData } from "./experiences-data.js";
import { skillsData } from "./skills-data.js";

const projectContainers = {
  personal: "personal-container",
  collaborations: "collab-container",
  academic: "academic-container",
};

const fallbackProjectImage = "assets/files.png";
const experienceContainers = {
  graduation: "graduation-container",
  work: "work-container",
  courses: "courses-container",
};

function createProjectCard(project) {
  const wrapper = document.createElement(project.link && project.link !== "#" ? "a" : "article");
  wrapper.className = "row";

  if (wrapper.tagName === "A") {
    wrapper.href = project.link;
    wrapper.target = "_blank";
    wrapper.rel = "noopener noreferrer";
  }

  const image = document.createElement("img");
  image.src = project.image || fallbackProjectImage;
  image.alt = project.title;
  image.loading = "lazy";
  wrapper.appendChild(image);

  const layer = document.createElement("div");
  layer.className = "layer";

  const title = document.createElement("h5");
  title.textContent = project.title;

  const tech = document.createElement("h6");
  tech.textContent = project.tech;

  const description = document.createElement("p");
  description.textContent = project.desc;

  layer.append(title, tech, description);
  wrapper.appendChild(layer);

  return wrapper;
}

function renderProjects(category, containerId) {
  const container = document.getElementById(containerId);
  const projects = projectsData[category];

  if (!container || !projects) return;

  container.replaceChildren(...projects.map(createProjectCard));
}

function createExperienceItem(experience) {
  const timeline = document.createElement("div");
  timeline.className = "timeline";

  const container = document.createElement("div");
  container.className = "container";

  const image = document.createElement("img");
  image.src = experience.image;
  image.alt = experience.imageAlt;
  image.loading = "lazy";

  const textBox = document.createElement("div");
  textBox.className = "text-box";

  const period = document.createElement("small");
  period.textContent = `${experience.period} - `;

  const endPeriod = document.createElement("span");
  endPeriod.textContent = experience.endPeriod;
  period.appendChild(endPeriod);

  const title = document.createElement("h5");
  const strong = document.createElement("b");
  const highlightedTitle = document.createElement("span");
  highlightedTitle.textContent = experience.title;

  strong.appendChild(highlightedTitle);
  title.append(strong, ` ${experience.subtitle}`);

  const description = document.createElement("p");
  description.textContent = experience.description;

  textBox.append(period, title, description);
  container.append(image, textBox);

  const line = document.createElement("div");
  line.className = "line";

  timeline.append(container, line);

  return timeline;
}

function renderExperiences(category, containerId) {
  const container = document.getElementById(containerId);
  const experiences = experiencesData[category];

  if (!container || !experiences) return;

  container.replaceChildren(...experiences.map(createExperienceItem));
}

function createSkillCard(skill) {
  const card = document.createElement("div");
  card.className = "box";

  const iconWrapper = document.createElement("div");
  iconWrapper.className = "s-icons";

  const icon = document.createElement("i");
  icon.className = skill.icon;

  const title = document.createElement("h3");
  title.textContent = skill.name;

  iconWrapper.appendChild(icon);
  card.append(iconWrapper, title);

  return card;
}

function renderSkills() {
  const container = document.getElementById("skills-container");

  if (!container) return;

  container.replaceChildren(...skillsData.map(createSkillCard));
}

function activateTab(button) {
  const group = button.closest("[data-tab-group]");
  const targetId = button.dataset.tabTarget;
  const target = targetId ? document.getElementById(targetId) : null;

  if (!group || !target) return;

  group.querySelectorAll(".tab-button").forEach((tabButton) => {
    tabButton.classList.toggle("active", tabButton === button);
  });

  group.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.toggle("active", content === target);
  });
}

function setupTabs() {
  document.querySelectorAll("[data-tab-group]").forEach((group) => {
    const buttons = group.querySelectorAll(".tab-button[data-tab-target]");
    const activeButton = group.querySelector(".tab-button.active[data-tab-target]") || buttons[0];

    buttons.forEach((button) => {
      button.addEventListener("click", () => activateTab(button));
    });

    if (activeButton) activateTab(activeButton);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Object.entries(experienceContainers).forEach(([category, containerId]) => {
    renderExperiences(category, containerId);
  });

  Object.entries(projectContainers).forEach(([category, containerId]) => {
    renderProjects(category, containerId);
  });

  renderSkills();
  setupTabs();

  document.dispatchEvent(new CustomEvent("portfolio:content-rendered"));
});
