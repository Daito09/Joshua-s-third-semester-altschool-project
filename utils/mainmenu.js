const mainMenu = [
	{ number: 1, text: "Place An Order" },
	{ number: 99, text: "Checkout Order" },
	{ number: 98, text: "Check Order History" },
	{ number: 97, text: "Check Current Order" },
	{ number: 0, text: "Cancel Order" },
];

const foodMenu = [
	{ number: 1, food: "Fried Rice", price: 700 },
	{ number: 2, food: "Chicken Assortments", price: 2500 },
	{ number: 3, food: "Fish and Chips", price: 800 },
	{ number: 4, food: "Jollof Rice", price: 1400 },
	{ number: 5, food: "Spaghetti", price: 1000 },
];

module.exports = {
	mainMenu,
	foodMenu,
};
