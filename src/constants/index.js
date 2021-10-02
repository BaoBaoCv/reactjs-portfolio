import character1 from "@/assets/images/character1.svg";
import character3 from "@/assets/images/character2.svg";
import character2 from "@/assets/images/character3.svg";
import pixelArt1 from "@/assets/images/pixelArt1.gif";
import pixelArt2 from "@/assets/images/pixelArt2.gif"
import pixelArt3 from "@/assets/images/pixelArt3.gif"
import pixelArt4 from "@/assets/images/pixelArt4.gif"
import pixelArt5 from "@/assets/images/pixelArt5.gif"
import pixelArt6 from "@/assets/images/pixelArt6.gif"
import pixelArt7 from "@/assets/images/pixelArt7.gif"
import pixelArt8 from "@/assets/images/pixelArt8.gif"
import pixelArt9 from "@/assets/images/pixelArt9.gif"
import pixelArt10 from "@/assets/images/pixelArt10.gif"

const PAGE_NAMES = {
    HOME: "home",
    PROJECT_DETAIL: "projectDetail",
    MOTIVATION: "motivation",
    PROFILE: "profile",
};

const ROUTE_PATHS = {
    [PAGE_NAMES.HOME]: "/",
    [PAGE_NAMES.PROJECT_DETAIL]: "/projectDetail",
    [PAGE_NAMES.MOTIVATION]: "/motivation",
    [PAGE_NAMES.PROFILE]: "/profile",
};

const PIXEL_ARTS = [pixelArt1, pixelArt2, pixelArt3, pixelArt4, pixelArt5, pixelArt6, pixelArt7, pixelArt8, pixelArt9, pixelArt10]

const CHARACTER_IMAGES = [character1, character2, character3];

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getMonthStr = (date) => {
    return date.toLocaleString("default", { month: "long" }).substring(0, 3);
};

export {
    PAGE_NAMES,
    ROUTE_PATHS,
    CHARACTER_IMAGES,
    getRndInteger,
    getMonthStr,
    PIXEL_ARTS
};
