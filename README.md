# fikracamps task-w2
----------------

## Description
--------
Use NodeJS read 'flower.txt' and:
1. Count the number of rows.
2. List the flower name that start with letter 'S'.
3. Count the number of flower that not start with letter 'S'.
4. List the flower start with first letter of your name if your name start with 'S' use second letter.
5. List all the flower the name length is 5.


## Libraries I used.
- NodeJS
- Underscore

## simple filter that did all the task :)
```js
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
```

## Response Should give us this
```js
{  
   count:524,
   numberOfNamesThatNotStartWithS:454,
   namesStartWithS:[  
      'Safflower',
      'Statice',
      'Sea Lavender',
      'Star of Bethlehem',
      'Silver Ragwort',
      'Stock',
      'Sword Lily',
      'Sword Lilies',
      'Sweet Peas',
      'Syringa',
      'Spider Lily',
      'Shellflower',
      'Sansevieria',
      'Spider Mums',
      'Spider Fuji',
      'Salpiglossis',
      'Sugarbush',
      'Sage',
      'Soapwort',
      'Saponaria',
      'Saxicola',
      'Scabiosa',
      'Scabiosas',
      'Scarlet Plume',
      'Scarlet Plumes',
      'Sea Holly',
      'Sea Hollies',
      'Snapdragon',
      'Snapdragons',
      'Sneezeweed',
      'Snowberry',
      'Schinus',
      'Snow on the Mountain',
      'Smoke on the Prairie',
      'Spurge',
      'Solidago',
      'Solidagos',
      'Spray Carnation',
      'Spray Carnations',
      'St John\'s Wort',
      'Stephanotis',
      'Stock',
      'Stonecrop',
      'Sedum',
      'Sedums',
      'Strawflower',
      'Strelitzia',
      'Strelitzias',
      'Summer poinsettia',
      'Sunflower',
      'Sunflowers',
      'Sweet Sultan',
      'Sweet Sultans',
      'Sweet William',
      'Sword fern',
      'Sword Ferns',
      'Sticherus',
      'Sprengeri fern',
      'Sprengeri Ferns',
      'Speedwell',
      'Snowballs',
      'Sarracenia',
      'Sarracenias',
      'Snake grass',
      'Succulents',
      'Succulent',
      'Safari sunsets',
      'Sunsets',
      'Slipper Orchid',
      'Scorpion Orchid'
   ],
   namesStartWithMyLetterK:[  
      'Kangaroo Paws',
      'Kangaroo Paw',
      'King Protea',
      'King Proteas',
      'Knapweed',
      'Kangaroo Grass',
      'Kale flowers',
      'Kale',
      'Kale flower',
      'Kiwi branches',
      'Kiwi branch'
   ],
   namesLengthFive:[  
      'Aster',
      'Monad',
      'Broom',
      'Daisy',
      'Stock',
      'Heath',
      'Ivies',
      'Lilac',
      'Lilly',
      'Lumex',
      'Peony',
      'Phlox',
      'Roses',
      'Berry',
      'Stock',
      'Sedum',
      'Ferns',
      'Tansy',
      'Tulip',
      'Lotus'
   ]
}
```