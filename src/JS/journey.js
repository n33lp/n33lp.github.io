const blocks = [
    { 
        type: "experience",
        title: "Lab Assistant I",
        location: "DynaLIFE Medical Labs",
        date: "Dec. 2020 - Aug. 2022",
        link: "https://www.dynalifedx.com",
    },
    { 
        type: "education",
        title: "Data Analytics Professional Certificate",
        location: "Google, Coursera",
        date: "June. 2022",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/FSP4N4NHBAXB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
    },
    { 
        type: "education",
        title: "Project Management Professional Certificate",
        location: "Google, Coursera",
        date: "Jan. 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9M94HGZX4T8S",
    },
    { 
        type: "experience",
        title: "Director of Technology",
        location: "UAlberta iGEM",
        date: "Jan. 2023 - Nov. 2023",
        link: "https://2023.igem.wiki/ualberta/",
    },
    { 
        type: "experience",
        title: "Research Assistant",
        location: "University of Alberta",
        date: "May. 2023 - Aug. 2023",
        link: "https://www.ualberta.ca/alberta-respiratory-centre/index.html",
    },
    { 
        type: "experience",
        title: "AI Software Developer",
        location: "University of Alberta",
        date: "July. 2023 - Oct. 2023",
        link: "https://www.ualberta.ca/alberta-respiratory-centre/index.html",
    },
    { 
        type: "experience",
        title: "Full Stack Developer",
        location: "Imagine Cities",
        date: "Sept. 2023 - Present",
        link: "https://www.imaginecities.com/",
    },
    { 
        type: "experience",
        title: "Teaching Assistant: Introduction to the Foundations of Computation I",
        location: "University of Alberta",
        date: "Sept. 2023 - Dec. 2023",
        link: "https://apps.ualberta.ca/catalogue/course/cmput/174",
    },
    { 
        type: "education",
        title: "Publication: Association between allergic conditions and school absenteeism among Indian adolescents",
        location: "https://doi.org/10.1111/cea.14424",
        date: "Nov. 2023",
        link: "https://doi.org/10.1111/cea.14424",
    },
    { 
        type: "experience",
        title: "Teaching Assistant: Introduction to Software Engineering",
        location: "University of Alberta",
        date: "Jan. 2024 - Apr. 2024",
        link: "https://apps.ualberta.ca/catalogue/course/cmput/301",
    },
    { 
        type: "education",
        title: "Bachelor of Science",
        location: "University of Alberta",
        date: "Sept. 2019 - Apr. 2024",
        link: "https://www.ualberta.ca/science/programs/bachelor-of-science/index.html",
    },
    { 
        type: "education",
        title: "Cybersecurity Professional Certificate",
        location: "Google, Coursera",
        date: "May. 2024",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/PQQAVP3AVN93",
    },

];


function populateRoad() {
    const timeline = document.querySelector('.timeline-container');

    blocks.forEach(block => {
        const itemblock = document.createElement('div');
        itemblock.classList.add('timeline-block');
        if (block.type === "experience") {
            itemblock.classList.add('experience');
        }else if (block.type === "education") {
            itemblock.classList.add('education');
        }

        const itemblockcontent = document.createElement('div');
        itemblockcontent.classList.add('timeline-content');
        if (block.type === "experience") {
            itemblockcontent.classList.add('exAlign');
        }else if (block.type === "education") {
            itemblockcontent.classList.add('edAlign');
        }


        const itemblocktitle = document.createElement('p');
        itemblocktitle.textContent = block.title;
        
        const itemblockloco = document.createElement('h6');

        
        const itemblocklocolink = document.createElement('a');
        itemblocklocolink.href = block.link;
        itemblocklocolink.target = "_blank";
        itemblocklocolink.textContent = block.location;
        itemblocklocolink.style.color = "dodgerblue";
        itemblocklocolink.style.textDecoration = "none";

        itemblockloco.appendChild(itemblocklocolink);

        const itemblockdate = document.createElement('h6');
        itemblockdate.textContent = block.date;

        const marker = document.createElement('div');
        marker.classList.add('marker');
        
        itemblockcontent.appendChild(itemblocktitle);
        itemblockcontent.appendChild(itemblockloco);
        itemblockcontent.appendChild(itemblockdate);

        itemblock.appendChild(itemblockcontent);
        itemblock.appendChild(marker);

        timeline.appendChild(itemblock);

    });
};



// Calls
populateRoad();
