import tadpolesSS from "@/project-screenshots/tadpoles.png"
import todoSS from "@/project-screenshots/todo.png"
import musicSS from "@/project-screenshots/music.png"
import ssgSS from "@/project-screenshots/ssg.png"

export const SKILLS = [
    "Algorithmic Problem Solving",
    "Fullstack Development",
    "Low Level Programming",
    "Object Oriented Programming",
    "Test Driven Development",
    "DevOps",
    "Docker",
    "Agile Development",
    "Accessible Design",
    "Communication",
    "Linux",
    "Vim"
]

export const LANGUAGES = [
    "Javascript",
    "Typescript",
    "C",
    "Rust",
    "Python",
    "SQL",
    "NextJS",
    "React",
    "Svelte",
    "Angular",
    "Java",
    "C#",
    "Godot"
] as const

export const PROJECTS = [
     {
       name: "Neural Networks Tadpoles",
       description: "In my senior year of highschool, after studying and self teaching neural networks, I created one from scratch and trained it to beat a flappy bird clone using a genetic algorithm!",
       imageSrc: tadpolesSS,
       imageAlt: "A screenshot of many simulated tadpoles leaping over seaweed obstacles.",
       url: "http://buxogabriel.github.io/Ai"
     },
     {
        name: "Todo App",
        description: "An offline-first todo PWA where you can have multiple lists and export data from your account to your local storage. This fullstack app was built in sveltekit with handrolled auth and is still in development.",
        imageSrc: todoSS,
        imageAlt: "A screenshot of a todo app. The user is selecting from a list of lists.",
        url: "https://capable-praline-7301a7.netlify.app/"
     },
     {
        name: "Rust Music Maker",
        description: "This app written in rust and designed as an exploration in writing files to match specifications allows users to make songs, save them to a custom file format and export them to wav files.",
        imageSrc: musicSS,
        imageAlt: "A screenshot of the Rust Music Maker command line interface where the user creates a new song and exports it to a dot wav file.",
        url: "https://www.github.com/buxogabriel/simple-files"
     },
     {
        name: "Python Static Site Generator",
        description: "A static site generator that can convert markdown files into html and serve. Project provided by boot.dev",
        imageSrc: ssgSS,
        imageAlt: "A screenshot of a website made using the static site generator",
        url: "https://github.com/BuxoGabriel/pythonSSG"
     },
    //  {
    //     name: "TSML",
    //     description: "A neural network library written in Typescript from scratch. I made this to apply object oriented principles and explore the mathematics behind machine learning."
    //  }
] as const

export const TITLES = [
    "Software Engineer",
    "Computer Scientist",
    "Fullstack Developer"
] as const