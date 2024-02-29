const projects = [
    { 
        imageUrl: "src/img/healthcare.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "StrokeDetector",
        description: "A IOS app and a backend API that detects strokes in real time.",
        sourceCode: "https://github.com/n33lp/StrokeDetector"  
    },
    { 
        imageUrl: "src/img/web.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "Who-Will",
        description: "A new social media platform, using React and Django.",
        sourceCode: "https://github.com/n33lp/404f23project-who-will" 
    },
    { 
        imageUrl: "src/img/trading.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "TradingBot",
        description: "An automated (stock) trading system.",
        sourceCode: "https://github.com/n33lp/tradingBot" 
    },
    { 
        imageUrl: "src/img/agriculture.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "FungiLink",
        description: "A portal for farmers to see fungal spread in their farm.",
        sourceCode: "https://github.com/n33lp/Farmers-Portal" 
    },
    { 
        imageUrl: "src/img/web.jpg", //https://dev.to/williamnogueira/the-problem-of-bloat-in-web-development-do-we-really-need-front-end-frameworks-14ma
        title: "Personal Website",
        description: "This website, built using HTML, CSS, and JavaScript.",
        sourceCode: "https://github.com/n33lp/n33lp.github.io" 
    },
    { 
        imageUrl: "src/img/QR.jpg", //https://qr.io/
        title: "CodeCatchers",
        description: "An android QR code catching game.",  
        sourceCode: "https://github.com/n33lp/CodeCatchers"  
    },
    { 
        imageUrl: "src/img/drone.jpg", //https://dev.to/williamnogueira/the-problem-of-bloat-in-web-development-do-we-really-need-front-end-frameworks-14ma
        title: "AgriScan",
        description: "A drone programmed to fly autonomously, to detect Fungi.",
        sourceCode: ""
    },
    { 
        imageUrl: "src/img/code2.jpg", //https://dev.to/williamnogueira/the-problem-of-bloat-in-web-development-do-we-really-need-front-end-frameworks-14ma
        title: "Project 8",
        description: "Brief description of Project 8.",
        sourceCode: ""
    },
    { 
        imageUrl: "src/img/code2.jpg", //https://dev.to/williamnogueira/the-problem-of-bloat-in-web-development-do-we-really-need-front-end-frameworks-14ma
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

        const sourceCodeBtn = document.createElement('button');
        sourceCodeBtn.textContent = " <code />";
        sourceCodeBtn.style.backgroundColor = "dodgerblue";
        sourceCodeBtn.style.color = "black";
        // border-radius: 40px;
        sourceCodeBtn.style.borderRadius = "10px";

        const sourceCodeLk = document.createElement('a');
        sourceCodeLk.href = project.sourceCode;
        sourceCodeLk.target = "_blank";

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        sourceCodeLk.appendChild(sourceCodeBtn);
        card.appendChild(sourceCodeLk);
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