const expertise = [
    {
        id: 0,
        title: 'Frontend Development',
        desc: 'I am a skilled Frontend developer with extensive experience in building robust web applications using HTML, CSS, Javascript, Bootstrap, Tailwind and React JS. I possess a strong understanding of client-side rendering, API fetching, and UiUx converstion into code. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Database Management',
        desc: "As a developer, I'm proficient in creating data models using both stuctured and unstructured databases. I use MySQL database and MongoDB to make projects which requires database management system. Database is must for creating a Full stack application. I am still at learning phase for database management system hence I am not that proficient with it .",
    },
    {
        id: 2,
        title: 'Agile Scrum Methodology',
        desc: 'Agile Scrum is a popular framework used for managing and completing complex projects, particularly in software development. It emphasizes iterative progress, collaboration, and flexibility, allowing teams to deliver high-quality products more efficiently. To make myself ready for complex team projects I learned about Agile Scrum Method',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
