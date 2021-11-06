import { CHARACTER_IMAGES, getRndInteger, PIXEL_ARTS } from "@/constants";
import germany from "@/assets/images/lecture-germany.jpg";

export default {
    contents: [
        {
            component: "ProjectDescription",
            title: "GOAL & TEAM STRUCTURE",
            col1: `- Building a complete application for a Stadium booking application, from database to frontend, using 3 tier architecture
            - Frameworkless: Solely Java, Kotlin and MySQL`,
            col2: `Team of 7, 2 are responsible for Testing, 3 for Frontend develope, 2 for Backend, 1 for Database
            - I am responsible for Java, which was used for Backend`
        },
        {
            component: "ProjectDescription",
            title: "EXPERIENCE",
            col1: `This was the first project we did after coming back from Germany
            This was a really challenging one because this is the first time we actually made something that looks like a production application, and without any Framework. The purpose for it is to understand fully how things work under the cover and to understand all sides of a problem so that we could have a good fundamental if we want to use any framework in the future.
            My main task is to write APIs for the application, to make the bridge between frontend and database and handle the business logic. Thanks to the help from my friends, I was able to do it frameworklessly :) Although it was not a pleasant experience :)
            `,
        },
        {
            component: "ProjectDescription",
            title: "OUTCOME",
            col1: `- Understand how would a full solution of an application work.
            - More experience with Java
            - Work as a team from frontend to database`,
        },
        {
            component: "ImageWithTitle",
            src1: `https://images.theconversation.com/files/71773/original/image-20150211-25679-rdtqd.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`,
            description1: "My team name was APE :D",
        },
    ],
    card1: {
        title: "Credit",
        detail: "FEATURING BAO DANG KIM, HOANG VAN THIEN, BUI XUAN PHUOC, TA THI PHUONG LIEN, TRAN XUAN KHOI, PHAM NGUYEN THANH AN",
    },
};
