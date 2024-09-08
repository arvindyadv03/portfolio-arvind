const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'MIMT Greater Noida, UP',
                degree: "Bachelor's in Computer Application",
                detail: "Bachelor's in Computer Application from MIMT Grater Noida.",
                year: '2021-2024',
                percentage:"75"
            },
            {
                id: 1,
                title: 'Sarvodaya Bal Vidayalaya (12th) - CBSE',
                degree: 'Senior Secondary Education',
                detail: "Completed Senior Secondary Education(12th) from SBV Peera Garhi, New Delhi",
                year: '2021',
                 percentage:"76"
            },
            {
                id: 2,
                title: 'Sarvodaya Bal Vidayalaya (10th) - CBSE',
                degree: 'Secondary Educstion',
                detail: "Completed Senior Secondary Education(10th) from SBV Peera Garhi, New Delhi",
                year: '2019',
                 percentage:"80.2"
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Namrata Universal',
                role: 'Web Developer Intern',
                url: 'https://jmm.ltd/',
                desc: 'As a Web developer, I used HTML, CSS, JavaScript, bootstrap and React Js to build web applications.',
                year: '2024 (3 months)',
                location: 'Noida'
            },
            {
                id: 2,
                title: 'SYNC Intern',
                role: 'Full stack web developer Intern',
                url: 'no website',
                desc: 'As an Intern, I learned how to use MERN to build interactive websites.',
                year: '2023 (1 month)',
                location: 'Remote'
            },
            

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
