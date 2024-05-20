const projects = [
    { 
        imageUrl: "src/img/cardify.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "Cardify",
        description: "A cross-platform AI powered note-taking application.",
        sourceCode: "https://github.com/n33lp/Cardify"
    },
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
        sourceCode: "https://github.com/n33lp/whoWill" 
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
        imageUrl: "src/img/QR.jpg", //https://qr.io/
        title: "CodeCatchers",
        description: "An android QR code catching game.",  
        sourceCode: "https://github.com/n33lp/CodeCatchers"  
    },
    { 
        imageUrl: "src/img/drone.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "AgriScan",
        description: "A drone programmed to fly autonomously, to detect Fungi.",
        sourceCode: "https://github.com/n33lp/AgriScan"
    },
    { 
        imageUrl: "src/img/github.jpg", //https://www.shecodes.io/challenge_submissions/920109/embed
        title: "GitHubScraper",
        description: "A scraper to get Github stats.",
        sourceCode: "https://github.com/n33lp/GitHubScraper"
    },
    { 
        imageUrl: "src/img/web.jpg", //https://dev.to/williamnogueira/the-problem-of-bloat-in-web-development-do-we-really-need-front-end-frameworks-14ma
        title: "Personal Website",
        description: "This website, built using HTML, CSS, and JavaScript.",
        sourceCode: "https://github.com/n33lp/n33lp.github.io" 
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
        title.id = "carouselTitle";

        const description = document.createElement('p');
        description.textContent = project.description;
        description.id = "carouselDescription";

        const sourceCodeBtn = document.createElement('button');
        sourceCodeBtn.textContent = " <code/>";
        sourceCodeBtn.id = "carouselButton";

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
let slideWidth; // Width of each slide in percentage


// Navigation functions
const totalSlides = projects.length;
let currentSlide = 1;

function showSlide() {
    slideWidth = document.querySelector('.slide').offsetWidth; // Width of each slide in percentage
    let moveTo = currentSlide - 1;
    let totalOffset = moveTo * slideWidth * -1;
    document.querySelector('.slides').style.transform = `translateX(${totalOffset}px)`;
}

function prevSlide() {
    if (currentSlide - 3 > 0){
        currentSlide = currentSlide - 3;
        showSlide();
    }
}

function nextSlide() {
    if (currentSlide + 3 < totalSlides) {
        currentSlide = currentSlide + 3;
        showSlide(); 
    }
}