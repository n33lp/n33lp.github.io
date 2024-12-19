const projects = [
    { 
        imageUrl: "src/img/olympicRings.png", //https://dev.to/williamnogueira/the-problem-of-bloat-in-web-development-do-we-really-need-front-end-frameworks-14ma
        title: "OlympicOracle",
        description: "OlympicOracle is a web application that predict the outcome of the 2024 summer olypmics, based on previous olympic data.",
        sourceCode: "https://github.com/n33lp/OlympicOracle",
        projectTags: "NumPy,React,Django"
    },
    { 
        imageUrl: "src/img/cardify.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "Cardify",
        description: "A cross-platform AI powered note-taking application that converts your personal notes into flashcards using a LLM.",
        sourceCode: "https://github.com/n33lp/Cardify",
        projectTags: "NumPy,React,Django"
    },
    { 
        imageUrl: "src/img/healthcare.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "StrokeDetector",
        description: "StrokeDetector is a IOS application that detects strokes in real time based on the level of facial palsy of the user.",
        sourceCode: "https://github.com/n33lp/StrokeDetector",
        projectTags: "NumPy,React,Django"  
    },
    { 
        imageUrl: "src/img/web.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "Who-Will",
        description: "A new social media platform, using React and Django allowing users to message, post, like, comment and follow others.",
        sourceCode: "https://github.com/n33lp/whoWill",
        projectTags: "NumPy,React,Django" 
    },
    { 
        imageUrl: "src/img/trading.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "TradingBot",
        description: "An automated (stock) trading system, tested using back testing. The bot using news to predict the outcoming of the stock in question.",
        sourceCode: "https://github.com/n33lp/tradingBot",
        projectTags: "NumPy,React,Django" 
    },
    { 
        imageUrl: "src/img/agriculture.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "FungiLink",
        description: "A portal for farmers to see fungal spread in their farm via satellite imagery.",
        sourceCode: "https://github.com/n33lp/Farmers-Portal",
        projectTags: "NumPy,React,Django" 
    },
    { 
        imageUrl: "src/img/QR.jpg", //https://qr.io/
        title: "CodeCatchers",
        description: "An android QR code catching game where users have to travlling around to collect QR to stay ahead in the leaderboard.",  
        sourceCode: "https://github.com/n33lp/CodeCatchers",
        projectTags: "NumPy,React,Django"  
    },
    { 
        imageUrl: "src/img/drone.jpg", //OpenAI. (2024). ChatGPT [Large language model]. /g/g-gFt1ghYJl-logo-creator
        title: "AgriScan",
        description: "A product that allows a drone to fly autonomously, while using computer vision to detect fungal growth in the farms.",
        sourceCode: "https://github.com/n33lp/AgriScan",
        projectTags: "NumPy,React,Django"
    },
    { 
        imageUrl: "src/img/github.jpg", //https://www.shecodes.io/challenge_submissions/920109/embed
        title: "GitHubScraper",
        description: "A scraper to get personal Github stats, for data analysis. For exmaple getting the day of the week that on average has the most commits.",
        sourceCode: "https://github.com/n33lp/GitHubScraper",
        projectTags: "NumPy,React,Django"
    }
];


function generateSlides() {
    const projectGrid = document.querySelector('.project');
    projectGrid.innerHTML = ''; 

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('projectTags');

        const tagList = project.projectTags.split(',');
        tagList.forEach(tag => {
            const tagDiv = document.createElement('div');
            tagDiv.classList.add('project-tag');
            const tagName = document.createElement('p');
            tagName.textContent = tag;
            tagDiv.appendChild(tagName);
            tagsContainer.appendChild(tagDiv);
        });

        const title = document.createElement('h1');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const sourceCodeBtn = document.createElement('button');
        sourceCodeBtn.textContent = "<code/>";

        const sourceCodeLk = document.createElement('a');
        sourceCodeLk.href = project.sourceCode;
        sourceCodeLk.target = "_blank";
        sourceCodeLk.appendChild(sourceCodeBtn);

        const temp = document.createElement('div');
        temp.appendChild(tagsContainer);
        temp.appendChild(title);
        temp.appendChild(description);
        card.appendChild(temp);
        card.appendChild(sourceCodeLk);
        projectGrid.appendChild(card);
    });
}

generateSlides();