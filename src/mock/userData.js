import BaoPhamDecor from "@/mock/bao-pham/images/intro-decoration.png";
import BaoKimDecor from "@/mock/bao-kim/images/intro-decoration.png";

const baoKim = {
    headerTitle: "dkb/portfolio",

    introName: "Dang Kim Bao - hello world",
    introStatement:
        "currently, i am a web developer & programer who loves doing things with fresh minds. previously, i worked as programmer at apple, samsung & xiaomi. now i am freelancer and happy to see you. bjidjiowajdio awijd iowjadijawdj ijdiawjodanwjidna wmdnandionw adwadi naidnawi noa ndawiond iawndio",
    introSubStatement:
        "TOUCH “red”; “yellow; “green” TO PERFORM A MAGIC MOVES.",
    introDecoration: BaoKimDecor,
    linkedInUrl: "https://www.linkedin.com/in/bao-dang-kim-25a612184/",
    facebookUrl: "https://www.facebook.com/bao.dangkim1999/",
    instagramUrl: "https://www.instagram.com/dangkimbao1999/",

    timelineTitle: "DANG-KIM-BAO-13087",
    timelineStartYear: "2017",
    timelineEndYear: "2021",
    timelineProjects: [
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend"],
            isYearHidden: false,
            date: new Date(2020, 5),
            company: "Google Inc.",
            role: "senior developer",
            id: "bao-kim/1",
        },
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend"],
            isYearHidden: true,
            date: new Date(2020, 5),
            company: "Google Inc.",
            role: "senior developer",
            id: "bao-kim/2",
        },
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend", "buscu"],
            isYearHidden: true,
            date: new Date(2020, 5),
            company: "Google Inc.",
            role: "senior developer",
            id: "bao-kim/3",
        },
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend"],
            isYearHidden: false,
            date: new Date(2021, 8),
            company: "Net Comp.",
            role: "senior developer",
            id: "bao-kim/4",
        },
    ],
};

const baoPham = {
    headerTitle: "bao_pham/portfolio",

    introName: "pham gia bao - hello world",
    introStatement:
        "currently, i am a web developer & programer who loves doing things with fresh minds. previously, i worked as programmer at apple, samsung & xiaomi. now i am freelancer and happy to see you. bjidjiowajdio awijd iowjadijawdj ijdiawjodanwjidna wmdnandionw adwadi naidnawi noa ndawiond iawndio",
    introSubStatement:
        "TOUCH “red”; “yellow; “green” TO PERFORM A MAGIC MOVES.",
    introDecoration: BaoPhamDecor,

    facebookUrl: "https://www.facebook.com/giabao.pham.92167",
    linkedInUrl: "https://www.linkedin.com/in/bao-pham-394284185/",
    instagramUrl: "https://www.instagram.com/pambao.12/",

    timelineTitle: "pham-gia-bao-13131",
    timelineStartYear: "2018",
    timelineEndYear: "2021",
    timelineProjects: [
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend"],
            isYearHidden: false,
            date: new Date(2020, 5),
            company: "Google Inc.",
            role: "senior developer",
            id: "bao-pham/1",
        },
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend"],
            isYearHidden: true,
            date: new Date(2020, 5),
            company: "Google Inc.",
            role: "senior developer",
            id: "bao-pham/2",
        },
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend"],
            isYearHidden: true,
            date: new Date(2020, 5),
            company: "Google Inc.",
            role: "senior developer",
            id: "bao-pham/3",
        },
        {
            name: "ten_ung_dung_thu_nghiem_gpl",
            tags: ["java", "ui_ux", "backend"],
            isYearHidden: true,
            date: new Date(2020, 5),
            company: "Net Comp.",
            role: "senior developer",
            id: "bao-pham/4",
        },
    ],
};

export { baoKim as user };
