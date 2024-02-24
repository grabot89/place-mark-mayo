export const aboutController = {
  index: {
    handler: function (request, h) {
      const viewData = {
        title: "About Place Mark",
      };
      return h.view("about-view", viewData);
    },
  },
};
