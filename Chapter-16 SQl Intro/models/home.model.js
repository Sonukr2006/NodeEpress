import DB from "../utils/database.util.js";

export class Home{
    constructor(houseName, housePrice, houseRating, houseLocation, houseImg, houseDescription){
        this.homeid = Math.random().toString();
        this.housename = houseName,
        this.houseprice = housePrice,
        this.houselocation = houseLocation,
        this.houseratting = houseRating,
        this.houseimg = houseImg,
        this.housedescription = houseDescription
    }
    

    save(){
        // Sql enjection prevent for hackers
    //   return DB.execute(`INSERT INTO homes(housename, houseprice, houselocation, houseratting, houseimg, housedescription) VALUES('${this.housename}', ${this.houseprice}, '${this.houselocation}', ${this.houseratting}, '${this.houseimg}', '${this.housedescription}')`);

        return DB.execute('INSERT INTO homes(housename, houseprice, houselocation, houseratting, houseimg, housedescription) VALUES(?, ?, ?, ?, ?, ?)', 
        [this.housename, this.houseprice, this.houselocation, this.houseratting, this.houseimg, this.housedescription]
        );
    }

    static fetchAll(){

        return DB.execute("SELECT * FROM homes");
    }

    static fetchById(homeId, callback){
        
    }

    static deleteById(homeId, callback){
        
    }
}