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
        title: "main" ,
        items: [
            {
                link: "home" ,
                icon: FaHome
            }
        ]
    } ,
    {
        title: "analyze" ,
        items: [
            {
                link: "dashboard" ,
                icon: RiDashboardHorizontalFill
            } ,
            {
                link: "analytics" ,
                icon: FaChartPie
            } ,
            {
                link: "reports" ,
                icon: BsBarChartFill
            } ,
        ]
    } ,
    {
        title: "menu" ,
        items: [
            {
                link: "projects" ,
                icon: FaFolderOpen
            } ,
            {
                link: "tasks" ,
                icon: GrTasks
            } ,
            {
                link: "notes" ,
                icon: FaNoteSticky
            } ,
            {
                link: "team" ,
                icon: FaUserGroup
            } ,
            {
                link: "settings" ,
                icon: IoSettingsSharp
            } ,
        ]
    } ,
]