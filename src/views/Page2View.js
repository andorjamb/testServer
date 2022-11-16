import CityComponent from "../components/CityComponent";
import { cities } from '../data/cities.js';
import React, { Component } from 'react';


class Page2View extends Component {
    state = {
        cities: { cities }
    }
    render() {

        const cities = this.state.cities;
        console.log(cities);

        /*     .map((city) => {
                    async () => {
                        const descriptionData = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=400&explaintext&titles=${city.cityName}&format=json`)
                            .then(console.log(descriptionData));
                        city.description = descriptionData;
                    }
                }
                ) */

        return (

            < CityComponent >

            </CityComponent >

        )
    }
}
export default Page2View;