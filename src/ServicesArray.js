import web from "./assets/services1.svg";
import mobile from './assets/mobileservice.png';
import software from './assets/softwareservice.png';
const data = [
  {
    id: 1,
    title: "Web Development",
    description: "We build websites that are responsive and user friendly.",
    img: "./assets/services1.svg"
  },
  {
    id: 2,
    title: "App Development",
    description: "We build apps that are responsive and user friendly.",
    img:{mobile}
  },
  {
    id: 3,
    title: "Software Development",
    description: "We build software that is responsive and user friendly.",
    img:{software}
  },
];

export default data;