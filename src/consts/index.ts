export const statistics = {
  members: 100,
  events: 5,
  participants: "1k",
};

export const events: EventEntity[] = [
  {
    name: "Tech Innovation Conference 2024",
    descriptions:
      "A three-day conference focusing on the latest trends in technology, including AI, blockchain, and cybersecurity.",
    image: "https://example.com/event-image.jpg",
    date_started: "2024-10-15",
    date_ended: "2024-10-17",
    speakers: {
      name: "John Doe",
      image: "https://example.com/speaker-john-doe.jpg",
    },
    statistics: {
      participants: "500",
      workshops: "10",
      topics: "AI, Blockchain, Cybersecurity, IoT",
    },
    place: "Silicon Valley Convention Center, CA",
    event_shots: [
      "https://example.com/event-shot1.jpg",
      "https://example.com/event-shot2.jpg",
      "https://example.com/event-shot3.jpg",
    ],
    website: "https://tech-innovation-2024.com",
    edition: 1,
  },
];

export const departements: Departement[] = [
  {
    name: "Design",
    description:
      "The Design department includes graphic designers crafting visual content, UI/UX designers ensuring intuitive and appealing interfaces, and branding specialists maintaining a consistent brand identity across all platforms.",
  },
  {
    name: "IT",
    description:
      "The IT department includes developers creating and maintaining platforms, UI/UX designers ensuring a user-friendly experience, and educators training members on new technologies.",
  },
  {
    name: "Communication",
    description:
      "The Communication department manages social media, public relations, and replies to public messages, ensuring consistent messaging, engaging content, and fostering connections with the audience across various platforms.",
  },
  {
    name: "Logistics",
    description:
      "The Logistics department manages equipment setup, and on-site coordination. This team handles scheduling, vendor relations, and purchasing event requirements, ensuring all necessary resources are in place for successful events. Through meticulous planning and efficient management, they deliver seamless experiences.",
  },
  {
    name: "External",
    description:
      "The External Relations department secures sponsors, partners, and speakers for events, cultivating relationships with industry leaders and organizations to enhance event quality and reach. This team negotiates sponsorship deals, identifies and invites relevant speakers, and maintains a network of contacts to support successful event planning and execution.",
  },
  {
    name: "Technique",
    description:
      "The Technical department manages audio-visual equipment and technology for events. This team configures microphones, data projectors, and computers, ensuring optimal setup and functionality. They also handle sound systems, lighting, and other technical aspects, working closely with speakers and presenters. The department is responsible for troubleshooting technical issues and providing support throughout events to guarantee smooth operations.",
  },
  {
    name: "Delegation",
    description:
      "The Delegation department oversees event organization, focusing on sales-related aspects and attendee management. This team handles event decorations, creating engaging environments for attendees. They manage the check-in and check-out processes, ensuring a smooth flow of participants.",
  },
  {
    name: "Human Resources",
    description:
      "The Human Resources manager recruits and manages student volunteers. They handle club member applications, organize orientation programs, and maintain records of student participation in various club activities.",
  },
];

export const members: MemberEntity[] = [
  // Founders...
  {
    name: "Akram Said Seghir",
    isFounder: true,
    image: {
      isImage: false,
      nameShortCut: "AK",
    },
  },
  {
    name: "Islam Hamadou",
    isPresident: true,
    image: {
      isImage: false,
      nameShortCut: "AK",
    },
  },
  // Leaders...
  {
    name: "Akram Titraoui",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "AK",
    },
    departement: departements[0],
  },
  {
    name: "Kadik Salah Eddine",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "KS",
    },
    departement: departements[1],
  },
  {
    name: "Selma Tassist",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "ST",
    },
    departement: departements[2],
  },
  {
    name: "Moncef Ferhi",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "MF",
    },
    departement: departements[3],
  },
  {
    name: "Feth Ennour Bachene",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "FB",
    },
    departement: departements[4],
  },
  {
    name: "Yacine Medjeber",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "YM",
    },
    departement: departements[5],
  },
  {
    name: "Meriem Hasnaoui",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "MH",
    },
    departement: departements[6],
  },
  {
    name: "Ikram Melhout",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "IK",
    },
    departement: departements[7],
  },
  // Fake Members
  // Design department members
  {
    name: "Amina Benali",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[0],
  },
  {
    name: "Karim Meziane",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "KM",
    },
    departement: departements[0],
  },
  {
    name: "Nadia Touati",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "NT",
    },
    departement: departements[0],
  },

  // IT department members
  {
    name: "Yasser Bouaziz",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "YB",
    },
    departement: departements[1],
  },
  {
    name: "Lina Hamidi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "LH",
    },
    departement: departements[1],
  },
  {
    name: "Omar Benmalek",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Yasser Bouaziz",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "YB",
    },
    departement: departements[1],
  },
  {
    name: "Lina Hamidi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "LH",
    },
    departement: departements[1],
  },
  {
    name: "Omar Benmalek",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },

  // Communication department members
  {
    name: "Samia Mebarki",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[2],
  },
  {
    name: "Reda Benmoussa",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "RB",
    },
    departement: departements[2],
  },
  {
    name: "Fatima Zerrouki",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },

  // Logistics department members
  {
    name: "Amir Belhadj",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[3],
  },
  {
    name: "Leila Mansouri",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "LM",
    },
    departement: departements[3],
  },
  {
    name: "Sofiane Djebbar",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SD",
    },
    departement: departements[3],
  },

  // External department members
  {
    name: "Yasmine Boudiaf",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "YB",
    },
    departement: departements[4],
  },
  {
    name: "Mehdi Larbi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "ML",
    },
    departement: departements[4],
  },
  {
    name: "Ines Belkacem",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "IB",
    },
    departement: departements[4],
  },

  // Technique department members
  {
    name: "Riad Messaoudi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "RM",
    },
    departement: departements[5],
  },
  {
    name: "Asma Bouzid",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[5],
  },
  {
    name: "Fouad Khelifi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FK",
    },
    departement: departements[5],
  },

  // Delegation department members
  {
    name: "Lamia Benali",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "LB",
    },
    departement: departements[6],
  },
  {
    name: "Tarik Hadj",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "TH",
    },
    departement: departements[6],
  },
  {
    name: "Sonia Mansour",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
];

export const club_informations = {
  email: "techverse@gmail.com",
  addresse: "ouzera",
  social_medea_links: [
    {
      discord: "Tech",
    },
    {
      instagram: "Tech",
    },
    {
      facebook: "Tech",
    },
    {
      linkedin: "Tech",
    },
  ],
};

export const partners = [
  {
    name: "gdg",
    image: "im.png",
  },
];




