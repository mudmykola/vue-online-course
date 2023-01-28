export default {
  state: {
    benefitsCheck: [
      {
        id: 1,
        check: "why-icon.svg",
        alt: "benefits-icon-1",
        text: "New proffesion.",
        desc: "For new normal.",
      },
      {
        id: 2,
        check: "why-icon.svg",
        alt: "benefits-icon-2",
        text: "Learn at your own pace.",
        desc: "For new normal.",
      },
      {
        id: 3,
        check: "why-icon.svg",
        alt: "benefits-icon-3",
        text: "New proffesion.",
        desc: "For new normal.",
      },
      {
        id: 4,
        check: "why-icon.svg",
        alt: "benefits-icon-4",
        text: "Learn at your own pace.",
        desc: "For new normal.",
      },
      {
        id: 5,
        check: "why-icon.svg",
        alt: "benefits-icon-5",
        text: "New proffesion.",
        desc: "For new normal.",
      },
      {
        id: 6,
        check: "why-icon.svg",
        alt: "benefits-icon-6",
        text: "Learn at your own pace.",
        desc: "For new normal.",
      },
    ],
  },
  getters: {
    BENEFITS_CHECK(state) {
      return state.benefitsCheck;
    },
  },
};
