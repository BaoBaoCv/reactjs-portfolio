import { PAGE_NAMES, ROUTE_PATHS } from "@/constants";
import Home from "@/components/pages/home/Home";
import ProjectDetail from "@/components/pages/project-detail/ProjectDetail";
import Profile from "@/components/pages/profile/Profile";
import Motivation from "@/components/pages/motivation/Motivation";
import Alphabet from "@/components/pages/alphabet/Alphabet";
import homeIcon from "@/assets/images/home-icon.png";
import motivationIcon from "@/assets/images/project-list-icon.png";
import profileIcon from "@/assets/images/profile-icon.png";
import projectLinkIcon from "@/assets/images/project-link-icon.png";

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
        name: PAGE_NAMES.MOTIVATION,
        path: ROUTE_PATHS[PAGE_NAMES.MOTIVATION],
        component: Motivation,
        icon: motivationIcon,
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
    {
        name: PAGE_NAMES.ALPHABET,
        path: ROUTE_PATHS[PAGE_NAMES.ALPHABET],
        component: Alphabet,
        icon: projectLinkIcon,
        detail: "ALPHABET WISDOM CARDS",
        isShowOnNavBar: true,
    },
];

export { routes };
