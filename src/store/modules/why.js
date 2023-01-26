export default {
  state: {
    whyCheck: [
      {
        id: 1,
        check: "why-icon.svg",
        alt: "why-icon-1",
        text: "Watch on any device",
      },
      {
        id: 2,
        check: "why-icon.svg",
        alt: "why-icon-2",
        text: "Progress 24/7",
      },
      {
        id: 3,
        check: "why-icon.svg",
        alt: "why-icon-3",
        text: "New courses each month",
      },
      {
        id: 4,
        check: "why-icon.svg",
        alt: "why-icon-4",
        text: "Multilingual platform",
      },
    ],
  },
  getters: {
    getWhyCheck(state) {
      return state.whyCheck;
    },
  },
};
