import { PAGE_NAMES, ROUTE_PATHS } from "@/constants";
import Home from "@/components/pages/home/Home";
import ProjectDetail from "@/components/pages/project-detail/ProjectDetail";
import ProjectList from "@/components/pages/project-list/ProjectList";
import Profile from "@/components/pages/profile/Profile";
import homeIcon from "@/assets/images/home-icon.png";
import projectListIcon from "@/assets/images/project-list-icon.png";
import profileIcon from "@/assets/images/profile-icon.png";

const routes = [
    {
        name: PAGE_NAMES.HOME,
        path: ROUTE_PATHS[PAGE_NAMES.HOME],
        component: Home,
        icon: homeIcon,
        detail: "LANDING PAGES, TIMELINE & INTERACTIVE",
        isShowOnNavBar: true,
    },
    {
        name: PAGE_NAMES.PROJECT_DETAIL,
        path: ROUTE_PATHS[PAGE_NAMES.PROJECT_DETAIL],
        component: ProjectDetail,
        isShowOnNavBar: false,
    },
    {
        name: PAGE_NAMES.PROJECT_LIST,
        path: ROUTE_PATHS[PAGE_NAMES.PROJECT_LIST],
        component: ProjectList,
        icon: projectListIcon,
        detail: "PROJECT LIST IN SHORT & NARROW VIEW",
        isShowOnNavBar: true,
    },
    {
        name: PAGE_NAMES.PROFILE,
        path: ROUTE_PATHS[PAGE_NAMES.PROFILE],
        component: Profile,
        icon: profileIcon,
        detail: "ABOUT, RESUME & INFO",
        isShowOnNavBar: true,
    },
];

export { routes };
