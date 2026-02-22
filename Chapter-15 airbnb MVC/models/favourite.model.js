import fs from "fs";
import path from "path";
import rootDir from "../utils/pathUtil.js";
const favouriteDataPath = path.join(rootDir, "data", "favourites.json");

export class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Already in favourites added 😻 ");
      } else {
        // favourites.push(homeId)
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

//    static fetchById(homeId, callback){
//         Favourite.getFavourites(Ids => {
//            const home = Ids.find(home => home.homeId == homeId);
//            callback(home);
//         })
//     }

  static deleteById(homeId, callback) {
    Favourite.getFavourites((homes) => {
      homes = homes.filter((id) => id !== homeId);
      fs.writeFile(favouriteDataPath, JSON.stringify(homes), callback);
    });
  }
}
