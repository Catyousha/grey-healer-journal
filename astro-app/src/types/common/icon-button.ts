import type { ImageType } from "./image";

export interface IconButton {
    icon: ImageType;
    label: string;
    href: string;
    classList: string;
}