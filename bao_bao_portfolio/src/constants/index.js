import character1 from "@/assets/images/character1.svg";
import character3 from "@/assets/images/character2.svg";
import character2 from "@/assets/images/character3.svg";

const PAGE_NAMES = {
    HOME: "home",
    PROJECT_DETAIL: "projectDetail",
    PROJECT_LIST: "projectList",
    PROFILE: "profile",
};

const ROUTE_PATHS = {
    [PAGE_NAMES.HOME]: "/",
    [PAGE_NAMES.PROJECT_DETAIL]: "/projectDetail",
    [PAGE_NAMES.PROJECT_LIST]: "/projectsList",
    [PAGE_NAMES.PROFILE]: "/profile",
};

const CHARACTER_IMAGES = [character1, character2, character3];

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { PAGE_NAMES, ROUTE_PATHS, CHARACTER_IMAGES, getRndInteger };
