export interface ProjectInfo {
  link: string;
  label: string;
}

export interface GroupInfo {
  title: string;
  projects: ProjectInfo[];
}

// { link: "/", label: "Home" },
export const links: GroupInfo[] = [
  {
    title: "GSAP",
    projects: [
      { link: "/001-scrolltrigger-first-practice/", label: "Scroll Animation (ScrollTrigger)" },
      { link: "/002-scrolltrigger-screens-overlaping/", label: "Screens Overlaping (ScrollTrigger)" },
      { link: "/003-scrolltrigger-screens-coming/", label: "Screens Coming (ScrollTrigger)" },
      { link: "/004-scrolltrigger-horizontal-scroll/", label: "Horizontal Scroll (ScrollTrigger)" },
      { link: "/005-scrolltrigger-square-moving/", label: "Square Moving (ScrollTrigger)" },
    ],
  },
  {
    title: "ThreeJS",
    projects: [{ link: "/006-threejs-first-practice/", label: "ThreeJS First Practice" }],
  },
];
