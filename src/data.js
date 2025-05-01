import { FaHome } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { MdAllInbox } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";

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

export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    image: "public/notes/note-1.jpg",
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
    image: "public/notes/note-2.jpg",
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
    image: "public/notes/note-3.jpg",
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
    image: "public/notes/note-4.jpg",
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
  {
    date: "28th April, 2021",
    image: "public/notes/note-5.jpg",
    title: "Optimizing team workflow and productivity",
    description:
      "Identifying bottlenecks and streamlining daily operations to enhance overall productivity. Key focus on tooling, meetings, and prioritization.",
    tags: [
      { tagname: "Productivity", bg: "bg-teal-200", color: "text-teal-700" },
      {
        tagname: "Optimization",
        bg: "bg-yellow-200",
        color: "text-yellow-700",
      },
    ],
  },
  {
    date: "28th April, 2021",
    image: "public/notes/note-6.jpg",
    title: "Creating a consistent brand identity",
    description:
      "A strong brand identity is key to user trust. This note outlines typography, color schemes, and tone of voice used across the product.",
    tags: [
      { tagname: "Branding", bg: "bg-pink-200", color: "text-pink-700" },
      { tagname: "Visuals", bg: "bg-fuchsia-200", color: "text-fuchsia-700" },
    ],
  },
  {
    date: "28th April, 2021",
    image: "public/notes/note-7.jpg",
    title: "Frontend architecture planning",
    description:
      "Discusses strategies for scalable and maintainable frontend code, including folder structure, state management, and reusable components.",
    tags: [
      { tagname: "Architecture", bg: "bg-lime-200", color: "text-lime-700" },
      { tagname: "Frontend", bg: "bg-rose-200", color: "text-rose-700" },
    ],
  },
  {
    date: "28th April, 2021",
    image: "public/notes/note-8.jpg",
    title: "Customer feedback loop improvement",
    description:
      "Establishing better systems to collect, analyze, and respond to customer feedback in a continuous product improvement cycle.",
    tags: [
      { tagname: "Feedback", bg: "bg-blue-200", color: "text-blue-700" },
      {
        tagname: "User Research",
        bg: "bg-emerald-200",
        color: "text-emerald-700",
      },
    ],
  },
];

export const tasks = [
  {
    id: 1,
    title: "Work on the plan",
    duration: "3 hours left",
  },
  {
    id: 2,
    title: "Collect feedback",
    duration: "1 hours left",
  },
  {
    id: 3,
    title: "Analyse test result",
    duration: "16 hours left",
  },
  {
    id: 4,
    title: "conclusion",
    duration: "1 day left",
  },
  {
    id: 5,
    title: "Sort all ideas",
    duration: "1 day left",
  },
];

export const activity = [
  {
    user: "maya hayes",
    time: "27th April, 2025",
    position: "Design challenges",
    image: "public/users/user-6.jpg",
  },
  {
    user: "cassie melendez",
    time: "27th April, 2025",
    position: "Note B - Dribble strategy",
    image: "public/users/user-7.jpg",
  },
  {
    user: "ronny schultz",
    time: "27th April, 2025",
    position: "Note B - Dribble strategy",
    image: "public/users/user-9.jpg",
  },
  {
    user: "amanda finnegan",
    time: "27th April, 2025",
    position: "Meeting planning",
    image: "public/users/user-8.jpg",
  },
  {
    user: "roben houghton",
    time: "27th April, 2025",
    position: "Plans for future",
    image: "public/users/user-10.jpg",
  },
];

export const statics = [
  {
    title: "Today works",
    value: 19,
    short: "Works",
    bgColor: "bg-sky-500",
  },
  {
    title: "Today tasks",
    value: 12,
    short: "Tasks",
    bgColor: "bg-amber-500",
  },
  {
    title: "Statistics",
    value: 125,
    short: "Statistics",
    bgColor: "bg-stone-500",
  },
  {
    title: "Analytics",
    value: 315,
    short: "Analytics",
    bgColor: "bg-purple-500",
  },
];

export const workReport = [
  {
    task: "Task 1",
    data: [38, 35, 62, 41, 45, 57, 40, 55, 22, 95, 76, 88],
  },
  {
    task: "Task 2",
    data: [35, 25, 38, 40, 24, 48, 28, 55, 45, 60, 76, 80],
  },
  {
    task: "Task 3",
    data: [35, 30, 36, 28, 45, 58, 59, 19, 45, 70, 66, 59],
  },
];

export const barTools = [
  {
    icon: MdAllInbox,
    title: "inbox",
    mes: 152,
    color: "bg-green-600",
  },
  {
    icon: MdOutlineCall,
    title: "call",
    mes: 15,
    color: "bg-red-500",
  },
  {
    icon: MdOutlineRemoveRedEye,
    title: "profile visits",
    mes: 865,
    color: "bg-indigo-500",
  },
  {
    icon: FiMessageSquare,
    title: "messages",
    mes: 22,
    color: "bg-orange-500",
  },
  {
    icon: FaRegBell,
    title: "notification",
    mes: 210,
    color: "bg-sky-500",
  },
  {
    icon: FaTags,
    title: "new project",
    mes: 11,
    color: "bg-stone-500",
  },
  {
    icon: IoMdStopwatch,
    title: "time line",
    mes: 75,
    color: "bg-fuchsia-600",
  },
  {
    icon: FaRegBookmark,
    title: "marks",
    mes: 100,
    color: "bg-cyan-500",
  },
];

export const myTeam = [
  {
    name: "James Hank",
    image: "public/users/user-19.jpg",
    position: "Team Leader",
  },
  {
    name: "Parlock Hevlon",
    image: "public/users/user-7.jpg",
    position: "Devolper",
  },
  {
    name: "Emaa Tom",
    image: "public/users/user-17.jpg",
    position: "UI UX Designer",
  },
  {
    name: "Evala Gray",
    image: "public/users/user-16.jpg",
    position: "React Champ",
  },
  {
    name: "Steven Stone",
    image: "public/users/user-15.jpg",
    position: "Sales Lead",
  },
];

export const table = [
  {
    app: "Alpino 4.1",
    team: ["public/users/user-3.jpg", "public/users/user-16.jpg"],
    sales: "11,580",
    price: "$80",
    total: "$22.899",
    state: "Good",
    deatils: "WrapTheme To By Again",
    color: "bg-green-500",
  },
  {
    app: "Nexos",
    team: [
      "public/users/user-7.jpg",
      "public/users/user-13.jpg",
      "public/users/user-18.jpg",
    ],
    sales: "18,000",
    price: "$120",
    total: "$570.899",
    state: "Good",
    deatils: "WrapTheme To By Again",
    color: "bg-green-500",
  },
  {
    app: "Compass V3.4.1",
    team: [
      "public/users/user-14.jpg",
      "public/users/user-2.jpg",
      "public/users/user-4.jpg",
    ],
    sales: "10,799",
    price: "$38",
    total: "$150.899",
    state: "Accept",
    deatils: "WrapTheme To By Again",
    color: "bg-blue-500",
  },
  {
    app: "Neterio",
    team: ["public/users/user-15.jpg", "public/users/user-6.jpg"],
    sales: "15,799",
    price: "$99",
    total: "$200.000",
    state: "Bad",
    deatils: "WrapTheme To By Again",
    color: "bg-red-500",
  },
  {
    app: "Csero 3.4",
    team: ["public/users/user-8.jpg", "public/users/user-12.jpg"],
    sales: "150,799",
    price: "$59",
    total: "$299.000",
    state: "Good",
    deatils: "WrapTheme To By Again",
    color: "bg-green-500",
  },
];

export const teamMember = [
  {
    name: "Ethan Harris",
    position: "Project Manager",
    image: "public/users/user-11.jpg",
    about: "Leads the team and ensures timely project delivery with quality.",
  },
  {
    name: "Emily Stone",
    position: "Frontend Developer",
    image: "public/users/user-2.jpg",
    about: "Builds responsive user interfaces with a focus on performance.",
  },
  {
    name: "Daniel Kim",
    position: "Backend Developer",
    image: "public/users/user-3.jpg",
    about: "Handles server-side logic and database integration.",
  },
  {
    name: "James Carter",
    position: "UI/UX Designer",
    image: "public/users/user-4.jpg",
    about: "Designs user-friendly interfaces and improves user experiences.",
  },
  {
    name: "Michael Scott",
    position: "QA Engineer",
    image: "public/users/user-5.jpg",
    about: "Tests features and ensures bug-free releases.",
  },
  {
    name: "Olivia Davis",
    position: "Business Analyst",
    image: "public/users/user-6.jpg",
    about: "Bridges communication between stakeholders and dev team.",
  },
  {
    name: "Robert Brown",
    position: "DevOps Engineer",
    image: "public/users/user-7.jpg",
    about: "Manages CI/CD pipelines and cloud infrastructure.",
  },
  {
    name: "Isabella Garcia",
    position: "Product Owner",
    image: "public/users/user-8.jpg",
    about: "Defines product vision and prioritizes feature backlog.",
  },
  {
    name: "William Lee",
    position: "Support Specialist",
    image: "public/users/user-9.jpg",
    about: "Helps clients with technical issues and feedback.",
  },
  {
    name: "Ava Wilson",
    position: "Scrum Master",
    image: "public/users/user-10.jpg",
    about: "Facilitates agile processes and removes team blockers.",
  },
  {
    name: "Sophia Nguyen",
    position: "Mobile Developer",
    image: "public/users/user-1.jpg",
    about: "Develops and maintains mobile applications for iOS and Android.",
  },
  {
    name: "Mia Martinez",
    position: "Content Strategist",
    image: "public/users/user-12.jpg",
    about: "Plans and manages content to support product goals.",
  },
  {
    name: "Alexander Walker",
    position: "Security Engineer",
    image: "public/users/user-13.jpg",
    about: "Ensures application security and monitors threats.",
  },
  {
    name: "Charlotte Young",
    position: "Marketing Lead",
    image: "public/users/user-14.jpg",
    about: "Leads marketing campaigns and engagement strategies.",
  },
  {
    name: "Benjamin Allen",
    position: "Data Analyst",
    image: "public/users/user-15.jpg",
    about: "Analyzes data to guide product and business decisions.",
  },
  {
    name: "Amelia King",
    position: "HR Coordinator",
    image: "public/users/user-16.jpg",
    about: "Supports HR processes and team coordination.",
  },
];

export const piedata = {
  labels: ["Completed", "In Progress", "Pending"],
  data: [50, 30, 20],
  colors: ["#3D90D7", "#FFA955", "#8E1616"],
};
