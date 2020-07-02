Vue.component("app-header", {
  template: ``
});

Vue.component("app-query", {
  props: {
    searchKey: String,
    searchCountry: Function,
    regions: String,
    selectedRegion: String
  },

  template: `
  
`
});

Vue.component("app-countries", {
  props: ["countries", "regions"],
  template: `
  
  
  `
});

Vue.component("app-country", {
  template: `
  
  `
});

var app = new Vue({
  el: "#app",

  data: {
    countries: [],
    searchKey: "",
    searchedCountries: [],
    regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    selectedRegion: ""
  },
  mounted() {
    this.getCountries();
  },

  methods: {
    getCountries() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(response => {
          this.countries = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    searchCountry: function(el) {
      let countriesList = document.querySelectorAll(".country-container");

      countriesList.forEach(function() {
        let country = countriesList.firstChild;
        let countryDetails = document.querySelectorAll(".country__details");
        console.log(countryList);
        const item = "";
        console.log(item);
        const text = el.target.value.toLowerCase();
        
        if (item.toLowerCase().indexOf(text) != -1) {
          country.style.display = "block";
        } else {
          country.style.display = "none";
        }
      });
    },

    displayCountries() {
      this.countries.forEach(element => {});
    }
  }
});
