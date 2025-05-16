import { FaHome } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaFolderOpen } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
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
import { MdOutlineFavorite } from "react-icons/md";

export const links = [
  {
    title: "main",
    items: [
      {
        link: "home",
        icon: FaHome,
      },
      {
        link: "dashboard",
        icon: RiDashboardHorizontalFill,
      },
      {
        link: "favorite",
        icon: MdOutlineFavorite,
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
    width: "w-[75%]",
    descripttion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet.",
    startDate: "20th April,2021",
    endDate: "28th April,2021",
    color: "bg-indigo-600",
    statues: "on track",
    priority: "Low",
    percent: 75,
    tags: ["Task", "photoShop"],
    team: [`${import.meta.env.BASE_URL}public/users/user-1.jpg`, `${import.meta.env.BASE_URL}public/users/user-2.jpg`],
    fileSize: "2.2MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-1.jpg`,
        name: "Jana Semison",
        position: "photoshop",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        img: `${import.meta.env.BASE_URL}public/users/user-2.jpg`,
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque dolorum possimus quia eveniet.",
    startDate: "2th April,2021",
    endDate: "13th April,2021",
    color: "bg-green-500",
    statues: "compelete",
    priority: "Medium",
    percent: 100,
    width: "w-[100%]",
    tags: ["Task", "design", "explore"],
    team: [`${import.meta.env.BASE_URL}public/users/user-3.jpg`, `${import.meta.env.BASE_URL}public/users/user-4.jpg`],
    fileSize: "1.2MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/profile.jpg`,
        name: "Jonas Helper",
        position: "designer",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
      {
        img: `${import.meta.env.BASE_URL}public/users/user-3.jpg`,
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
    percent: 49,
    width: "w-[49%]",
    tags: ["User", "comments", "feedback"],
    team: [`${import.meta.env.BASE_URL}public/users/user-5.jpg`],
    fileSize: "1.0MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-5.jpg`,
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
    percent: 81,
    width: "w-[81%]",
    tags: ["research", "analsyis"],
    team: [`${import.meta.env.BASE_URL}public/users/user-18.jpg`],
    fileSize: "5.1MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-18.jpg`,
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
    percent: 38,
    width: "w-[38%]",
    tags: ["research", "web", "design"],
    team: [
      `${import.meta.env.BASE_URL}public/users/user-13.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-14.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-15.jpg`,
    ],
    fileSize: "2.8MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-13.jpg`,
        name: "Robert Nelson",
        position: "devolper",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
      {
        img: `${import.meta.env.BASE_URL}public/users/user-14.jpg`,
        name: "Emma Stone",
        position: "designer",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
      {
        img: `${import.meta.env.BASE_URL}public/users/user-15.jpg`,
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
    priority: "Medium",
    percent: 100,
    width: "w-[100%]",
    tags: ["managment"],
    team: [`${import.meta.env.BASE_URL}public/users/user-11.jpg`],
    fileSize: "10.8MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-11.jpg`,
        name: "Watson Svalone",
        position: "Manager",
        Comment: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      },
    ],
  },
  {
    id: 7,
    title: "Sprint Retrospective",
    descripttion:
      "Reflecting on the sprint to identify improvements for future sprints and enhance team collaboration.",
    startDate: "12th July,2022",
    endDate: "14th July,2022",
    color: "bg-yellow-500",
    statues: "Completed",
    priority: "Medium",
    percent: 100,
    width: "w-[100%]",
    tags: ["agile", "retrospective"],
    team: [`${import.meta.env.BASE_URL}public/users/user-6.jpg`, `${import.meta.env.BASE_URL}public/users/user-7.jpg`],
    fileSize: "3.0MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-6.jpg`,
        name: "Nora Bright",
        position: "Scrum Master",
        Comment: "Great insights from this sprint retrospective!",
      },
    ],
  },
  {
    id: 8,
    title: "Product Backlog Grooming",
    descripttion:
      "Refining and prioritizing product backlog items with clear acceptance criteria.",
    startDate: "3rd Aug,2022",
    endDate: "10th Aug,2022",
    color: "bg-fuchsia-500",
    statues: "On Track",
    priority: "High",
    percent: 80,
    width: "w-[80%]",
    tags: ["backlog", "product"],
    team: [`${import.meta.env.BASE_URL}public/users/user-8.jpg`],
    fileSize: "4.4MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-8.jpg`,
        name: "Alice Monroe",
        position: "Product Owner",
        Comment: "We’ve cleaned up most of the technical debt.",
      },
    ],
  },
  {
    id: 9,
    title: "Bug Fixing Sprint",
    descripttion:
      "Focused sprint addressing critical bugs reported from user feedback and QA testing.",
    startDate: "15th Aug,2022",
    endDate: "25th Aug,2022",
    color: "bg-rose-600",
    statues: "On Track",
    priority: "High",
    percent: 62,
    width: "w-[62%]",
    tags: ["bugfix", "QA"],
    team: [`${import.meta.env.BASE_URL}public/users/user-9.jpg`, `${import.meta.env.BASE_URL}public/users/user-10.jpg`],
    fileSize: "2.9MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-9.jpg`,
        name: "Jordan Blake",
        position: "QA Engineer",
        Comment: "We're tackling the last set of critical bugs.",
      },
    ],
  },
  {
    id: 10,
    title: "UI Accessibility Review",
    descripttion:
      "Evaluating and improving the application for WCAG accessibility compliance.",
    startDate: "5th Sep,2022",
    endDate: "12th Sep,2022",
    color: "bg-blue-800",
    statues: "On Research",
    priority: "Medium",
    percent: 43,
    width: "w-[43%]",
    tags: ["accessibility", "UI"],
    team: [`${import.meta.env.BASE_URL}public/users/user-12.jpg`, `${import.meta.env.BASE_URL}public/users/user-13.jpg`],
    fileSize: "1.7MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-12.jpg`,
        name: "Liam Cross",
        position: "Front-End Dev",
        Comment: "Screen reader support improved in latest build.",
      },
    ],
  },
  {
    id: 11,
    title: "Marketing Landing Page",
    descripttion:
      "Creating a landing page for the product to capture early access users.",
    startDate: "22nd Sep,2022",
    endDate: "30th Sep,2022",
    color: "bg-pink-500",
    statues: "In Progress",
    priority: "High",
    percent: 52,
    width: "w-[52%]",
    tags: ["marketing", "web design"],
    team: [`${import.meta.env.BASE_URL}public/users/user-16.jpg`, `${import.meta.env.BASE_URL}public/users/user-17.jpg`],
    fileSize: "3.3MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-16.jpg`,
        name: "Angela Rivers",
        position: "Marketing Lead",
        Comment: "Working on copy and SEO now.",
      },
    ],
  },
  {
    id: 12,
    title: "Mobile Responsiveness Audit",
    descripttion:
      "Auditing the app layout and functionality across mobile devices.",
    startDate: "3rd Oct,2022",
    endDate: "10th Oct,2022",
    color: "bg-lime-500",
    statues: "Pending",
    priority: "Low",
    percent: 15,
    width: "w-[15%]",
    tags: ["mobile", "responsive"],
    team: [`${import.meta.env.BASE_URL}public/users/user-19.jpg`],
    fileSize: "0.8MB",
    comments: [
      {
        img: `${import.meta.env.BASE_URL}public/users/user-19.jpg`,
        name: "Mike Harlow",
        position: "Mobile QA",
        Comment: "Awaiting design specs before testing begins.",
      },
    ],
  },
];

export const notes = [
  {
    date: "27th April, 2021",
    image: `${import.meta.env.BASE_URL}public/notes/note-1.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/notes/note-2.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/notes/note-3.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/notes/note-4.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/notes/note-5.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/notes/note-6.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/notes/note-7.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/notes/note-8.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/users/user-6.jpg`,
  },
  {
    user: "cassie melendez",
    time: "27th April, 2025",
    position: "Note B - Dribble strategy",
    image: `${import.meta.env.BASE_URL}public/users/user-7.jpg`,
  },
  {
    user: "ronny schultz",
    time: "27th April, 2025",
    position: "Note B - Dribble strategy",
    image: `${import.meta.env.BASE_URL}public/users/user-9.jpg`,
  },
  {
    user: "amanda finnegan",
    time: "27th April, 2025",
    position: "Meeting planning",
    image: `${import.meta.env.BASE_URL}public/users/user-8.jpg`,
  },
  {
    user: "roben houghton",
    time: "27th April, 2025",
    position: "Plans for future",
    image: `${import.meta.env.BASE_URL}public/users/user-10.jpg`,
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
    image: `${import.meta.env.BASE_URL}public/users/user-19.jpg`,
    position: "Team Leader",
  },
  {
    name: "Parlock Hevlon",
    image: `${import.meta.env.BASE_URL}public/users/user-7.jpg`,
    position: "Devolper",
  },
  {
    name: "Emaa Tom",
    image: `${import.meta.env.BASE_URL}public/users/user-17.jpg`,
    position: "UI UX Designer",
  },
  {
    name: "Evala Gray",
    image: `${import.meta.env.BASE_URL}public/users/user-16.jpg`,
    position: "React Champ",
  },
  {
    name: "Steven Stone",
    image: `${import.meta.env.BASE_URL}public/users/user-15.jpg`,
    position: "Sales Lead",
  },
];

export const table = [
  {
    app: "Alpino 4.1",
    team: [`${import.meta.env.BASE_URL}public/users/user-3.jpg`, `${import.meta.env.BASE_URL}public/users/user-16.jpg`],
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
      `${import.meta.env.BASE_URL}public/users/user-7.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-13.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-18.jpg`,
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
      `${import.meta.env.BASE_URL}public/users/user-14.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-2.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-4.jpg`,
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
    team: [`${import.meta.env.BASE_URL}public/users/user-15.jpg`, `${import.meta.env.BASE_URL}public/users/user-6.jpg`],
    sales: "15,799",
    price: "$99",
    total: "$200.000",
    state: "Bad",
    deatils: "WrapTheme To By Again",
    color: "bg-red-500",
  },
  {
    app: "Csero 3.4",
    team: [`${import.meta.env.BASE_URL}public/users/user-8.jpg`, `${import.meta.env.BASE_URL}public/users/user-12.jpg`],
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
    image: `${import.meta.env.BASE_URL}public/users/user-11.jpg`,
    about: "Leads the team and ensures timely project delivery with quality.",
  },
  {
    name: "Emily Stone",
    position: "Frontend Developer",
    image: `${import.meta.env.BASE_URL}public/users/user-2.jpg`,
    about: "Builds responsive user interfaces with a focus on performance.",
  },
  {
    name: "Daniel Kim",
    position: "Backend Developer",
    image: `${import.meta.env.BASE_URL}public/users/user-3.jpg`,
    about: "Handles server-side logic and database integration.",
  },
  {
    name: "James Carter",
    position: "UI/UX Designer",
    image: `${import.meta.env.BASE_URL}public/users/user-4.jpg`,
    about: "Designs user-friendly interfaces and improves user experiences.",
  },
  {
    name: "Michael Scott",
    position: "QA Engineer",
    image: `${import.meta.env.BASE_URL}public/users/user-5.jpg`,
    about: "Tests features and ensures bug-free releases.",
  },
  {
    name: "Olivia Davis",
    position: "Business Analyst",
    image: `${import.meta.env.BASE_URL}public/users/user-6.jpg`,
    about: "Bridges communication between stakeholders and dev team.",
  },
  {
    name: "Robert Brown",
    position: "DevOps Engineer",
    image: `${import.meta.env.BASE_URL}public/users/user-7.jpg`,
    about: "Manages CI/CD pipelines and cloud infrastructure.",
  },
  {
    name: "Isabella Garcia",
    position: "Product Owner",
    image: `${import.meta.env.BASE_URL}public/users/user-8.jpg`,
    about: "Defines product vision and prioritizes feature backlog.",
  },
  {
    name: "William Lee",
    position: "Support Specialist",
    image: `${import.meta.env.BASE_URL}public/users/user-9.jpg`,
    about: "Helps clients with technical issues and feedback.",
  },
  {
    name: "Ava Wilson",
    position: "Scrum Master",
    image: `${import.meta.env.BASE_URL}public/users/user-10.jpg`,
    about: "Facilitates agile processes and removes team blockers.",
  },
  {
    name: "Sophia Nguyen",
    position: "Mobile Developer",
    image: `${import.meta.env.BASE_URL}public/users/user-1.jpg`,
    about: "Develops and maintains mobile applications for iOS and Android.",
  },
  {
    name: "Mia Martinez",
    position: "Content Strategist",
    image: `${import.meta.env.BASE_URL}public/users/user-12.jpg`,
    about: "Plans and manages content to support product goals.",
  },
  {
    name: "Alexander Walker",
    position: "Security Engineer",
    image: `${import.meta.env.BASE_URL}public/users/user-13.jpg`,
    about: "Ensures application security and monitors threats.",
  },
  {
    name: "Charlotte Young",
    position: "Marketing Lead",
    image: `${import.meta.env.BASE_URL}public/users/user-14.jpg`,
    about: "Leads marketing campaigns and engagement strategies.",
  },
  {
    name: "Benjamin Allen",
    position: "Data Analyst",
    image: `${import.meta.env.BASE_URL}public/users/user-15.jpg`,
    about: "Analyzes data to guide product and business decisions.",
  },
  {
    name: "Amelia King",
    position: "HR Coordinator",
    image: `${import.meta.env.BASE_URL}public/users/user-16.jpg`,
    about: "Supports HR processes and team coordination.",
  },
];

export const pirorityData = [
  ["Hight", "Medium", "Low"],
  [50, 30, 20],
  ["#4635B1", "#FCF259", "#E83F25"],
];

export const projectData = [25, 34, 30, 3, 66.8];

export const tasksData = [35, 50, 25, 10, 70.8];

export const activityData = [
  [
    "meetings",
    "commits",
    "issues closed",
    "tasks_created",
    "total activities",
    "tasks_completed",
  ],
  [2, 15, 5, 7, 95, 50],
  ["#f084d8", "#82ca9d", "#ffc658", "#ff4d4f", "#3D90D7", "#8ACCD5"],
];

export const timeLine = [
  { year: 2014, projects: 3 },
  { year: 2015, projects: 4 },
  { year: 2016, projects: 4 },
  { year: 2017, projects: 6 },
  { year: 2018, projects: 9 },
  { year: 2019, projects: 13 },
  { year: 2020, projects: 18 },
  { year: 2021, projects: 27 },
  { year: 2022, projects: 28 },
  { year: 2023, projects: 32 },
  { year: 2024, projects: 34 },
  { year: 2025, projects: 36 },
];

export const tasksList = [
  {
    id: "task-001",
    title: "Build User Authentication Module",
    description:
      "Develop login, registration, and password reset functionality.",
    startDate: "11/03/2025",
    endDate: "18/03/2025",
    color: "bg-stone-500",
    status: "in progress",
    priority: "high",
    percent: 50,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-18.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-14.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-2.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-7.jpg`,
    ],
    report: "not completed",
    commits: [
      {
        date: "21th Apr",
        time: "8:30 PM",
        name: "Oliver Hughes",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "14th Apr",
        time: "6:00 PM",
        name: "Sophia Brooks",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "8th Apr",
        time: "2:30 AM",
        name: "Benjamin Ross",
        commitMessage: "Initial setup and boilerplate",
      },
    ],
  },
  {
    id: "task-002",
    title: "Create Dashboard UI",
    description:
      "Design and implement the main dashboard using Tailwind and React.",
    startDate: "09/03/2025",
    endDate: "19/03/2025",
    color: "bg-yellow-500",
    status: "completed",
    priority: "low",
    percent: 100,
    team: [`${import.meta.env.BASE_URL}public/users/user-11.jpg`],
    report: "completed",
    commits: [
      {
        date: "7th Apr",
        time: "12:30 PM",
        name: "Mia Hayes",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "7th Apr",
        time: "11:00 AM",
        name: "Isabella Reed",
        commitMessage: "Final review and refactor",
      },
      {
        date: "12th Apr",
        time: "10:30 PM",
        name: "Noah Bennett",
        commitMessage: "Final review and refactor",
      },
      {
        date: "11th Apr",
        time: "12:30 PM",
        name: "Amelia Parker",
        commitMessage: "Final review and refactor",
      },
      {
        date: "21th Apr",
        time: "11:00 PM",
        name: "Mia Hayes",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "23th Apr",
        time: "12:30 PM",
        name: "Liam Carter",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "6th Apr",
        time: "12:30 PM",
        name: "Lucas Turner",
        commitMessage: "Final review and refactor",
      },
      {
        date: "20th Apr",
        time: "6:30 AM",
        name: "Amelia Parker",
        commitMessage: "Initial setup and boilerplate",
      },
    ],
  },
  {
    id: "task-003",
    title: "Implement Task Filtering",
    description:
      "Add filtering and search capabilities for tasks and projects.",
    startDate: "28/03/2025",
    endDate: "13/04/2025",
    color: "bg-green-500",
    status: "in progress",
    priority: "medium",
    percent: 50,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-6.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-9.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-15.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-4.jpg`,
    ],
    report: "not completed",
    commits: [
      {
        date: "18th Apr",
        time: "6:30 PM",
        name: "Benjamin Ross",
        commitMessage: "Final review and refactor",
      },
      {
        date: "7th Apr",
        time: "1:00 PM",
        name: "Oliver Hughes",
        commitMessage: "Feature implementation and testing",
      },
    ],
  },
  {
    id: "task-004",
    title: "Optimize Database Queries",
    description: "Review and optimize SQL queries for performance.",
    startDate: "11/03/2025",
    endDate: "28/03/2025",
    color: "bg-indigo-500",
    status: "completed",
    priority: "low",
    percent: 100,
    team: [`${import.meta.env.BASE_URL}public/users/user-8.jpg`, `${import.meta.env.BASE_URL}public/users/user-2.jpg`],
    report: "completed",
    commits: [
      {
        date: "7th Apr",
        time: "11:00 AM",
        name: "Emma Richardson",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "21th Apr",
        time: "10:00 AM",
        name: "Oliver Hughes",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "10th Apr",
        time: "1:30 PM",
        name: "Emma Richardson",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "12th Apr",
        time: "6:00 PM",
        name: "Elijah Morgan",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "9th Apr",
        time: "8:00 AM",
        name: "Lucas Turner",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "23th Apr",
        time: "1:30 AM",
        name: "Lucas Turner",
        commitMessage: "Bug fix and UI polish",
      },
    ],
  },
  {
    id: "task-005",
    title: "Design Landing Page",
    description: "Design a responsive and attractive landing page.",
    startDate: "21/03/2025",
    endDate: "28/03/2025",
    color: "bg-teal-500",
    status: "completed",
    priority: "medium",
    percent: 100,
    team: [`${import.meta.env.BASE_URL}public/users/user-3.jpg`, `${import.meta.env.BASE_URL}public/users/user-17.jpg`],
    report: "completed",
    commits: [
      {
        date: "17th Apr",
        time: "5:30 AM",
        name: "Liam Carter",
        commitMessage: "Final review and refactor",
      },
      {
        date: "1th Apr",
        time: "5:00 PM",
        name: "Lucas Turner",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "25th Apr",
        time: "10:00 AM",
        name: "Oliver Hughes",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "23th Apr",
        time: "1:00 PM",
        name: "Sophia Brooks",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "2th Apr",
        time: "1:00 PM",
        name: "Henry Walker",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "14th Apr",
        time: "11:00 AM",
        name: "Liam Carter",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "26th Apr",
        time: "7:30 AM",
        name: "Emma Richardson",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "11th Apr",
        time: "3:00 PM",
        name: "Sophia Brooks",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "18th Apr",
        time: "10:30 AM",
        name: "Henry Walker",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "28th Apr",
        time: "12:30 PM",
        name: "Sophia Brooks",
        commitMessage: "Initial setup and boilerplate",
      },
    ],
  },
  {
    id: "task-006",
    title: "Set Up CI/CD Pipeline",
    description: "Automate deployment pipeline using GitHub Actions.",
    startDate: "24/03/2025",
    endDate: "12/04/2025",
    color: "bg-green-500",
    status: "not started",
    priority: "medium",
    percent: 75,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-17.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-3.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-2.jpg`,
    ],
    report: "not completed",
    commits: [
      {
        date: "28th Apr",
        time: "2:30 PM",
        name: "Elijah Morgan",
        commitMessage: "Final review and refactor",
      },
      {
        date: "25th Apr",
        time: "9:00 AM",
        name: "Liam Carter",
        commitMessage: "Feature implementation and testing",
      },
    ],
  },
  {
    id: "task-007",
    title: "Integrate Payment Gateway",
    description: "Set up Stripe integration for premium features.",
    startDate: "01/04/2025",
    endDate: "07/04/2025",
    color: "bg-red-500",
    status: "in progress",
    priority: "high",
    percent: 50,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-8.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-2.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-15.jpg`,
    ],
    report: "not completed",
    commits: [
      {
        date: "19th Apr",
        time: "5:30 PM",
        name: "Lucas Turner",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "10th Apr",
        time: "4:30 PM",
        name: "Liam Carter",
        commitMessage: "Initial setup and boilerplate",
      },
    ],
  },
  {
    id: "task-008",
    title: "Create Notification System",
    description: "Implement real-time notifications using sockets.",
    startDate: "02/03/2025",
    endDate: "14/03/2025",
    color: "bg-indigo-500",
    status: "completed",
    priority: "high",
    percent: 100,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-10.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-5.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-1.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-2.jpg`,
    ],
    report: "completed",
    commits: [
      {
        date: "20th Apr",
        time: "10:30 PM",
        name: "Benjamin Ross",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "22th Apr",
        time: "7:00 AM",
        name: "Mia Hayes",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "12th Apr",
        time: "9:00 PM",
        name: "Isabella Reed",
        commitMessage: "Final review and refactor",
      },
      {
        date: "24th Apr",
        time: "5:30 PM",
        name: "Liam Carter",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "14th Apr",
        time: "12:00 PM",
        name: "Jana Semison",
        commitMessage: "Final review and refactor",
      },
      {
        date: "5th Apr",
        time: "9:30 AM",
        name: "Charlotte Evans",
        commitMessage: "Final review and refactor",
      },
      {
        date: "21th Apr",
        time: "12:00 PM",
        name: "Jana Semison",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "14th Apr",
        time: "12:30 AM",
        name: "James Foster",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "3th Apr",
        time: "4:00 AM",
        name: "Henry Walker",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "2th Apr",
        time: "8:00 AM",
        name: "Benjamin Ross",
        commitMessage: "Final review and refactor",
      },
    ],
  },
  {
    id: "task-009",
    title: "Test Mobile Responsiveness",
    description: "Ensure full mobile support for all pages.",
    startDate: "20/03/2025",
    endDate: "05/04/2025",
    color: "bg-blue-500",
    status: "in progress",
    priority: "high",
    percent: 50,
    team: [`${import.meta.env.BASE_URL}public/users/user-2.jpg`, `${import.meta.env.BASE_URL}public/users/user-1.jpg`],
    report: "not completed",
    commits: [
      {
        date: "3th Apr",
        time: "11:30 PM",
        name: "Amelia Parker",
        commitMessage: "Feature implementation and testing",
      },
    ],
  },
  {
    id: "task-010",
    title: "Implement Role-Based Access",
    description: "Restrict access based on user roles and permissions.",
    startDate: "24/03/2025",
    endDate: "13/04/2025",
    color: "bg-stone-500",
    status: "in progress",
    priority: "medium",
    percent: 50,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-17.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-1.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-10.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-13.jpg`,
    ],
    report: "not completed",
    commits: [
      {
        date: "24th Apr",
        time: "7:00 AM",
        name: "Amelia Parker",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "4th Apr",
        time: "10:30 PM",
        name: "James Foster",
        commitMessage: "Feature implementation and testing",
      },
    ],
  },
  {
    id: "task-011",
    title: "Fix Login Redirect Bug",
    description: "Fix redirect issues post-login in edge cases.",
    startDate: "10/03/2025",
    endDate: "24/03/2025",
    color: "bg-blue-500",
    status: "not started",
    priority: "low",
    percent: 25,
    team: [`${import.meta.env.BASE_URL}public/users/user-7.jpg`],
    report: "not completed",
    commits: [
      {
        date: "22th Apr",
        time: "7:30 AM",
        name: "Noah Bennett",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "16th Apr",
        time: "7:30 PM",
        name: "Henry Walker",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "8th Apr",
        time: "10:00 AM",
        name: "Amelia Parker",
        commitMessage: "Initial setup and boilerplate",
      },
    ],
  },
  {
    id: "task-012",
    title: "Add User Avatar Upload",
    description: "Allow users to upload and update their avatars.",
    startDate: "15/03/2025",
    endDate: "23/03/2025",
    color: "bg-red-500",
    status: "not started",
    priority: "high",
    percent: 75,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-6.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-8.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-13.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-10.jpg`,
    ],
    report: "not completed",
    commits: [
      {
        date: "9th Apr",
        time: "4:30 PM",
        name: "Emma Richardson",
        commitMessage: "Bug fix and UI polish",
      },
    ],
  },
  {
    id: "task-013",
    title: "Refactor Project Structure",
    description: "Refactor folder structure for better scalability.",
    startDate: "28/03/2025",
    endDate: "05/04/2025",
    color: "bg-pink-500",
    status: "completed",
    priority: "medium",
    percent: 100,
    team: [`${import.meta.env.BASE_URL}public/users/user-14.jpg`, `${import.meta.env.BASE_URL}public/users/user-15.jpg`],
    report: "completed",
    commits: [
      {
        date: "22th Apr",
        time: "2:00 AM",
        name: "Emma Richardson",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "10th Apr",
        time: "3:00 AM",
        name: "James Foster",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "19th Apr",
        time: "5:30 PM",
        name: "Noah Bennett",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "2th Apr",
        time: "10:30 PM",
        name: "Oliver Hughes",
        commitMessage: "Final review and refactor",
      },
      {
        date: "8th Apr",
        time: "4:00 AM",
        name: "Mia Hayes",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "6th Apr",
        time: "7:00 PM",
        name: "Charlotte Evans",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "8th Apr",
        time: "8:00 AM",
        name: "Lucas Turner",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "24th Apr",
        time: "11:00 PM",
        name: "Noah Bennett",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "14th Apr",
        time: "5:00 AM",
        name: "Emma Richardson",
        commitMessage: "Final review and refactor",
      },
      {
        date: "22th Apr",
        time: "2:00 PM",
        name: "Sophia Brooks",
        commitMessage: "Feature implementation and testing",
      },
    ],
  },
  {
    id: "task-014",
    title: "Write Unit Tests",
    description: "Write unit and integration tests for components.",
    startDate: "16/03/2025",
    endDate: "22/03/2025",
    color: "bg-indigo-500",
    status: "in progress",
    priority: "low",
    percent: 75,
    team: [
      `${import.meta.env.BASE_URL}public/users/user-9.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-10.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-11.jpg`,
      `${import.meta.env.BASE_URL}public/users/user-1.jpg`,
    ],
    report: "not completed",
    commits: [
      {
        date: "3th Apr",
        time: "12:30 PM",
        name: "Oliver Hughes",
        commitMessage: "Initial setup and boilerplate",
      },
      {
        date: "20th Apr",
        time: "2:30 AM",
        name: "Mia Hayes",
        commitMessage: "Final review and refactor",
      },
      {
        date: "23th Apr",
        time: "7:00 PM",
        name: "Noah Bennett",
        commitMessage: "Bug fix and UI polish",
      },
    ],
  },
  {
    id: "task-015",
    title: "Deploy to Production",
    description: "Deploy the app to the production server.",
    startDate: "20/03/2025",
    endDate: "27/03/2025",
    color: "bg-purple-500",
    status: "not started",
    priority: "low",
    percent: 75,
    team: [`${import.meta.env.BASE_URL}public/users/user-6.jpg`, `${import.meta.env.BASE_URL}public/users/user-11.jpg`],
    report: "not completed",
    commits: [
      {
        date: "13th Apr",
        time: "10:00 PM",
        name: "Henry Walker",
        commitMessage: "Final review and refactor",
      },
      {
        date: "13th Apr",
        time: "9:30 AM",
        name: "Liam Carter",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "27th Apr",
        time: "2:30 AM",
        name: "Ava Thompson",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "28th Apr",
        time: "3:00 AM",
        name: "Jana Semison",
        commitMessage: "Initial setup and boilerplate",
      },
    ],
  },
  {
    id: "task-016",
    title: "Document API Endpoints",
    description: "Document all backend API endpoints clearly.",
    startDate: "27/03/2025",
    endDate: "02/04/2025",
    color: "bg-blue-500",
    status: "in progress",
    priority: "medium",
    percent: 0,
    team: [`${import.meta.env.BASE_URL}public/users/user-10.jpg`, `${import.meta.env.BASE_URL}public/users/user-4.jpg`],
    report: "not completed",
    commits: [
      {
        date: "27th Apr",
        time: "11:00 PM",
        name: "Emma Richardson",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "5th Apr",
        time: "1:00 AM",
        name: "Emma Richardson",
        commitMessage: "Feature implementation and testing",
      },
      {
        date: "17th Apr",
        time: "6:00 PM",
        name: "Elijah Morgan",
        commitMessage: "Bug fix and UI polish",
      },
      {
        date: "5th Apr",
        time: "8:30 PM",
        name: "Ava Thompson",
        commitMessage: "Bug fix and UI polish",
      },
    ],
  },
];

export const profileInfo = [
  {
    title: "Addrees",
    data: "795 Folsom Ave, Suite 600 San Francisco, 94107",
  },
  {
    title: "Email address",
    data: "rober-895@example.com",
  },
  {
    title: "Mobile",
    data: "+ 202-555-2828",
  },
  {
    title: "Birth Date",
    data: "October 22th, 1990",
  },
];

export const checkboxItem = [
  {
    title: "Report Panel Usag",
    connectId: "report",
  },
  {
    title: "Email Redirect",
    connectId: "email",
  },
  {
    title: "Notifications",
    connectId: "notifications",
  },
  {
    title: "Auto Updates",
    connectId: "auto-Updates",
  },
  {
    title: "Offline",
    connectId: "offline",
  },
  {
    title: "Location Permission",
    connectId: "location",
  },
];

export const colors = [
  {
    color: "#3eacff",
    cName: "Blue",
  },
  {
    color: "#33DEED",
    cName: "Cyan",
  },
  {
    color: "#a27ce6",
    cName: "Purple",
  },
  {
    color: "#ffce4b",
    cName: "Orange",
  },
  {
    color: "#50d38a",
    cName: "Green",
  },
  {
    color: "#e47297",
    cName: "Blush",
  },
  {
    color: "#ea221f",
    cName: "Red",
  },
];

export const myfavouriteMess = [
  "Weekly account summary",
  "Tips for campaign setup, growth and client success stories",
  "Campaign reports",
  "Promotional news such as offers or discounts",
  "Devolpe new Features / Projects and any thing is exiting",
];
