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
    name: 'Feda IT Consulting',
    image: 'assets/images/projects/fedait.png',
    description: 'FEDA has grown to become the leading telematic solutions provider in Mali and in West Africa. They provide Vehicle Service Systems (VSS) including Central Management Software, Mobile DVR, Mobile Data Terminal, Artificial Intelligence products (DMS, ADAS), etc.',
    technologies: ['Next.js', 'Node.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'ESLint', 'MongoDB'],
    live: 'https://ifzarasool.github.io/Capstone-Project/',
    source: 'https://github.com/IfzaRasool/Capstone-Project',
  },

  {
    id: 1,
    name: 'Space Travelers Hub',
    image: 'assets/images/projects/spacepro.png',
    description: 'Space-travelers-hub is web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    technologies: ['RESTAPI', 'React.js', 'Redux', 'JavaScript-Es6', 'Node.js', 'CSS3', 'HTML5'],
    live: 'https://627d39b107b3bf0f75556474--dazzling-travesseiro-1e9711.netlify.app/',
    source: 'https://github.com/IfzaRasool/space-travelers-hub.git',
  },
  {
    id: 2,
    name: 'BookStore CMS',
    image: 'assets/images/projects/bookstore.png',
    description: 'The Bookstore is a website that lets you: View a list of books, Add a book, and Remove a book from the RestApi.',
    technologies: ['RESTAPI', 'React.js', 'Redux', 'JavaScript-Es6', 'Node.js', 'CSS3', 'HTML5'],
    live: 'https://harmonious-mandazi-c37aa2.netlify.app/',
    source: 'https://github.com/IfzaRasool/bookstore.git',
  },
  {
    id: 3,
    name: 'Advance Journal of  Medical and Allied Health Science',
    image: 'assets/images/projects/ajmahs.png',
    description: 'Scores submitted by different players are shown on the leaderboard page. You can also enter your score here. The external Leaderboard API service ensures that all data is retained',
    technologies: ['PHP', 'JavaScript-Es6', 'BootStrap5', 'HTML5/CSS'],
    live: 'https://ajmahs.com.pk/',
    source: 'https://github.com/IfzaRasool/health-publication',
  },
  {
    id: 4,
    name: 'Book an appointment ',
    image: 'assets/images/projects/medibook.png',
    description: 'Its a Doctor appointment scheduling app. Built with a React frontend and Rails backend. Users need to sign up or sign in to access the application.',
    technologies: ['Ruby on Rails', 'React & Redux', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Node.js', 'ESLint'],
    live: 'https://medibook-ui.vercel.app/login',
    source: 'https://github.com/medi-book/medibook-ui',
  },
  {
    id: 5,
    name: 'TO-Do List',
    image: 'assets/images/projects/demo.png',
    description: 'A to do list web app that help you keep track of your task .you can add, delete, update your daily task.',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://ifzarasool.github.io/To-Do-List/',
    source: 'https://github.com/IfzaRasool/To-Do-List',
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