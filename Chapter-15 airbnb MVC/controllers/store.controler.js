// using post method grap the data
import { Home } from "../models/home.model.js";


export const getIndex = (req, res, next) => {
  Home.fetchAll((registedHomes) => {
    res.render("store/index", {
      homes: registedHomes,
      pageTitle: "airbnb Home",
      currPage: "home"
    });
  });
};
// home page where list all the registered home
export const houseListAtHome = (req, res, next) => {
  Home.fetchAll((registedHomes) => {
    res.render("store/home-list", {
      homes: registedHomes,
      pageTitle: "Homes List",
      currPage: "Home-list",
    });
  });
};

export const getBooking = (req, res, next) => {
  res.render("store/booking", { pageTitle: "My Booking", currPage: "booking" });
};

export const getFevouriteList = (req, res, next) => {
  Home.fetchAll((registedHomes) => {
    res.render("store/favourite-list", {
      homes: registedHomes,
      pageTitle: "My Favourite",
      currPage: "favourites",
    });
  });
};
