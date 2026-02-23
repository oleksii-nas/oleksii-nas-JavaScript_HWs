function minPrice(...[arr]) {
    let keys = Object.keys(arr);
    let prices = [];

    for (let i = 0; i < keys.length; i++) {
        let value = arr[keys[i]];

        if (typeof value === "string") {
            prices.push(parseFloat(value));
        }
    }

    let min = Math.min(...prices);

    return "Мінімальна вартість послуги: " + min.toFixed(2) + " грн";
}

function maxPrice(...[arr]) {
    let keys = Object.keys(arr);
    let prices = [];

    for (let i = 0; i < keys.length; i++) {
        let value = arr[keys[i]];

        if (typeof value === "string") {
            prices.push(parseFloat(value));
        }
    }

    let max = Math.max(...prices);

    return "Максимальна вартість послуги: " +max.toFixed(2) + " грн";
}

var services = {
    "стрижка": "60.50 грн",
    "гоління": "80.25 грн",
    "Миття голови": "100.00 грн",

    price: function () {
        let keys = Object.keys(this);
        let sum = 0;

        for (let i = 0; i < keys.length; i++) {
            let value = this[keys[i]];

            if (typeof value === "string") {
                sum += parseFloat(value);
            }
        }

        return "Загальна вартість наданих послуг: " +sum.toFixed(2) + " грн";
    },

    minPrice: function () {
        return minPrice(this);
    },

    maxPrice: function () {
        return maxPrice(this);
    }
};

services['Манікюр'] = "1.40 грн";
services['Гель для волосся'] = "12.40 грн";
services['Вологі серветки'] = "150 грн";
services['Розбити скло'] = "200.45 грн";

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice()); 