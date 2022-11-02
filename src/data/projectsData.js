import DarkNftImage from "../assets/projects/darknft.png";
import BeerImage from "../assets/projects/beerlicious.png";
import BooksImage from "../assets/projects/books.png";

export const projectsList = [
  {
    link: 0,
    name: "Dark NFT",
    image: `${DarkNftImage}`,
    website: "https://darknft.netlify.app/",
    githubLink: "",
    description: "landing page from design found on Figma Community",
    stack: ["react", "react router", "styled components", "framer motion"],
    caseStudy: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    caseImage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    learnt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    link: 1,
    name: "Beerlicious",
    image: `${BeerImage}`,
    website: "https://beerlicious.netlify.app",
    githubLink: "",
    description:
      "landing page for craft beer company with fetching data from API - punkAPI",
    stack: ["react", "styled components", "framer motion"],
    caseStudy: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    caseImage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    learnt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    link: 2,
    name: "The Librarian",
    image: `${BooksImage}`,
    website: "https://z-the-librarian.netlify.app",
    githubLink: "",
    description:
      "landing page for craft beer company with fetching data from API - punkAPI",
    stack: ["local storage", "react", "css3"],
    caseStudy: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    caseImage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    learnt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
