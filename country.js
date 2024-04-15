 import CountryItem from "./countryItem.js";
 
 export default class Country {
    Countries = [];
    getCountries = async () => {
        let response = await fetch("https://restcountries.com/v3.1/all");
        this.Countries = await response.json();
    }
    render = async () => {
        await this.getCountries();
        let root = document.getElementById("root");
        for (const country of this.Countries) {
            let el = new CountryItem(country);
            el.render(root);

        }
    }

}