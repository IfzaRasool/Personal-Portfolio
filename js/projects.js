const wrapper = document.getElementById('wrapper');
const body = document.getElementById('page-body');
const recentWorks = document.querySelector('.recent-works-cards');
const modalbody = document.querySelector('.project-popup-window');
const projectImage = document.querySelector('.pop-up-overlay-image');
const projectTitle = document.querySelector('.project-title');
const projectTechnologies = document.querySelector('.lang-tags');
const projectDescription = document.querySelector('.description');
const liveLink = document.querySelector('.live-view');
const sourceCode = document.querySelector('.source-code');
const closeProject = document.querySelector('.close');
const previousButton = document.querySelector('.prevProject');
const nextButton = document.querySelector('.nextProject');
const projectsData = [
  {
    id: 0,
    name: 'Awesome Books Single Page Website',
    image: 'assets/images/projects/demo2.png',
    description: 'Awesome books is a single page website that is used to store and remove the books.',
    technologies: ['JavaScript', 'HTML/CSS', 'Webpack', 'Node.js', 'ESLint'],
    live: 'https://ifzarasool.github.io/AwesomeBooks-Single-Page-Website/',
    source: 'https://github.com/IfzaRasool/AwesomeBooks-Single-Page-Website'
  },
  {
    id: 1,
    name: 'Capston Project',
    image: 'assets/images/projects/project1.png',
    description: "The Developer Week website is provides information about the event, speakers, and how guests can attend the events.",
    technologies: ['JavaScript', 'HTML/CSS', 'Webpack', 'Node.js', 'ESLint'],
    live: 'https://ifzarasool.github.io/Capstone-Project/',
    source: 'https://github.com/IfzaRasool/Capstone-Project'
  },
  {
    id: 2,
    name: 'TO-Do List',
    image: 'assets/images/projects/demo.png',
    description:  'A to do list web app that help you keep track of your task .you can add, delete, update your daily task.',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://ifzarasool.github.io/To-Do-List/',
    source: 'https://github.com/IfzaRasool/To-Do-List'
  },
  {
    id: 3,
    name: 'Project under construction',
    image: 'assets/images/projects/default.svg',
    description: 'Big Chief is a website where you find and share everyday cooking inspiration. Discover recipes, cooks, videos, and how-tos based on the food you love.',
    technologies: ['RestAPI', 'CSS', 'JavaScript-Es6', 'HTML'],
    live: 'https://ifzarasool.github.io/Mealdb-API-project/',
    source: 'https://github.com/IfzaRasool/Mealdb-API-project.git'
  },
  {
    id: 4,
    name: 'Space Travelers Hub',
    image: 'assets/images/projects/default.svg',
    description: 'Space-travelers-hub is web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    technologies: ['RESTAPI','React.js','Redux','JavaScript-Es6','Node.js','CSS3', 'HTML5'],
    live: 'https:/',
    source: ''
  },
  {
    id: 5,
    name: 'Project under construction',
    image: 'assets/images/projects/default.svg',
    description: 'I m learning and working hard to build amazing projects. Expect something new soon. In the mean time check out my other small  projects on GitHub.',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/'
  },
];

projectsData.forEach((project) => {
  recentWorks.innerHTML
    += `
    <div class="works work${project.id}">
      <div class="work-details">
        <h3>${project.name}</h3>
        <ul class="language-tags">
          ${project.technologies.map((tech) => (`<li>${tech}</li>`)).join('')}
        </ul>
        <button id="${project.id}" class="works-button">See Project</button>
      </div>
    </div> `;
});

function disablePreviousOrNextButton() {
  if (previousButton.id <= 0) {
    previousButton.style.visibility = 'hidden';
  } else if (nextButton.id >= projectsData.length - 1) {
    nextButton.style.visibility = 'hidden';
  } else {
    previousButton.style.visibility = 'visible';
    nextButton.style.visibility = 'visible';
  }
}
function populatePopup(object) {
  projectImage.src = projectsData[object].image;
  projectTitle.textContent = projectsData[object].name;
  projectTechnologies.innerHTML = projectsData[object].technologies.map((tech) => (`<li>${tech}</li>`)).join('');
  projectDescription.textContent = projectsData[object].description;
  liveLink.href = projectsData[object].live;
  sourceCode.href = projectsData[object].source;
  previousButton.id = projectsData[object].id;
  nextButton.id = projectsData[object].id;
  wrapper.classList.add('blur');
  body.classList.add('color');
  disablePreviousOrNextButton();
}

function closePopup(closeButton) {
  closeButton.addEventListener('click', () => {
    modalbody.style.display = 'none';
    wrapper.classList.remove('blur');
    body.classList.remove('color');
  });
}
closePopup(closeProject);

const projectButtons = document.querySelectorAll('.works-button');
projectButtons.forEach(
  (button) => button.addEventListener('click', () => {
    populatePopup(Number(button.id));
    modalbody.style.display = 'block';
  }),
);

function goToPreviousProject() {
  populatePopup(Number(previousButton.id) - 1);
}

function goToNextProject() {
  populatePopup(Number(nextButton.id) + 1);
}

previousButton.addEventListener('click', goToPreviousProject);
nextButton.addEventListener('click', goToNextProject);