/*----------------------------------------------------------------------/

    MVP of POS System

/----------------------------------------------------------------------*/

/* TODO: CREATE INVENTORY MODEL */

class Store {
    constructor(name) {
        this.name = name;
        this.inventory = {};
    }

    seeInventory() {
        console.log(this.inventory);
    }

    stockItem(itemName, quantity) {
        /* Error handling */
        if (typeof itemName !== 'string') throw new TypeError("Please enter a string for item name argument");
        if (quantity <= 0) throw new Error("Please stock in positive quantities.");

        if (itemName in this.inventory) this.inventory[itemName] += quantity;
        else this.inventory[itemName] = quantity;
    }

    deleteItem(itemName, quantity) {
        /* Error handling */
        if (typeof itemName !== 'string') throw new TypeError("Please enter a string for item name argument");
        if (!(itemName in this.inventory)) throw new Error("No such item in inventory");
        if (quantity <= 0) throw new Error("Please enter a positive integer.");
        if (this.inventory[itemName] - quantity < 0) throw new Error("Item quantity cannot fall below zero.");

        this.inventory[itemName] -= quantity;
    }
}

/* TODO: CREATE ITEM MODEL */

class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

/*----------------------------------------------------------------------/

    Test Suite

/----------------------------------------------------------------------*/

// create a store
const parkStMarket = new Store('parkStMarket');

// add an item to the store
// does the store reflect the proper amount of items? Y
// can I see the items? Y
parkStMarket.stockItem("apple", 2);
parkStMarket.stockItem("apple", 1);
parkStMarket.stockItem("banana", 10);
parkStMarket.deleteItem("banana", 1);
parkStMarket.seeInventory() // {"apple" : 3, "banana": 9};

// stockItem type error
try {
    parkStMarket.stockItem(false, 2);
} catch (e) {
    console.error(e);
}

// stockItem quantity error
try {
    parkStMarket.stockItem("banana", -1);
} catch (e) {
    console.error(e);
}

// deleteItem quantity error
try {
    parkStMarket.deleteItem("banana", 11);
} catch (e) {
    console.error(e);
    parkStMarket.seeInventory(); // {"apple" : 3, "banana": 9};
}

// deleteItem no such item in inventory
try {
    parkStMarket.deleteItem("lemon", 1);
} catch (e) {
    console.error(e);
    parkStMarket.seeInventory(); // {"apple" : 3, "banana": 9};
}