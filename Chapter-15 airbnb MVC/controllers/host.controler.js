// using post method grap the data

import { Home } from "../models/home.model.js"

export const getPostHome = (req, res, next) => {
  const {houseName, housePrice, houseRating, houseLocation, houseImg} = req.body;
  const HomeList = new Home(houseName, housePrice, houseRating, houseLocation, houseImg);
  HomeList.save();
  res.render('host/homeAdded', { pageTitle :"Home added airbnb", currPage : "add-home"})
}
// for addhome form page
export const getAddHome = (req, res, next) => {
  res.render('host/addHome', { pageTitle :"addHome airbnb", currPage : "add-home"})
}

export const getHostHomes = (req, res, next) => {
  Home.fetchAll((registedHomes) => {
    res.render("host/host-home-list", {
      homes: registedHomes,
      pageTitle: "Host Home Lists",
      currPage: "hostHomes"
    });
  });
};