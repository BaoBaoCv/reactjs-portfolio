import { getRndInteger, PIXEL_ARTS } from "@/constants";

export default {
    contents: [
        {
            component: "ProjectDescription",
            title: "GOAL & TEAM STRUCTURE",
            col1: `Implementing a fully functional Book reading application on Android without framework (again).
            Mimic basic functionality of a Reader application, for example, pagnition, text format, etc...`,
            col2: `- Work in team of 4. Including 3 for handling design the UI, the final presentation and the Reports, 1 for implementing it into application, and 1 for backend.
            - Once again, I am responsible for the backend`
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            src2: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            description1: "desc1",
            description2: "desc2",
        },
        {
            component: "ProjectDescription",
            title: "Experience",
            col1: `This application only requires 2 main tech task: 
            - Handle the action on Android.
            - Write the algorithm for scanning, parsing the book, return the appropriate object to the frontend, so that the frontend side have enough information to render.`,
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            description1: "desc1",
        },
        {
            component: "ProjectDescription",
            title: "OUTCOME",
            col1: `More experience with Java`,
            col2: `Know a little bit more about Android, because I have to know what it's constraint so that I know what to do in the parsing algorithm, or how can I organize the information.`
        },
    ],
    card1: {
        title: "Credit",
        detail: "FEATURING BAO DANG KIM, HOANG VAN THIEN, DINH QUY TRI THONG, TRAN MINH THU, BUI NGUYEN MAI TRUC, BAO PHAM.",
    },
    card2: {
        title: "Open Link",
        detail: "YOU CAN WATCH MORE ABOUT THE PROJECT VIA: YOUTUBE, GOOGLE, VNEXPRESS",
    },
};
