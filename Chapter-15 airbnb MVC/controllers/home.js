// using post method grap the data

import { Home } from "../models/home.model.js"

export const getPostHome = (req, res, next) => {
  const {houseName, housePrice, houseRating, houseLocation, houseImg} = req.body;
  
  const HomeList = new Home(houseName, housePrice, houseRating, houseLocation, houseImg);
  HomeList.save();
  console.log(Home.fetchAll());
  
  res.render('homeAdded', { pageTitle :"Home added airbnb"})
}
// for addhome form page
export const getAddHome = (req, res, next) => {
  res.render('addHome', { pageTitle :"addHome airbnb"})
}
// home page where list all the registered home


export const houseListAtHome = (req, res, next) => {
  res.render('home', {homes: Home.fetchAll(), pageTitle :"Home airbnb", currPage : 'Home'})
}