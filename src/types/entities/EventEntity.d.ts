interface EventEntity {
    name: string;
    descriptions: string;
    image: string;
    date_started: string;
    date_ended: string;
    speakers: Speaker;
    statistics: Statistics;
    place: string;
    event_shots: string[];
    website: string | null
    edition: number
}

type Speaker = {
    name: string, 
    image: string
}

type Statistics = {
    participants: string;
    workshops: string | null;
    topics: string,
    // and more...
}