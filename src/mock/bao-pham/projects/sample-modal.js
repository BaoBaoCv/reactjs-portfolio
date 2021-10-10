import { getRndInteger, PIXEL_ARTS } from "@/constants";

export default {
    contents: [
        {
            component: "ProjectDescription",
            title: "Overview",
            col1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's djwaiojd iowaj iodjawid joaiwjd ioajid jawiodjiawjdiad wad awd af afehjsgf guydgawuygd yuawgdyug awyudgyu agdyugwa dgyuawg 
           `,
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)],
            description1: "desc1",
        },
    ]
};
