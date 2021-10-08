import placeholder from "@/mock/bao-kim/images/placeholder.jpg";
import { CHARACTER_IMAGES, getRndInteger, PIXEL_ARTS } from "@/constants";
<<<<<<< HEAD

=======
>>>>>>> 49be4c2 (update daad exp)
import bao from "@/assets/images/bao.jpg";
import cameo from "@/assets/images/cameo.jpg"
import khai from "@/assets/images/khai.jpg"
import phuoc from "@/assets/images/phuoc.jpg"
import thien from "@/assets/images/thien.jpg"
import cameo2 from "@/assets/images/cameo2.jpg"
import cs2017 from "@/assets/images/cs2017.jpg"
<<<<<<< HEAD

=======
>>>>>>> 49be4c2 (update daad exp)
export default {
    name: "Games simulating on Minecraft",
    client: "School subject",
    role: "Developer",
    contents: [
        {
            component: "ProjectDescription",
            title: "THE SCHOLARSHIP",
            col1: ` Achieved DAAD Scholarship (full-coverage) for a six-month course as a Exchange Student in Germany. `,
            col2: `Studied at Frankfurt University of Applied Science`
        },
        {
            component: "ProjectDescription",
            title: "EXPERIENCE",
            col1: `Sorry for interrupting the academic mood, but for this one, I  would get a bit more personal, so it might not contain any of my professional information. So proceed as you please :) And I hope you will enjoy it :)
            
            Memories in Germany: https://photos.app.goo.gl/SBZYc5gbaPFk8yXeA
            
            To begin with, I just want to talk a little bit about my school, which granted me this scholarship and granted me the possibility to experience one of the best ever moment in my life. VGU is somewhat a really special academic institute, a Vietnamese university, but every major in this school associate with another University in Germany, in my case, it is Frankfurt University of Applied Science. Every major will offer you a specific scholarship, and in my case, it is a semester in Germany. And I was lucky enough to get 1 direct ticket to Germany for 1 semester. And thanks to this journey, not only academic knowledge, this trip brought me a lot of lesson about life, about how can I adapt to situation, about how to get over depression, and the true beauty of friendship`,
        },
        {
            component: "ProjectDescription",
            title: "MEMORIES",
            col1: `Nothing much to say, I just want to put some images here, as an appraisal for who really made the journey become one of the best ever things that I could not even imagine before. This trip would not become this special without these guys.`,
        },
        {
            component: "ImageWithTitle",
            src1: bao,
            src2: phuoc,
            description1: "desc1",
            description2: "desc2"
        },
        {
            component: "ImageWithTitle",
            src1: khai,
            src2: thien,
            description1: "desc1",
            description2: "desc2"
        },
        {
            component: "ImageWithTitle",
            src1: cameo,
            src2: cameo2,
            description1: "desc1",
            description2: "desc2"
        },
        {
            component: "ProjectDescription",
            title: "AND MANY OTHERS",
            col1: `Những người bạn này đã cùng với mình trải qua những khoảng khắc, kỷ niệm khó quên. Chính những người này đã cùng mình, và thúc đẩy mình có những trải nghiệm tại Đức và cũng chính những con người này đã tạo nên những khoảng khắc tuyệt vời với mình trong khoảng thời gian này. Ngoài ra còn 1 vài nhân tố khác nhưng nhiều quá nên không nhét hết ảnh vào được, nên là lấy tạm bức này nhé `,
        },
        {
            component: "ImageWithTitle",
            src1: cs2017,
            description1: "desc1",
        },
    ],
    card1: {
        title: "Credit",
        detail: "FEATURING cs2017.",
    },
};
