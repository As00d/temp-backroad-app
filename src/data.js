import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLink = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: "fa-squarespace",
  },
];

export const serviceData = [
  {
    id: 1,
    text: "saving money",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
    class: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    text: "endless hiking",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
    class: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    text: "amazing comfort",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
    class: "fas fa-socks fa-fw",
  },
];

export const toursData = [
  {
    id: 1,
    img: tour1,
    tourDate: "august 26th, 2020",
    tourTitle: "Tibet Adventure",
    tourPara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    day: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    tourDate: "october 1th, 2020",
    tourTitle: "best of java",
    tourPara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    day: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    img: tour3,
    tourDate: "september 15th, 2020",
    tourTitle: "explore hong kong",
    tourPara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    day: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    tourDate: "december 5th, 2019",
    tourTitle: "kenya highlights",
    tourPara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    day: "20 days",
    price: "from $3300",
  },
];
