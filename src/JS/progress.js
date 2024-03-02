//  Values
const frontend_skills = [
    { 
        name: "HTML",
        stat: "90%",
    },
    { 
        name: "CSS",
        stat: "80%",
    },
    { 
        name: "JavaScript",
        stat: "60%",
    },
    { 
        name: "React",
        stat: "40%",
    },
];

const backend_skills = [
    { 
        name: "Python",
        stat: "90%",
    },
    { 
        name: "Java",
        stat: "70%",
    },
    { 
        name: "C++",
        stat: "30%",
    },
    { 
        name: "Django",
        stat: "75%",
    },
    { 
        name: "Flask",
        stat: "40%",
    },
    { 
        name: "Firebase",
        stat: "40%",
    },
    { 
        name: "SQL",
        stat: "60%",
    },
];

const mobile_skills = [
    { 
        name: "Kotlin",
        stat: "20%",
    },
    { 
        name: "Swift",
        stat: "20%",
    },
];

const data_skills = [
    { 
        name: "R",
        stat: "60%",
    },
    { 
        name: "Julia",
        stat: "50%",
    },
    { 
        name: "STATA",
        stat: "60%",
    },
    { 
        name: "Tableau",
        stat: "40%",
    },
];

// Funcs
function frontendSkills() {
    const skillsContainer = document.querySelector('.frontend-skills');

    frontend_skills.forEach(skill => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.width = skill.stat;

        const progressBarCon = document.createElement('div');
        progressBarCon.classList.add('progress-bar-container');

        const skillName = document.createElement('span');
        skillName.classList.add('skill-name');
        skillName.textContent = skill.name;

        const skillStat = document.createElement('span');
        skillStat.classList.add('skill-stat');
        skillStat.textContent = skill.stat;

        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        const barInfo = document.createElement('div');
        barInfo.classList.add('bar-info'); // Use this class to apply Flexbox

        barInfo.appendChild(skillName);
        barInfo.appendChild(skillStat); // Append the percentage span
        skillDiv.appendChild(barInfo); // Append the barInfo div
        
        progressBarCon.appendChild(progressBar);
        skillDiv.appendChild(progressBarCon);

        skillsContainer.appendChild(skillDiv); // Append each skill to the container
    });
}

function backendSkills() {
    const skillsContainer = document.querySelector('.backend-skills');

    backend_skills.forEach(skill => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.width = skill.stat;

        const progressBarCon = document.createElement('div');
        progressBarCon.classList.add('progress-bar-container');

        const skillName = document.createElement('span');
        skillName.classList.add('skill-name');
        skillName.textContent = skill.name;

        const skillStat = document.createElement('span');
        skillStat.classList.add('skill-stat');
        skillStat.textContent = skill.stat;

        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        const barInfo = document.createElement('div');
        barInfo.classList.add('bar-info'); // Use this class to apply Flexbox

        barInfo.appendChild(skillName);
        barInfo.appendChild(skillStat); // Append the percentage span
        skillDiv.appendChild(barInfo); // Append the barInfo div
        
        progressBarCon.appendChild(progressBar);
        skillDiv.appendChild(progressBarCon);

        skillsContainer.appendChild(skillDiv); // Append each skill to the container
    });
};

function mobileSkills() {
    const skillsContainer = document.querySelector('.mobile-skills');

    mobile_skills.forEach(skill => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.width = skill.stat;

        const progressBarCon = document.createElement('div');
        progressBarCon.classList.add('progress-bar-container');

        const skillName = document.createElement('span');
        skillName.classList.add('skill-name');
        skillName.textContent = skill.name;

        const skillStat = document.createElement('span');
        skillStat.classList.add('skill-stat');
        skillStat.textContent = skill.stat;

        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        const barInfo = document.createElement('div');
        barInfo.classList.add('bar-info'); // Use this class to apply Flexbox

        barInfo.appendChild(skillName);
        barInfo.appendChild(skillStat); // Append the percentage span
        skillDiv.appendChild(barInfo); // Append the barInfo div
        
        progressBarCon.appendChild(progressBar);
        skillDiv.appendChild(progressBarCon);

        skillsContainer.appendChild(skillDiv); // Append each skill to the container
    });
};

function dataSkills() {
    const skillsContainer = document.querySelector('.data-skills');

    data_skills.forEach(skill => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.width = skill.stat;

        const progressBarCon = document.createElement('div');
        progressBarCon.classList.add('progress-bar-container');

        const skillName = document.createElement('span');
        skillName.classList.add('skill-name');
        skillName.textContent = skill.name;

        const skillStat = document.createElement('span');
        skillStat.classList.add('skill-stat');
        skillStat.textContent = skill.stat;

        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        const barInfo = document.createElement('div');
        barInfo.classList.add('bar-info'); // Use this class to apply Flexbox

        barInfo.appendChild(skillName);
        barInfo.appendChild(skillStat); // Append the percentage span
        skillDiv.appendChild(barInfo); // Append the barInfo div
        
        progressBarCon.appendChild(progressBar);
        skillDiv.appendChild(progressBarCon);

        skillsContainer.appendChild(skillDiv); // Append each skill to the container
    });
};



// Calls
frontendSkills();
backendSkills();
mobileSkills();
dataSkills();

