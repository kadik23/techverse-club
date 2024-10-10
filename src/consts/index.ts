export const statistics = {
    members : 100,
    events: 5,
    participants: '1k'
};

export const events: EventEntity[] = [
    {
        name: "Tech Innovation Conference 2024",
        descriptions: "A three-day conference focusing on the latest trends in technology, including AI, blockchain, and cybersecurity.",
        image: "https://example.com/event-image.jpg",
        date_started: "2024-10-15",
        date_ended: "2024-10-17",
        speakers: {
            name: "John Doe",
            image: "https://example.com/speaker-john-doe.jpg"
        },
        statistics: {
            participants: "500",
            workshops: "10",
            topics: "AI, Blockchain, Cybersecurity, IoT"
        },
        place: "Silicon Valley Convention Center, CA",
        event_shots: [
            "https://example.com/event-shot1.jpg",
            "https://example.com/event-shot2.jpg",
            "https://example.com/event-shot3.jpg"
        ],
        website: "https://tech-innovation-2024.com",
        edition: 1
    }
];

const marketingDepartment: Departement = {
    name: "Marketing",
    description: "Handles the marketing and promotional activities."
};

export const members: MemberEntity[] = [
    {
        name: "Akram",
        departement: marketingDepartment,
        isFounder: true,
        image: {
          isImage: false,
          nameShortCut: "AK",
        },
    },
]

export const club_informations = {
    email: "example@gmail.com",
    addresse: "ouzera",
    social_medea_links: [
        {
            discord: 'Tech'
        }, 
        {
            instagram: 'Tech'
        },
        {
            facebook: 'Tech'
        },
        {
            linkedin: 'Tech'
        }
    ]
}

export const partners = [
    {
        name: 'gdg',
        image: 'im.png'
    }
]
