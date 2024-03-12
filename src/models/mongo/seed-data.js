export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    }
  },
  categories: {
    _model: "Category",
    museums: {
      title: "Museum",
      userid: "->users.bart"
    }
  },
  placemarks: {
    _model : "Placemark",
    museum : {
      name: "Country Life Museum",
      category: "Museums",
      description: "Museum of country life",
      "latitude": 53.88399130187888,
      "longitude": -9.207886178948524,
      "temperature": 11,
      categoryid: "->categories.museums"
    },
  }
};