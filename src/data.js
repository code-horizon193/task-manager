import { FaHome } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";

export const links = [
  {
    title: "main",
    items: [
      {
        link: "home",
        icon: FaHome,
      },
    ],
  },
  {
    title: "analyze",
    items: [
      {
        link: "dashboard",
        icon: RiDashboardHorizontalFill,
      },
      {
        link: "analytics",
        icon: FaChartPie,
      },
      {
        link: "reports",
        icon: BsBarChartFill,
      },
    ],
  },
  {
    title: "menu",
    items: [
      {
        link: "projects",
        icon: FaFolderOpen,
      },
      {
        link: "tasks",
        icon: GrTasks,
      },
      {
        link: "notes",
        icon: FaNoteSticky,
      },
      {
        link: "team",
        icon: FaUserGroup,
      },
      {
        link: "settings",
        icon: IoSettingsSharp,
      },
    ],
  },
];

export const tasks = [
  {
    title: "Workshop planning and ideas",
    descripttion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet maiores id quod soluta vel sapiente magni cupiditate rerum commodi, eum eligendi nam eius quidem iure.",
    startDate: "20th April,2021",
    endDate: "28th April,2021",
    color: "bg-indigo-600",
    statues: "on track",
    priority: "Low",
    tags: ["Task", "photoShop"],
    team: ["public/users/user-1.jpg", "public/users/user-2.jpg"],
    fileSize: "2.2MB",
    comments: [
      {
        img: "public/users/user-1.jpg",
        name: "Jana Semison",
        position: "photoshop",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        img: "public/users/user-2.jpg",
        name: "Clarck Jopes",
        position: "graphic design",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    title: "Design exploration",
    descripttion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet maiores id quod soluta vel sapiente magni cupiditate rerum commodi.",
    startDate: "2th April,2021",
    endDate: "13th April,2021",
    color: "bg-green-500",
    statues: "compelete",
    priority: "Meduiem",
    tags: ["Task", "design", "explore"],
    team: ["public/users/user-3.jpg", "public/users/user-4.jpg"],
    fileSize: "1.2MB",
    comments: [
      {
        img: "public/users/profile.jpg",
        name: "Jonas Helper",
        position: "designer",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
      {
        img: "public/users/user-3.jpg",
        name: "Jack Welson",
        position: "designer",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    title: "Users's feedback",
    descripttion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet.",
    startDate: "2th May,2021",
    endDate: "10th May,2021",
    color: "bg-orange-500",
    statues: "On Track",
    priority: "Low",
    tags: ["User", "comments", "feedback"],
    team: ["public/users/user-5.jpg"],
    fileSize: "1.0MB",
    comments: [
      {
        img: "public/users/user-5.jpg",
        name: "Nick Woods",
        position: "customer serveces",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
    ],
  },
  {
    title: "Testing results",
    descripttion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet.",
    startDate: "1st Jun,2022",
    endDate: "28th Jun,2022",
    color: "bg-red-500",
    statues: "On Research",
    priority: "High",
    tags: ["research", "analsyis"],
    team: ["public/users/user-18.jpg"],
    fileSize: "5.1MB",
    comments: [
      {
        img: "public/users/user-18.jpg",
        name: "Wilson morety",
        position: "data scientest",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
    ],
  },
  {
    title: "Web devolpment",
    descripttion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet.",
    startDate: "1st Jun,2022",
    endDate: "17th Jun,2022",
    color: "bg-sky-500",
    statues: "On Research",
    priority: "High",
    tags: ["research", "web", "design"],
    team: [
      "public/users/user-13.jpg",
      "public/users/user-14.jpg",
      "public/users/user-15.jpg",
    ],
    fileSize: "2.8MB",
    comments: [
      {
        img: "public/users/user-13.jpg",
        name: "Robert Nelson",
        position: "devolper",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
      {
        img: "public/users/user-14.jpg",
        name: "Emma Stone",
        position: "designer",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
      {
        img: "public/users/user-15.jpg",
        name: "Steven Chockley",
        position: "devolper",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
    ],
  },
  {
    title: "Managment",
    descripttion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet.",
    startDate: "5st Octoper,2022",
    endDate: "20th Octoper,2022",
    color: "bg-stone-500",
    statues: "Compeleted",
    priority: "Meduiem",
    tags: ["managment"],
    team: ["public/users/user-11.jpg"],
    fileSize: "10.8MB",
    comments: [
      {
        img: "public/users/user-11.jpg",
        name: "Watson Svalone",
        position: "Manager",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
    ],
  },
];

export const notes = [
  {
    date: "27th April, 2021",
    title: "Plans for future and other directions, what needs to be done",
    description:
      "A Design Direction unifies everyone and adds meaning to web design. It’s a combination of art and...",
    tags: [
      { tagname: "Planning", bg: "bg-orange-200", color: "text-orange-700" },
      {
        tagname: "Design direction",
        bg: "bg-green-200",
        color: "text-green-700",
      },
    ],
  },
  {
    date: "27th April, 2021",
    title: "Design & devolpment challenges",
    description:
      "What is a Design Challenge? Design challenges help boost creativity, create positive habits, and teach new methods for design thinking.",
    tags: [
      { tagname: "Workshop", bg: "bg-sky-200", color: "text-sky-700" },
      {
        tagname: "Design challenges",
        bg: "bg-red-200",
        color: "text-red-700",
      },
      {
        tagname: "Work in progress",
        bg: "bg-indigo-200",
        color: "text-indigo-700",
      },
    ],
  },
  {
    date: "27th April, 2021",
    title: "How to conduct a user interview that could improve your product?",
    description:
      "You cannot understand good design if you do not understand people; design is made for people. User interviews are a tool that can help you...",
    tags: [
      {
        tagname: "Needs to be done",
        bg: "bg-stone-200",
        color: "text-stone-700",
      },
      {
        tagname: "Questions",
        bg: "bg-orange-200",
        color: "text-orange-700",
      },
    ],
  },
  {
    date: "27th April, 2021",
    title: "Note B - Dribble strategy",
    description:
      "A plan focused on building a consistent design strategy, maintaining quality visuals, and boosting engagement on Dribbble platform.",
    tags: [
      { tagname: "Strategy", bg: "bg-amber-200", color: "text-amber-700" },
      {
        tagname: "Social media",
        bg: "bg-cyan-200",
        color: "text-cyan-700",
      },
      {
        tagname: "Marketing",
        bg: "bg-purple-200",
        color: "text-purple-700",
      },
    ],
  },
];
