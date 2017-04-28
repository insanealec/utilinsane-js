'use strict';

/*
* insanealec
* Utility functions for modern javascript.
*/

/*
 * Searches for the index of an object within an array.
 *
 * @param {array} haystack - array of objects we are searching through
 * @param {string} property - property in that object we're checking against
 * @param {var|object} needle - thing we're checking to see if it matches the property of the object we're looking for
 * @param {bool} isNeedleObject - if true, signals that we should check against the property of needle, instead of value of needle
 * @return {number} - -1 if not found, otherwise index of the object within the given haystack
 */
function objectIndexOf(haystack, property, needle, isNeedleObject=false) {
	const size = haystack.length;
	//Linear serach through the haystack for the given needle.
	for(let i = 0; i < size; i++)
	{
		let curValue = haystack[i][property];
		//Check value in needle's property if it's an object, and that's what the user wants.
		if(isNeedleObject)
		{
			if(curValue === needle[property])
			{
				return i;
			}
		}
		else
		{
			if(curValue === needle)
			{
				return i;
			}
		}
	}
	return -1;
}
export {objectIndexOf}

/*
 * Semi-binary search meant for unsorted values.
 * They said binarySearch for unsorted values couldn't be done. I BEG TO DIFFER.
 * This is faster in searching the front of an array, easy to change the other way around.
 *
 * @param {array} haystack - array of objects we are searching through
 * @param {var} needle - value we are searching for
 * @param {number} min - min index in array; start with 0
 * @param {number} max - max index in array; start with haystack.length-1
 *
 * @overview:
 * 	- Linear Search:
 * 		- Worst Case: O(n)
 * 		- Best Case: O(1)
 * 		- Average Case: O(n)
 * 	- Binary Search (pre-sorted values only):
 * 		- Worst Case: O(log n)
 * 		- Best Case: O(1)
 * 		- Average Case: O(log n)
 * 	- Merge sort then Binary Search: O(n log n)
 * 	- This Function:
 * 		- Worst Case: O(n)
 * 		- Best Case: O(1)
 * 		- Average Case: maybe O(log n) ¯\_(ツ)_/¯ full analysis pending
 */
function unsortedBinarySearch(haystack, needle, min, max) {
	//Base case where we've gone too far and this end of the search failed.
	if(min > max)
	{
		return -1;
	}
	const mid = Math.floor((min+max)/2);
	if(haystack[mid] === needle)
	{
		return mid;
	}
	//Check the front of the haystack first, return immediately if found
	const front = unsortedBinarySearch(haystack, needle, min, mid-1);
	if(front !== -1)
	{
		return front;
	}
	//Now we return whatever is in the back of the haystack, if it's not there it'll be -1.
	return unsortedBinarySearch(haystack, needle, mid+1, max);
}
export {unsortedBinarySearch}