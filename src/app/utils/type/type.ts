import { StaticImageData } from "next/image";

export type TCard = {
    link: string;
    title: string;
    img: StaticImageData;
    alt: string;
};