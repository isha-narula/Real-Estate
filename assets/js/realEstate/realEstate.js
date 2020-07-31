import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Listings from "./Listings.js";
import data from "./data/listingsData.js";
import { throwStatement } from "@babel/types";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      data,
      city: "All",
      houseType: "0",
      bedrooms: "0",
      min_price: 0,
      max_price: 102000,
      min_floor_space: 0,
      max_floor_space: 50000,
      filteredData: data,
      populateFormsData: ""
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }

  change(event) {
    var name = event.target.name;
    var value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
        this.filteredData();
      }
    );
  }

  filteredData() {
    var newData = this.state.data.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space
      );
    });

    if (this.state.city != "All") {
      newData = newData.filter(item => {
        return (item.city = this.state.city);
      });
    }

    if (this.state.houseType != "All") {
      newData = newData.filter(item => {
        return (item.houseType = this.state.houseType);
      });
    }

    this.setState({
      filteredData: newData
    });
  }

  populateForms() {
    //City
    var cities = this.state.data.map(item => {
      return item.city;
    });

    cities = new Set(cities);
    cities = [...cities];

    //houseType
    var houseTypes = this.state.data.map(item => {
      return item.houseType;
    });

    houseTypes = new Set(houseTypes);
    houseTypes = [...houseTypes];

    //bedrooms
    var bedrooms = this.state.data.map(item => {
      return item.rooms;
    });

    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];

    this.setState({
      populateFormsData: {
        houseTypes,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state)
    } 
    );
  }

  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
          />
          <Listings data={this.state.filteredData} />
        </section>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
