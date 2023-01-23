export default {
  state: {
    headerInfo: [
      {
        id: 1,
        title: "Your engine for answers.",
      },
    ],
  },
  getters: {
    getHeaderInfo(state) {
      return state.headerInfo;
    },
  },
};
