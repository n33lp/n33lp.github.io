const act_technologies = [
    { 
        imageUrl: "src/img/technologies/aws.svg", 
        title: "AWS EC2",
    },
    { 
        imageUrl: "src/img/technologies/aws.svg", 
        title: "AWS S2",
    },
    { 
        imageUrl: "src/img/technologies/cloudcomputing.svg", 
        title: "Cybera",
    },
    { 
        imageUrl: "src/img/technologies/code.svg", 
        title: "C",
    },
    { 
        imageUrl: "src/img/technologies/code.svg", 
        title: "C++",
    },
    { 
        imageUrl: "src/img/technologies/code.svg", 
        title: "C#",
    },
    { 
        imageUrl: "src/img/technologies/css.svg", 
        title: "CSS",
    },
    { 
        imageUrl: "src/img/technologies/digitalocean.svg", 
        title: "Digital Ocean",
    },
    { 
        imageUrl: "src/img/technologies/django.svg", 
        title: "Django",
    },
    { 
        imageUrl: "src/img/technologies/docker.svg", 
        title: "Docker",
    },
    { 
        imageUrl: "src/img/technologies/fastapi.svg", 
        title: "FastApi",
    },
    { 
        imageUrl: "src/img/technologies/firebase.svg", 
        title: "Firebase",
    },
    { 
        imageUrl: "src/img/technologies/flask.svg", 
        title: "Flask",
    },
    { 
        imageUrl: "src/img/technologies/flutter.svg", 
        title: "Flutter",
    },
    { 
        imageUrl: "src/img/technologies/git.svg", 
        title: "Git",
    },
    { 
        imageUrl: "src/img/technologies/github.svg", 
        title: "GitHub",
    },
    { 
        imageUrl: "src/img/technologies/heroku.svg", 
        title: "Heroku",
    },
    { 
        imageUrl: "src/img/technologies/gitlab.svg", 
        title: "GitLab",
    },
    { 
        imageUrl: "src/img/technologies/html.svg", 
        title: "HTML",
    },
    { 
        imageUrl: "src/img/technologies/java.svg", 
        title: "Java",
    },
    { 
        imageUrl: "src/img/technologies/js.svg", 
        title: "JavaScript",
    },
    { 
        imageUrl: "src/img/technologies/julia.svg", 
        title: "Julia",
    },
    { 
        imageUrl: "src/img/technologies/kotlin.svg", 
        title: "Kotlin",
    },
    { 
        imageUrl: "src/img/technologies/mongodb.svg", 
        title: "MongoDB",
    },
    { 
        imageUrl: "src/img/technologies/mysql.svg", 
        title: "mySQL",
    },
    { 
        imageUrl: "src/img/technologies/netlify.svg", 
        title: "Netlify",
    },
    { 
        imageUrl: "src/img/technologies/node.svg", 
        title: "Node",
    },
    { 
        imageUrl: "src/img/technologies/numpy.svg", 
        title: "NumPy",
    },
    { 
        imageUrl: "src/img/technologies/pandas.svg", 
        title: "Pandas",
    },
    { 
        imageUrl: "src/img/technologies/postgresql.svg", 
        title: "PostgreSQL",
    },
    { 
        imageUrl: "src/img/technologies/postman.svg", 
        title: "Postman",
    },
    { 
        imageUrl: "src/img/technologies/pytest.svg", 
        title: "PyTest",
    },
    { 
        imageUrl: "src/img/technologies/python.svg", 
        title: "Python",
    },
    { 
        imageUrl: "src/img/technologies/r.svg", 
        title: "R",
    },
    { 
        imageUrl: "src/img/technologies/react.svg", 
        title: "React",
    },
    { 
        imageUrl: "src/img/technologies/sql.svg", 
        title: "SQL",
    },
    { 
        imageUrl: "src/img/technologies/swift.svg", 
        title: "Swift",
    },
    { 
        imageUrl: "src/img/technologies/tableau.svg", 
        title: "Tableau",
    },
    { 
        imageUrl: "src/img/technologies/tensorflow.svg", 
        title: "Tensorflow",
    },
    { 
        imageUrl: "src/img/technologies/ts.svg", 
        title: "TypeScript",
    },
];

const technologies = [
    { 
        imageUrl: "src/img/technologies/aws.svg", 
        title: "AWS EC2",
    },
    { 
        imageUrl: "src/img/technologies/cloudcomputing.svg", 
        title: "cloudcomputing",
    },
    { 
        imageUrl: "src/img/technologies/code.svg", 
        title: "code",
    },    { 
        imageUrl: "src/img/technologies/digitalocean.svg", 
        title: "Digital Ocean",
    },
    { 
        imageUrl: "src/img/technologies/django.svg", 
        title: "Django",
    },
    { 
        imageUrl: "src/img/technologies/git.svg", 
        title: "Git",
    },
];


// for cloud?
function fetchSVG(url) {
    return fetch(url).then(response => response.text());
}

async function generateTechnologiesSlides() {
    const technologiesGrid = document.querySelector('.technologiesGrid');
    technologiesGrid.innerHTML = ''; // Clear existing content

    for (const technology of technologies) {
        const card = document.createElement('div');
        card.classList.add('technology-card');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('technology-card-img');

        // Fetch the SVG markup from the server and set it as innerHTML of the container
        const svgMarkup = await fetchSVG(technology.imageUrl);
        imgContainer.innerHTML = svgMarkup;

        const title = document.createElement('p');
        title.textContent = technology.title;

        card.appendChild(imgContainer);
        card.appendChild(title);
        technologiesGrid.appendChild(card);
    }
}

// // Call the function to generate the slides
// generateTechnologiesSlides();



// function generateTechnologiesSlides() {
//     const technologiesGrid = document.querySelector('.technologiesGrid');
//     technologiesGrid.innerHTML = ''; // Clear existing content

//     technologies.forEach(technology => {
//         const card = document.createElement('div');
//         card.classList.add('technology-card');

//         const imgContainer = document.createElement('div');
//         imgContainer.classList.add('technology-card-img');
        
//         const image = document.createElement('img');
//         image.classList.add('technology-card-logo');
//         image.alt = technology.title; // Correct way to assign alt text
//         image.src = technology.imageUrl; // Correct way to assign source URL

//         const title = document.createElement('p');
//         title.textContent = technology.title;

//         imgContainer.appendChild(image); // Add the image to its container

//         card.appendChild(imgContainer); // Add the image container to the card
//         card.appendChild(title); // Add the title to the card
//         technologiesGrid.appendChild(card); // Add the card to the grid

//         console.log("Card added: ", technology.title);
//     });
// }

generateTechnologiesSlides();
