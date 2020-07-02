const countries = new COUNTRIES();
const ui = new UI();

countries.getCountries().then(data => {
  ui.displayCountries(data.allCountries);
});

const searchForm = document.querySelector(".search__form");

searchForm.addEventListener("keyup", function(e) {
  console.log(e.target);
  const searchKey = e.target.value;
  if (e.target.value != "") {
    countries.getCountries(searchKey).then(data => {
      console.log(data.searchedCountry);
      ui.searchCountries(data.searchedCountry);
    });
  } else {
    countries.getCountries().then(data => {
      ui.displayCountries(data.allCountries);
    });
  }

  e.preventDefault();
});

// const searchFilter = document.querySelector(".search__filter");

// searchForm.addEventListener("keyup", function(e) {
//     console.log(e.target.value)
//     if(e.target.value = "") {
//         countries.getCountries().then(data => {
//             ui.displayCountries(data.allCountries);
//           });
//     }

//     e.preventDefault();
// })
