export interface Header {
    name: string;
    title: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    github?: string;
}

export interface ListItem {
    label: string;
    items?: ListItem[];
}

export interface WorkExperience {
    position: string;
    company: string;
    location: string;
    timeframe: string;
    responsibilities: ListItem[] | undefined;
}

export interface Project {
    title: string;
    duration: string;
    responsibilities: ListItem[];
}

export interface Education {
    location: string;
    degree: string;
    items: ListItem[];
}