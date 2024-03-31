export interface Tecnology {
  name: Tecnologies;
  img: string;
  color: Color;
  size: Size;
}

type Tecnologies =
  | "Angular"
  | "Astro"
  | "Bootstrap"
  | "Firebase"
  | "Git"
  | "Ionic"
  | "JavaScript"
  | "Primeng"
  | "Python"
  | "React"
  | "Tailwind"
  | "TypeScript"
  | "Zustand";

type Color = `#${string}`;

type Size =
  | "size-1"
  | "size-2"
  | "size-3"
  | "size-4"
  | "size-5"
  | "size-6"
  | "size-7"
  | "size-8"
  | "size-9";
