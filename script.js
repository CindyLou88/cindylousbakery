console.log("Script loaded successfully!");

const dailySpecials = [
    "Buy one get one free on all cookies! Today only!",
    "20% off all orders today! Use code: BAKERY20",
    "Seasonal Special: Pumpkin Spice Muffins - Only available this month!",
    "Free coffee with any muffin purchase!",
    "Limited time offer: 10% off your next order when you sign up for our newsletter!",
    "Special offer: Buy any 2 cakes, get a free box of brownies!",
    "Happy Hour: 50% off all pastries from 4pm to 6pm!",
    "Free delivery on all orders today within 10 miles of our bakery!"
];

const randomSpecial = dailySpecials[Math.floor(Math.random() * dailySpecials.length)];

document.getElementById("specialOffer").innerText = randomSpecial;