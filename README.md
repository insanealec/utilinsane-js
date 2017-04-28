# utilinsane-js
Personal utility functions for javascript.

## Setup

`npm install utilinsane-js`

## Usage

#### objectIndexOf

Search through an array of objects for a certain value and return that index.
The needle can also be an object, comparison only matters for the given property.

```javascript
//objectIndexOf(haystack, 'property', needle, isNeedleAnObject=false)

let haystack = [
	{
		id: 1,
		name: "Bill",
	},
	{
		id: 2,
		name: "Sally",
	},
	{
		id:49329,
		name: "Zeeborb",
	}
];
let needle1 = "Bill";
let needle2 = {
	id: 4,
	name: "Sally",
};
let needle3 = "Luke";

//Find the needle within the haystack.
let index = objectIndexOf(haystack, 'name', needle1);
//returns: 0

//Find the needle as an object within the haystack.
let index = objectIndexOf(haystack, 'name', needle2, true);
//returns: 1

//If the needle isn't found.
let index = objectIndexOf(haystack, 'name', needle3);
//returns: -1
```
