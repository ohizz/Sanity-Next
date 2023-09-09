import { PortableTextBlock } from "sanity";

export type Page = {
    _id: string;
    _createdAt: Date;
    title: string
    name: string;
    slug:string;
    content:PortableTextBlock[];
}



