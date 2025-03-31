
document.getElementById("currentyear").textContent = new Date().getFullYear();  
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;  
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	
	{
	  templeName: "Accra Ghana ",
	  location: "Ghana City, Ghana",
	  dedicated: "2001, November, 2",
	  area: 17500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Nairobi Kenya",
	  location: "Mountain View Nairobi",
	  dedicated: "2021, September, 11",
	  area: 6081,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Abidjan Ivory Coast",
	  location: "Riviera Attoban",
	  dedicated: "2018, November, 8",
	  area: 23908,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Manilla Philippines",
	  location: "Mexico City, Mexico",
	  dedicated: "1984,September, 27",
	  area: 26683,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	}
	// Add more temple objects here...
  ];
  let templeNames = [];
  temples.forEach(tempObj => {
  templeNames.push(tempObj.templeName);
  });

//   console.log(templeNames);

let locations = [];
temples.forEach(tempObj => {
  locations.push(tempObj.location);
});

let dedicatedDates = [];
temples.forEach(tempObj => {
    dedicatedDates.push(tempObj.dedicated);
});

let areas = [];
temples.forEach(tempObj => {
    areas.push(tempObj.area);
});

let imageUrls = [];
temples.forEach(tempObj => {
    imageUrls.push(tempObj.imageUrl);
});

const dedicatedYears = [2005, 1888, 2015, 2020, 1974, 1986, 1983, 2009, 1980, 1983];


// select the DOM element for card_ id
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

// value is string with all the tags and text, use template literals ` ` for multiple lines.
for (let i = 0; i < cards.length; i++) {
  cards[i].innerHTML = `
  <div class="card">
  <div class="container">
  <h3><b>${templeNames[i]}</b></h3>
  <p>
  Location: ${locations[i]}<br>
  Dedicated: ${dedicatedDates[i]}<br>
  Size: ${areas[i]} sq ft
  </p>
  </div>
  <img src="${imageUrls[i]}" alt="${templeNames[i]} Temple" loading="lazy">
  </div>
  `;
}


// filtering helps select index(es) and filtering creates an array,
// then loop thru that array.

function getAllIndexes(array, arrowCondition) {
  const indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (arrowCondition(array[i])) {
      indexes.push(i);
    }
  }
  return indexes;
}

// console.log(dedicatedDates);
// const testConditionedArray = getAllIndexes(dedicatedYears, value => value < 1900);
// console.log(testConditionedArray);
// console.log(testConditionedArray[0]);

function createFilteredTempleCards(listToFilter, arrowCondition) {
  for (let i = 0; i < filteredArrayIndexes.length; i++) {
    cards[i].innerHTML = ``;
  }

  // let filteredArray = listToFilter.filter(arrowCondition);
  // let toUseIndexes = [];
  // let counter = 0;
  // for (let j = 0; j < listToFilter.length; j++) {
  //   if (filteredArray[counter] === listToFilter[j]) {
  //     toUseIndexes.push(j);
  //     counter += 1;
  //   }
  //   else {
  //     counter += 1;
  //   }
  // }

  let filteredArrayIndexes = getAllIndexes(listToFilter, arrowCondition);

  for (let i = 0; i < filteredArrayIndexes.length; i++) {
    cards[i].innerHTML = `
    <div class="card">
    <div class="container">
    <h3><b>${templeNames[i]}</b></h3>
    <p>
    Location: ${locations[i]}<br>
    Dedicated: ${dedicatedDates[i]}<br>
    Size: ${areas[i]} sq ft
    </p>
    </div>
    <img src="${imageUrls[i]}" alt="${templeNames[i]} Temple" loading="lazy">
    </div>
    `;
  }
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
