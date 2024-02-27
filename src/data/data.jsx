import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const promo = [
  {
    title: '30% Off This Weekend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit augue risus, condimentum feugiat ante ullamcorper ac. Phasellus id tempus orci, sed volutpat justo. Aliquam eu vulputate est. Donec condimentum venenatis velit, id accumsan neque commodo nec. Nunc tortor orci, condimentum sit amet commodo a, pharetra sed ipsum. Duis ut eros sit amet urna tempor dapibus. Duis consectetur purus et nulla tincidunt ultrices.',
    getImageSrc: () => require("../assets/images/food_1.jpg"),
  },
];

const projects = [
    {
      title: 'Greek salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      getImageSrc: () => require("../assets/images/food_1.jpg"),
    },
    {
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil.',
      getImageSrc: () => require("../assets/images/food_2.jpg"),
    },
    {
      title: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      getImageSrc: () => require("../assets/images/food_3.jpg"),
    },
  ];

  const socials = [
    {
      icon: faEnvelope,
      url: "mailto:hello@example.com",
    },
  ];

  export {promo, projects, socials}  