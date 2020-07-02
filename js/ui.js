class UI {
  constructor() {
    this.countries = document.querySelector(".country-container");
  }

  displayCountries(data) {
    let output = "";

    data.forEach(function(u) {
      output += `
            <div class="country ${u.name} ${u.region}">
            <img alt="Country Image" class="country__image" src="${u.flag}">
            <div class="country__details">
            <h4 class="country__details--name">${u.name}</h4>
            <p class="country__details--poulation"><span>Population:</span>${u.population.toLocaleString()}</p>
            <p class="country__details--region"><span>Region:</span>${u.region}</p>
            <p class="country__details--capital"><span>Capital:</span>${u.capital}</p>
            </div>
           
        </div>
            `;
    });
    this.countries.innerHTML = output;
  }

  searchCountries(data) {
    let output = "";

    data.forEach(function(u) {
      output += `
            <div class="country ${u.name} ${u.region}">
            <img alt="Country Image" class="country__image" src="${u.flag}">
            <div class="country__details">
            <h4 class="country__details--name">${u.name}</h4>
            <p class="country__details--poulation"><span>Population:</span> ${u.population.toLocaleString()}</p>
            <p class="country__details--region"><span>Region:</span>${u.region}</p>
            <p class="country__details--capital"><span>Capital:</span>${u.capital}</p>
            </div>
           
        </div>
            `;
    });
    this.countries.innerHTML = output;
  }

//   searchCountries(search) {
//     let output = "";
//     let allCountries = Array.from(this.countries.children);
//     allCountries.forEach(function(country) {
//       let searchKey = search.charAt(0).toUpperCase() + search.slice(1);
//       if (country.classList.contains(searchKey)) {
//         output += country;
//       }
//     });

//     this.countries.innerHTML = output;
//   }
}
