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
parkStMarket.stockItem("apple", 2);
parkStMarket.seeInventory() // {"apple" : 2}

// type error
// parkStMarket.stockItem(false, 2);

// quantity error
parkStMarket.stockItem("banana", -1);

// does the store reflect the proper amount of items?
// can I see the items?