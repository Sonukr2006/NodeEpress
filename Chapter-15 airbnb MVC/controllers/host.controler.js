// using post method grap the data

import { Home } from "../models/home.model.js";

export const postAddHome = (req, res, next) => {
  const { houseName, housePrice, houseRating, houseLocation, houseImg } =
    req.body;
  const HomeList = new Home(
    houseName,
    housePrice,
    houseRating,
    houseLocation,
    houseImg,
  );
  HomeList.save();
  res.redirect("/host/host-homes")
};

export const postEditHome = (req, res, next) => {
  const {
    homeId,
    houseName,
    housePrice,
    houseRating,
    houseLocation,
    houseImg,
  } = req.body;

  const HomeList = new Home(
    houseName,
    housePrice,
    houseRating,
    houseLocation,
    houseImg,
  );
  HomeList.homeId = homeId;
  HomeList.save();
  res.redirect("/host/host-homes")
};

// for addhome form page
export const getAddHome = (req, res, next) => {
  res.render("host/edit-Home", {
    pageTitle: "addHome airbnb",
    currPage: "add-home",
    editing: false,
  });
};
// For edit form
export const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.fetchById(homeId, (home) => {
    if (!home) {
      console.log("Wrong Path Found for editing !");
      return res.redirect("/host/host-homes");
    }
    res.render("host/edit-Home", {
      home: home,
      pageTitle: "Edit Home",
      currPage: "hostHomes",
      editing: editing,
    });
  });
};

export const getHostHomes = (req, res, next) => {
  Home.fetchAll((registedHomes) => {
    res.render("host/host-home-list", {
      homes: registedHomes,
      pageTitle: "Host Home Lists",
      currPage: "hostHomes",
    });
  });
};

export const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("HomeId Mil gyi reh :" , homeId);
  
  Home.deleteById(homeId, error => {
    if(error)
      console.log("Error while deleting Home ", error)
    res.redirect("/host/host-homes")
  })
}