import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'screen-genius',
            description: 'MySQL/Express/Handlebars/SASS',
            link: "https://screen-genius.github.io/",
            repo: "https://github.com/screen-genius/screen-genius.github.io.git"
        },
        {
            name: 'photo-port',
            description: 'React',
            link: "https://achung92.github.io/photo-port/",
            repo: "https://github.com/AChung92/photo-port.git"
        },
        {
            name: 'budget-tracker',
            description: 'Mongoose/MongoDB/Express',
            link: "https://budget-tracker-92.herokuapp.com/",
            repo: "https://github.com/AChung92/budget-tracker.git"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://achung92.github.io/run-buddy/",
            repo: "https://github.com/AChung92/run-buddy.git"
        },
        {
            name: 'tech-blog',
            description: 'Node/MySQL/Sequalize',
            link: "https://tech-blog1992.herokuapp.com/login",
            repo: "https://github.com/AChung92/tech-blog.git"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://achung92.github.io/weather-dashboard/",
            repo: "https://github.com/AChung92/weather-dashboard.git"
        },
        {
            name: 'food-festival',
            description: 'JS/Node/PWA',
            link: "https://achung92.github.io/food-festival/",
            repo: "https://github.com/AChung92/food-festival.git"
        },
        {
            name: 'code-quiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://achung92.github.io/coding-quiz/",
            repo: "https://github.com/AChung92/coding-quiz.git"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://achung92.github.io/password-generator/",
            repo: "https://github.com/AChung92/password-generator.git"
        },
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "https://notetaker-19926.herokuapp.com/",
            repo: "https://github.com/AChung92/notetaker.git"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://achung92.github.io/work-scheduler/",
            repo: "https://github.com/AChung92/work-scheduler.git"
        },
        {
            name: 'taskmaster-pro',
            description: 'HTML/CSS/JavaScript',
            link: "https://achung92.github.io/taskmaster-pro/",
            repo: "https://github.com/AChung92/taskmaster-pro.git"
        },
        {
            name: 'git-it-done',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://achung92.github.io/git-it-done/",
            repo: "https://github.com/AChung92/git-it-done.git"
        }
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;
