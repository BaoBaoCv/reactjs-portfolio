import placeholder from "@/mock/bao-kim/images/placeholder.jpg";
import { CHARACTER_IMAGES, getRndInteger, PIXEL_ARTS } from "@/constants";

export default {
    name: "Android Application Robot",
    client: "Google Inc",
    role: "Developer",
    contents: [
        {
            component: "ProjectDescription",
            title: "Overview",
            col1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's djwaiojd iowaj iodjawid joaiwjd ioajid jawiodjiawjdia
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            "discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \n de Finibus Bonorum et Malorum 
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section`,
            col2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[
                getRndInteger(0, PIXEL_ARTS.length - 1)
            ],
            src2: PIXEL_ARTS[
                getRndInteger(0, PIXEL_ARTS.length - 1)
            ],
            description1: "desc1",
            description2: "desc2",
        },
        {
            component: "ProjectDescription",
            title: "Overview",
            col1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            "discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \n de Finibus Bonorum et Malorum 
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section`,
        },
        {
            component: "ImageWithTitle",
            src1: PIXEL_ARTS[
                getRndInteger(0, PIXEL_ARTS.length - 1)
            ],
            description1: "desc1",
        },
        {
            component: "ProjectDescription",
            title: "Overview",
            col1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            "discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \n de Finibus Bonorum et Malorum 
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section`,
            col2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
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
