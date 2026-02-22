import fs from 'fs'
import path from 'path';
import rootDir from '../utils/pathUtil.js'
import { error } from 'console';
import { Favourite } from './favourite.model.js';


const homeDataPath = path.join(rootDir, 'data', 'home.json')
export class Home{
    constructor(houseName, housePrice, houseRating, houseLocation, houseImg){
        this.homeId = Math.random().toString();
        this.houseName = houseName,
        this.housePrice = housePrice,
        this.houseRating = houseRating,
        this.houseLocation = houseLocation,
        this.houseImg = houseImg
    }
    

    save(){
        Home.fetchAll((houseArr) => {
             if (this.homeId) { //agr edit home hoga tab ka hai ye chalega
                houseArr = houseArr.map(home =>
                    home.homeId === this.homeId ? this : home
                )
             }else{ //agr Add home hoga tab ka hai ye chalega
                this.homeId = Math.random().toString();
                houseArr.push(this);
             }
            
            fs.writeFile(homeDataPath, JSON.stringify(houseArr), error => {
                console.log("File Write Concluded ", error);
            })
        })
        
    }

    static fetchAll(callback){
        fs.readFile(homeDataPath, (err, data) =>{
            callback( !err ? JSON.parse(data) : [])
        })
    }

    static fetchById(homeId, callback){
        Home.fetchAll(homes => {
           const home = homes.find(home => home.homeId == homeId);
           callback(home);
        })
    }

    static deleteById(homeId, callback){
        Home.fetchAll(homes => {
            homes = homes.filter(home => home.homeId !== homeId);
            fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
                Favourite.deleteById(homeId, callback);
            });
        })
    }
}