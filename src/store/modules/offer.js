export default {
  state: {
    offerContent: [
      {
        id: 1,
        subtitle: "STEP 1",
        title: "We offer the plane and the pilot.",
        desc: "Come on, register yourself to join online classes with. register with your email account and submit now.",
        url: "Explore",
        img1: "offer-img-1.png",
        img2: "offer-img-2.png",
        img3: "offer-img-3.png",
        img4: "offer-img-4.png",
        altImg:'image',
        arrowLink: "arrow-link.svg",
        altArrow:'arrow-link',
      },
    ],
  },
  getters: {
    OFFER_CONTENT(state) {
      return state.offerContent;
    },
  },
};
