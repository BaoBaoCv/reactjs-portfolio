import { getRndInteger, PIXEL_ARTS } from "@/constants";

export default {
    contents: [
        {
            component: "ProjectDescription",
            title: "Overview",
            col1: `Well what can I say :) it is here and you can see it by now`,
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            src2: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            description1: "Hey yo",
            description2: "Random image here",
        },
        {
            component: "VideoWithTitle",
            src: `https://www.youtube.com/watch?v=KXw8CRapg7k`,
            description: `Enjoy a little funny music here :D `,
        },
        {
            component: "ProjectDescription",
            title: "Experience",
            col1: `This project was made in Reactjs, with the participant from 3 people, 1 for designer, and 2 for Developers. My main role in this project are product owner (to think about the idea, and visualize it), and developer, althought I do not code that much compare to Bao Pham (visit him at pambao.me), who is the co-developer in this project.`,
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            description1: "Another random here :D",
        },
    ],
    card1: {
        title: "Credit",
        detail: "FEATURING BAO DANG KIM, DINH QUY TRI THONG, BAO PHAM.",
    },
};
