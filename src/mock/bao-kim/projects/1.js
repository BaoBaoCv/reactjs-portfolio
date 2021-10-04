import placeholder from "@/mock/bao-kim/images/placeholder.jpg";
import { CHARACTER_IMAGES, getRndInteger, PIXEL_ARTS } from "@/constants";

export default {
    name: "Games simulating on Minecraft",
    client: "School subject",
    role: "Developer",
    contents: [
        {
            component: "ProjectDescription",
            title: "GOAL & TEAM STRUCTURE",
            col1: `Simulate any game of our choice onto Minecraft by using Python. And submit final report`,
            col2: `Team of 3, including 3 as developers, and 1 for handling the Final Report`
        },
        {
            component: "ProjectDescription",
            title: "EXPERIENCE",
            col1: `This is a project that I would never ever forget. That is the first time ever that I actually programming something :)
            For this project, our task is to simulate any game of our choice onto Minecraft by using Python. This should be pretty easy by the level that I am at right now. But back then, it was a really tough challenge, because none of us are experienced with writing any code before. Luckily, using Python was mitigate those challenges a lot because supported functions and libraries.
            We encounter roadblocks on every step we do (except for the planning phase because I guess we are never going to run out of any idea :D ), and finally, we succeed in simulating 3 games: Tetris, Maze generating, and quick math calculating.
            As just a school project, I don't really have any images to put in here :) so I would like to put here some random images :) I hope you enjoy it`,
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[
                getRndInteger(0, PIXEL_ARTS.length - 1)
            ],
            description1: "Random image",
        },
    ],
    card1: {
        title: "Credit",
        detail: "FEATURING BAO DANG KIM, BAO PHAM, NGO MINH THONG, TRUONG MINH HIEU.",
    },
};
