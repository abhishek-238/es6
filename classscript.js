class Hotel{
    constructor(){
        this.hotelname = "Vrindavan";
        this.totalroom = 200;
        this.bookedroom = 140;
        this.location = "Mathura";
    }
    getAvailability(){
        return this.totalroom - this.bookedroom;
    }
    getDetail(){
        let temp = `<h4>Hotel name:${this.hotelname}</h4>`
            temp += `<p>Total room:${this.totalroom}</br>`
            temp += `Booked room:${this.bookedroom}</br>`
            temp += `Location name:${this.location}</p>`
            temp += `<h4>Availability:${this.getAvailability()}</h4>`
            return temp;
    }
}
let hotel = new Hotel();
document.querySelector("#box").innerHTML = hotel.getDetail();