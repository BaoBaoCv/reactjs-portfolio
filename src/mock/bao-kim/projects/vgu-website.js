import { getRndInteger, PIXEL_ARTS } from "@/constants";

export default {
    contents: [
        {
            component: "ProjectDescription",
            title: "Job Description",
            col1: `Help implementing features, finding solutions for VGU's website, including tuyensinh.vgu.edu.vn, huongnghiep247.vn`
        },
        {
            component: "ProjectDescription",
            title: "Experience",
            col1: `This was a part-time job when I was still a student in VGU, and also my first monthly paid job. My main task is to find solutions for various kinds of problems regarding the VGU's websites. For example, making a quiz, making a score query system for the VGU's entrance test participants can see their scores.
            Mainly working on Wix, and Wordpress.`,
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            description1: "desc1",
        },
    ],
};
