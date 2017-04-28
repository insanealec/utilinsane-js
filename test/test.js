'use strict';

const expect = require('chai').expect;

import {objectIndexOf} from '../index';
//Sample haystack. Should probably pull this in from elsewhere?
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
//Test our object index of.
describe('#objectIndexOf', () => {
	it('should find the value in the first index', () => {
		const result = objectIndexOf(haystack, 'name', needle1);
		expect(result).to.equal(0);
	});
});


//Test our unsorted Binary Search.
import {unsortedBinarySearch} from '../index';
