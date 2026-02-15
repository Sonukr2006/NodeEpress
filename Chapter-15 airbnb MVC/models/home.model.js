const houseArr = [];
export class Home{
    constructor(houseName, housePrice, houseRating, houseLocation, houseImg){
        this.houseName = houseName,
        this.housePrice = housePrice,
        this.houseRating = houseRating,
        this.houseLocation = houseLocation,
        this.houseImg = houseImg
    }

    save(){
        houseArr.push(this)
    }

    static fetchAll(){
        return houseArr;
    }
}