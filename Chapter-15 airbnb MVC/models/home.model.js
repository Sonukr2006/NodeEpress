import fs from 'fs'
import path from 'path';
import rootDir from '../utils/pathUtil.js'


export class Home{
    constructor(houseName, housePrice, houseRating, houseLocation, houseImg){
        this.houseName = houseName,
        this.housePrice = housePrice,
        this.houseRating = houseRating,
        this.houseLocation = houseLocation,
        this.houseImg = houseImg
    }

    save(){
        Home.fetchAll((houseArr) => {
            houseArr.push(this)
            const homeDataPath = path.join(rootDir, 'data', 'home.json');
            fs.writeFile(homeDataPath, JSON.stringify(houseArr), error => {
                console.log("File Write Concluded ", error);
            })
        })
        
    }

    static fetchAll(callback){
        const homeDataPath = path.join(rootDir, 'data', 'home.json')
        fs.readFile(homeDataPath, (err, data) =>{
            callback( !err ? JSON.parse(data) : [])
        })
    }
}