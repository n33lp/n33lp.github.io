const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Neel Patel",
        description: `Hey, I'm Neel. I recently completed my journey at the University of Alberta, where I earned a BSc with a double major in Computer Science and Biological Science — a unique but fascinating combination that has shaped my approach to problem-solving and innovation.
        \n\nMy passions have driven me to explore diverse fields, from hands-on lab work and academic research to software development. This varied background has equipped me with a comprehensive perspective and a versatile skill set, enabling me to bridge the gap between complex concepts and practical solutions.
        \n\nI am a software engineer with expertise in full-stack web development. I have built scalable, secure, and reliable web applications using a variety of frameworks and technologies. I take pride in writing high-quality code that adheres to best practices and industry standards. My experience has honed my ability to solve complex problems efficiently, and I am always eager to expand my knowledge and learn new skills.
        \n\nHaving completed my degree, I am excited to pursue a career in software development. I am passionate about emerging technologies and continuously seek opportunities for growth and innovation.`,
        role: "Full-Stack Developer",
        photo: "../photo.png",
        email: "neel.patel0126@gmail.com",
    },
    

    // ============ SOCIAL LINKS ============
    socials: {
		github: "https://github.com/n33lp",
		linkedin: "https://www.linkedin.com/in/n33lp/",
    },

    // ============ PROJECTS ============
    projects: [
        {
			title: "OlympicOracle",
			description: "OlympicOracle is a web application that predicts the outcome of Olympic events using historical data.",
            technologies: "React, Tailwind, Django, Pandas",
			github: "https://github.com/n33lp/OlympicOracle"
		},

        {
			title: "Cardify",
			description: "A cross-platform AI powered note-taking application that allows users to take notes and generate flashcards using an LLM.",
			technologies: "Flutter, FastAPI, Flask",
			github: "https://github.com/n33lp/Cardify"
		},

        {
			title: "StrokeDetector",
			description: "A IOS app and a backend API that detects strokes in real time using a machine learning model.",
			technologies: "Swift, Django, TensorFlow",
			github: "https://github.com/n33lp/StrokeDetector"
		},

		{
			title: "Who-Will",
			description: "A new social media platform allowing users, to follow other users, post content, and interact with other users.",
			technologies: "React, Tailwind, Firebase, Django",
			github: "https://github.com/n33lp/whoWill"
		},

		{
			title: "TradingBot",
			description: "An automated (stock) trading system that buys and sells stocks based on a set of rules.",
			technologies: "Alpaca, lumibot, torch",
			github: "https://github.com/n33lp/tradingBot"
		},

		{
			title: "FungiLink",
			description: "A portal for farmers to see fungal spread in their farm.",
			technologies: "Django,selenium",
			github: "https://github.com/n33lp/Farmers-Portal"
		},
        
        {
            title: "AgriScan",
            description: "A drone programmed to fly autonomously, to detect Fungi in crops.",
            technologies: "dronekit_sitl, OpenCV",
            github: "https://github.com/n33lp/AgriScan"
        },

        {
			title: "CodeCatchers",
			description: "An android QR code catching game that allows users to catch QR codes in real time.",
			technologies: "Android, Google Maps, Firebase, openCV",
			github: "https://github.com/n33lp/CodeCatchers"
		},

		{
			title: "GitHubScraper",
			description: "A scraper to get Github stats of a user.",
			technologies: "GitHub API",
			github: "https://github.com/n33lp/GitHubScraper"
		},
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Univeristy of Alberta",
            degree: "Bachelor of Science in Computer Science and Biological Sciences",
            duration: "Sept 2019 - April 2024",
            image: "ua.png"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Full-Stack Developer",
            company: "Imagine Cities",
            duration: "Sept 2023 - Present (1+ Year)",
            descriptions: [
                "Designed the database architecture and developed multi-directional search algorithms for a web application using OOP principles and SQL for efficient data retrieval and management.",
                "Designed and implemented RESTful APIs to facilitate data communication between frontend and backend.",
                "Performed automated testing using Selenium to ensure and improve the functionality and reliability of the software.",
            ]
        },
        {
            position: "Software Developer",
            company: "iGEM UAlberta",
            duration: "Jan 2023 - Nov 2023 (11 Months)",
            descriptions: [
                "As team lead, orchestrated the development of an innovative automated fungal detection system for farmers, utilizing drones and artificial intelligence to enhance agricultural efficiency using SDLC practices.",
                "Developed a Django web application and incorporated CI/CD to host via Amazon EC2.",
                "Mentored and managed team members, fostering collaboration providing guidance, and ensuring effective communication in their roles and tasks."
            ]
        },
        {
            position: "AI Software Developer",
            company: "University of Alberta",
            duration: "July 2023 - Oct 2023 (4 Months)",
            descriptions: [
                "Developed a web application for automated cell counting, streamlining the process resulting in a 97% time efficiency enhancement.",
                "Developed a protocol for calculating validity that has never been done before."
            ]
        },
        {
            position: "Research Assistant",
            company: "University of Alberta",
            duration: "May 2023 - Aug 2023 (4 Months)",
            descriptions: [
                "Leveraged data mining techniques to generate a statistical model from 4 countries, filtering from 131 different variables to 1 independent variable, 4 dependent variables, 4 mediator variables, and 6 confounding variables, using Tableau for visualization.",
                "Performed statistical tests to understand the role of Circadian Typology in health-related quality of life in Asthma.",
                "Publication: https://doi.org/10.1111/cea.14424"
            ]
        },
    ],

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "Cybersecurity Professional Certificate",
            description: "Provided by Coursera & Authorized by Google",
            icon: "google",
            link: "https://www.coursera.org/account/accomplishments/professional-cert/PQQAVP3AVN93"
        },
        {
            title: "Data Analytics Professional Certificate",
            description: "Provided by Coursera & Authorized by Google",
            icon: "google",
            link: "https://www.coursera.org/account/accomplishments/professional-cert/FSP4N4NHBAXB"
        },
        {
            title: "Project Management Professional Certificate",
            description: "Provided by Coursera & Authorized by Google",
            icon: "google",
            link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9M94HGZX4T8S"
        }
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "If you think I am a good fit for your team please feel free to email me at neel.patel0126@gmail.com or connect with me on LinkedIn.",
    },

    // ============ FOOTER ============
    footer: "© 2024 Neel Patel. All Rights Reserved"
}

export default info