import { CHARACTER_IMAGES, getRndInteger, PIXEL_ARTS } from "@/constants";
import germany from "@/assets/images/lecture-germany.jpg";

export default {
    contents: [
        {
            component: "ProjectDescription",
            title: "JOB DESCRIPTION",
            col1: `- Directly consulting the solution with the customer about their feature that need to be implemented`,
            col2: `- Experienced with AEM, Vuejs,Javascript, and Java`
        },
        {
            component: "ProjectDescription",
            title: "EXPERIENCE",
            col1: `After having some experience with the architecture of the project when I was a devOps, I was assigned to the development team, which contribute directly to the product and creating the component, that is being used by the customer.
            I had a good chance to work on various types of technology during the time. I worked with Vuejs for frontend (even raw HTML/Less, and Javascript for Frontend), Java backend for interacting with Database (leveraged by Hibernate) and calling 3rd API from APIM (API Manager, a service provided by Microsoft Azure)
            `,
        },
    ],
};
