// using post method grap the data
import { Favourite } from "../models/favourite.model.js";
import { Home } from "../models/home.model.js";


export const getIndex = (req, res, next) => {
  Home.fetchAll()
  .then(([registedHomes]) => {
    res.render("store/index", {
      homes: registedHomes,
      pageTitle: "airbnb Home",
      currPage: "home"
    });
  })
  
};
// home page where list all the registered home
export const gethomesList = (req, res, next) => {
  Home.fetchAll()
  .then(([registedHomes]) => {
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
  Favourite.getFavourites(favourites => {
    Home.fetchAll()
    .then(([registedHomes]) => {
      const favouriteHome = registedHomes.filter(home => favourites.includes(home.homeId));
      res.render("store/favourite-list", {
        homes: favouriteHome,
        pageTitle: "My Favourite",
        currPage: "favourites",
      });
    });
  })
};

export const postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, (error) => {
    if(error){
      console.log("Error while deleting home from favourite", error);
    }
    res.redirect("/favourites");
  })
}

export const postFevourite = (req, res, next) => {
  Favourite.addToFavourite(req.body.homeId, error => {
    if(error){
      console.log("Error while adding favourite list !", error);
    }
    res.redirect("/favourites")
  })
}

export const gethomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.fetchById(homeId, homeDetail => {
    if(!homeDetail){
      res.redirect("/homes")
      console.log("This Home is not found !")
    }else{
      res.render("store/home-detail",{home : homeDetail ,pageTitle: "Details Home",
          currPage: "home"}
      )
    }
  })
  
}
