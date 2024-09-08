const portfolio = [
    {
        id: 0,
        projectName: "Playing Spirit",
        url: "https://github.com/arvindyadv03",
        image: "projects/playingspirit.png",
        projectDetail: "Playing is open-source fullstack web application which allow users to discover game partner/players near you  ",
        technologiesUsed: [
            {
                tech: "Next JS"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "Express Js"
            },
            {
                tech: "Next-auth"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "JPS Engineers",
        url: "https://github.com/arvindyadv03",
        image: "projects/jps.png",
        projectDetail: "JP Engineers is website which shows the products and services offered by and Engineering Company.",
        technologiesUsed: [
            {
                tech: "HTML5"
            },
            {
                tech: "CSS3"
            },
            {
                tech: "Javascript"
            },
        ]
    },
    {
        id: 0,
        projectName: "Random Password Generator",
        url: "https://github.com/arvindyadv03",
        image: "projects/passwordgen.png",
        projectDetail: "JMM Technologies is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
           
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Jokes App Api",
        url: "https://github.com/arvindyadv03   ",
        image: "projects/jokesapi.png",
        projectDetail: "Jokes app is created to practice my api handling. In this project I created an api having jokes in backend and fetching this api in my front-end",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Express"
            },
            {
                tech: "Node.js"   
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
