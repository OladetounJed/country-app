class COUNTRIES {
  constructor() {}

  async getCountries(searchKey) {
    const allCountriesResponse = await fetch(
      "https://restcountries.eu/rest/v2/all"
    );
    const searchedCountryResponse = await fetch(
        `https://restcountries.eu/rest/v2/name/${searchKey}?fullText=true`
    );

    const allCountries = await allCountriesResponse.json();
    const searchedCountry = await searchedCountryResponse.json();

    return {
      allCountries,
      searchedCountry
    };
  }
}
