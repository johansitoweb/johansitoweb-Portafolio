interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "English",
        level: "Basico",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "Spanish",
        level: "Nativo",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "Italiano",
        level: "Principiante",
        description: "I speak fluently and write fluently",
        show: true
    },
   
];

export default languages;