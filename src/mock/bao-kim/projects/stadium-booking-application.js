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
            src1: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F71773%2Foriginal%2Fimage-20150211-25679-rdtqd.JPG%3Fixlib%3Drb-1.1.0%26q%3D45%26auto%3Dformat%26w%3D1200%26h%3D1200.0%26fit%3Dcrop&imgrefurl=https%3A%2F%2Ftheconversation.com%2Fapes-make-irrational-economic-decisions-that-includes-you-37491&tbnid=-HR4o7Gz3FPsNM&vet=12ahUKEwjVgumyt73zAhUIspQKHdvjDC8QMygBegQIARB3..i&docid=DqyiGDXS0thKvM&w=1200&h=1200&q=ape&client=firefox-b-d&ved=2ahUKEwjVgumyt73zAhUIspQKHdvjDC8QMygBegQIARB3`,
            description1: "My team name was APE :D",
        },
    ],
    card1: {
        title: "Credit",
        detail: "FEATURING BAO DANG KIM, HOANG VAN THIEN, BUI XUAN PHUOC, TA THI PHUONG LIEN, TRAN XUAN KHOI, PHAM NGUYEN THANH AN",
    },
};
