
 export default class CountryItem {
    constructor(country) {
        this.country = country;
    }
    render = (root) => {
        // parent div
        let parentDiv = document.createElement("div");
        parentDiv.className = "col-3 mt-4";

        // card div
        let cardDiv = document.createElement("div");
        cardDiv.className = "card";

        // img
        let img = document.createElement("img");
        img.src = this.country.flags.svg;
        img.className = "card-img-top";
        img.alt = "...";

        // card body

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        // h5
        let h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerHTML = this.country.name.common;

        // append card body

        // append to card div

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        cardBody.append(h5)

        // append  to card
        parentDiv.appendChild(cardDiv);

        // append to root

        root.appendChild(parentDiv);
    }
}