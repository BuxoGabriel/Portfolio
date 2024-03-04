export const skills = [
    "Algorithmic Problem Solving",
    "Fullstack Development",
    "AI/ML",
    "Testing",
    "DevOps",
    "Docker",
    "Agile Workflow",
    "Communication"
]

export const languages = [
    "Javascript",
    "Typescript",
    "C",
    "Rust",
    "Python",
    "SQL",
    "Next",
    "React",
    "Svelte",
    "Angular",
    "Godot"
] as const

export const projects = [
     {
       name: "Neural Networks Tadpoles",
       description: "In my senior year of highschool I made this website. Including Neural Networks that I made from scratch used to beat flappy bird using a genetic algorithm and a fighting game made in p5js!",
       imageSrc: "/tadpoles.png",
       url: "http://buxogabriel.github.io/"
     },
     {
        name: "Todo App",
        description: "An offline-first todo PWA. This fullstack app was built in sveltekit with handrolled auth and is still in development.",
        imageSrc: "/todo.png",
        url: "https://capable-praline-7301a7.netlify.app/"
     },
     {
        name: "Rust Music Maker",
        description: "This app written in rust and designed as an exploration in writing files to match specifications allows users to make songs, save them to a custom file format and export them to wav files.",
        imageSrc: "/music.png",
        url: "https://www.github.com/buxogabriel/simple-files"
     },
] as const

export const Titles = [
    "Software Engineer",
    "Computer Scientist",
    "Fullstack Developer"
] as const