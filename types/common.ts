import { type Icon } from "@/components/icons";
import { type ImageProps } from "next/image";

export type Props = {
    icon?: Icon;
    image?: ImageProps["src"];
    content: string;
};


export type UsageProps = {
    usage: "live" | "pdf";
};

export type ResumeHeaderProps = {
    usage: "live" | "pdf";
};

// You can add more type definitions here by using OR (|) operator
export type ComponentProps = ResumeHeaderProps;

export type AnimatedComponent = {
    component: React.FC<ComponentProps>; // React functional component
    props?: ComponentProps; // optional props
    delay: number; // delay for animation
};