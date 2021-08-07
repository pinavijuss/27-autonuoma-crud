class CarRental {
    constructor() {
        this.list = [];

    }

    intro() {
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working === true) {
                count++;
            }
        }

        console.log(`<<<< Hi, we are CityBird and we have ${count} cars available >>>>`);

    }

    addCar(name, color, price) {
        let verchile = {
            name, color, price, working: true
        }
        this.list.push(verchile);
        console.log(verchile);

    }

    carPark() {
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working === true) {
                count++;
                console.log(`${count} ${car.name} (${car.color}) is for ${car.price}EUR/day`)

            }

        }
    }

    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
    }

    carAccident(index) {

        this.list[index].working = false;

    }

    carRepair(index) {

        this.list[index].working = true;
    }

    removeCar(index) {

        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }


        this.list = updatedList;
    }

    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
    }
}





module.exports = CarRental;