let fs = require('fs');
let _  = require('underscore');

fs.readFile('./files/names.txt', (error, data) => {

	/**
	 * if there is an error stop the program
	 * @param  any error contains file system errors
	 * @return null      stop the program if error.
	 */
	if (!error == null) {
		console.log('There is an ERROR:', error);
		return;
	} 

	/**
	 * names get all names then store then in array called names
	 */
	let names = data.toString().split("\n");

	/**
	 * allData allData is an object that contains everything you want
	 * @type {Object}
	 */
	let allData = {
		count: names.length,
		numberOfNamesThatNotStartWithS: 0,
		namesStartWithS: [],
		namesStartWithMyLetterK: [],
		namesLengthFive: []
	};

	_.filter(names, (name) => {
		if(_.contains(name[0], 'S')) {
			allData.namesStartWithS.push(name)
		} else {

			/**
			 * count the number of names that not start with S letter
			 */
			allData.numberOfNamesThatNotStartWithS += 1;


			if (_.contains(name[0], 'K')) {
				/**
				 * Store names that starts with my letter K
				 */
				allData.namesStartWithMyLetterK.push(name)
			}
		}


		/**
		 * list all names that name length is 5
		 */
		if (name.length === 5) {
			allData.namesLengthFive.push(name)
		}
	})


	// prnit the allData object that contains all the data.
	console.log(allData)
});