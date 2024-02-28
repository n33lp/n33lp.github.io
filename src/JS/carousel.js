const projects = [
    { 
        imageUrl: "src/img/code2.jpg",
        title: "StrokeDetector",
        description: "A IOS app and a backend API that detects strokes in real time.",
        sourceCode: "https://github.com/n33lp/StrokeDetector"
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "Who-Will",
        description: "A new social media platform, using React and Django.",
        sourceCode: "https://github.com/n33lp/404f23project-who-will"
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "TradingBot",
        description: "An automated (stock) trading system.",
        sourceCode: "https://github.com/n33lp/tradingBot"
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "Farmers-Portal",
        description: "A portal for farmers to see fungal spread in their farm.",
        sourceCode: "https://github.com/n33lp/Farmers-Portal"
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "Personal Website",
        description: "This website, built using HTML, CSS, and JavaScript.",
        sourceCode: ""
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "CodeCatchers",
        description: "An android QR code catching game.",
        sourceCode: "https://github.com/n33lp/CodeCatchers"
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "Project 7",
        description: "Brief description of Project 7.",
        sourceCode: ""
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "Project 8",
        description: "Brief description of Project 8.",
        sourceCode: ""
    },
    { 
        imageUrl: "src/img/code2.jpg",
        title: "Project 9",
        description: "Brief description of Project 9.",
        sourceCode: ""
    },
];

// Function to generate a slide for each project
function generateSlides() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = ''; // Clear existing slides

    projects.forEach(project => {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = project.imageUrl;
        image.alt = project.title;

        const title = document.createElement('h3');
        title.textContent = project.title;
        title.style.color = "dodgerblue";
        // font-size:
        title.style.fontSize = "30px";

        const description = document.createElement('p');
        description.textContent = project.description;
        description.style.fontSize = "20px";

        const sourceCode = document.createElement('button');
        sourceCode.textContent = " <code />";
        sourceCode.style.backgroundColor = "dodgerblue";
        sourceCode.style.color = "black";
        // border-radius: 40px;
        sourceCode.style.borderRadius = "10px";

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(sourceCode);
        slide.appendChild(card);
        slidesContainer.appendChild(slide);
    });

    // Update slides container width
    slidesContainer.style.width = `${projects.length * 33.33}%`; // Adjusted to display 3 slides at a time
}

// Initial function call to generate slides
generateSlides();

// Navigation functions
const totalSlides = projects.length;
let currentSlide = 0;

// function showSlide(slideIndex) {
//     currentSlide = slideIndex;
//     const offset = (-100 * currentSlide * 0.33); // Adjust offset for displaying three cards per slide
//     document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// }

function showSlide(slideIndex) {
    currentSlide = slideIndex;
    const offsetPercentage = (-100 * currentSlide * 0.33); // Adjust offset for displaying three cards per slide
    const offsetPixels = -10*slideIndex; // Additional pixels to move to the right
    const totalOffset = `calc(${offsetPercentage}% + ${offsetPixels}px)`;

    document.querySelector('.slides').style.transform = `translateX(${totalOffset})`;
}

// function prevSlide() {
//     const nextSlideIndex = Math.max(currentSlide - 3, 0); // Move back by three slides, ensuring not to go below 0
//     showSlide(nextSlideIndex);
// }
function prevSlide() {
    // Assuming 'currentSlide' represents the group index (0 for 0-1-2, 1 for 3-4-5, etc.)
    const groupSize = 3;
    const prevSlideIndex = Math.max(currentSlide - 1, 0);
    showSlide(prevSlideIndex);
}

function nextSlide() {
    const nextSlideIndex = Math.min(currentSlide + 1, Math.ceil(totalSlides / 3) - 1); // Move forward by one slide, ensuring not to exceed the total slides
    showSlide(nextSlideIndex);
}