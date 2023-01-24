export default {
  state: {
    headerStars: [
      {
        id: 1,
        stars: "stars-icon.svg",
        alt: "icon-1",
      },
      {
        id: 2,
        stars: "stars-icon.svg",
        alt: "icon-2",
      },
      {
        id: 3,
        stars: "stars-icon.svg",
        alt: "icon-3",
      },
      {
        id: 4,
        stars: "stars-icon.svg",
        alt: "icon-3",
      },
      {
        id: 5,
        stars: "stars-icon.svg",
        alt: "icon-3",
      },
    ],
  },
  getters: {
    getHeaderStars(state) {
      return state.headerStars;
    },
  },
};
