import { StaticImageData } from "next/image";

export type TCard = {
    link: string;
    title: string;
    img: StaticImageData;
    alt: string;
};

export type TStaticCard = {
    title: string;
    img: StaticImageData;
    alt: string;
};