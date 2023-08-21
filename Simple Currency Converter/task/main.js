// Simple Currency Converter (Javascript)
// https://github.com/imprvhub/js-simplecurrencyconverter-jbrains
// Graduate Project Completed By Iván Luna, August 21, 2023.
// For Hyperskill (Jet Brains Academy). Course: Introduction To Javascript

const input = require("sync-input");
const currencyConverter = {
    currencyTable: {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
    },

    init: function () {
        console.log(
            `Welcome to Currency Converter!\n` +
            `1 USD equals ${this.currencyTable.USD} USD\n` +
            `1 USD equals ${this.currencyTable.JPY} JPY\n` +
            `1 USD equals ${this.currencyTable.EUR} EUR\n` +
            `1 USD equals ${this.currencyTable.RUB} RUB\n` +
            `1 USD equals ${this.currencyTable.GBP} GBP`
        );

        this.run();
    },

    run: function () {
        while (true) {
            console.log(
                `What do you want to do?\n` +
                `1-Convert currencies 2-Exit program`
            );
            const menuInput = input();

            switch (menuInput) {
                case "1":
                    this.convertCurrency();
                    break;

                case "2":
                    console.log(`Have a nice day!`);
                    return;

                default:
                    console.log(`Unknown input`);
            }
        }
    },

    convertCurrency: function () {
        while (true) {
            console.log(`What do you want to convert?`);
            const currencyFrom = input(`From: `).toUpperCase();
            if (this.currencyTable[currencyFrom] === undefined) {
                console.log(`Unknown currency`);
                continue;
            }

            const currencyTo = input(`To: `).toUpperCase();
            if (this.currencyTable[currencyTo] === undefined) {
                console.log(`Unknown currency`);
                continue;
            }

            const amount = input(`Amount: `);
            if (amount < 1) {
                console.log(`The amount cannot be less than 1`);
                continue;
            } else if (isNaN(Number(amount))) {
                console.log(`The amount has to be a number`);
                continue;
            }

            console.log(
                `Result: ${amount} ${currencyFrom} equals ${this.calculateCurrency(
                    currencyFrom,
                    currencyTo,
                    amount
                )} ${currencyTo}`
            );
            break;
        }
    },

    calculateCurrency: function (currencyFrom, currencyTo, amount) {
        if (currencyFrom === currencyTo) {
            return Number(amount).toFixed(4);
        }

        return (
            amount *
            (this.currencyTable[currencyTo] / this.currencyTable[currencyFrom])
        ).toFixed(4);
    },
};

currencyConverter.init();
