import React, { Component } from "react";

export default class filter extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };

    this.cities = this.cities.bind(this);
    this.houseTypes = this.houseTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }

  componentWillMount() {
    this.props.populateAction();
  }
  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData;

      console.log(cities);
      return cities.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }

    //return populateFormsData.map((item) => {

    //  return (
    //    <option value={item}>{item} </option>
    //  )

    //})
  }
  houseTypes() {
    if (this.props.globalState.populateFormsData.houseTypes != undefined) {
      var { houseTypes } = this.props.globalState.populateFormsData;

      console.log(houseTypes);
      return houseTypes.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData;

      console.log(bedrooms);
      return bedrooms.map(item => {
        return (
          <option key={item} value={item}>
            {item} + BR
          </option>
        );
      });
    }
  }
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <label htmlFor="city">City</label>
          <select
            name="city"
            className="filters city"
            onChange={this.props.change}
          >
            <option value="All">All</option>
            {this.cities()}
          </select>
          <select
            name="neighbourhood"
            className="filters neighbourhood"
            onChange={this.props.change}
          >
            <option value="All">All</option>
            <option value="Ridgewood">Ridgewood</option>
            <option value="Miami">Miami</option>
          </select>
          <select
            name="houseType"
            className="filters houseType"
            onChange={this.props.change}
          >
            <option value="All">All Homes</option>
            {this.houseTypes()}
          </select>
          <select
            name="bedrooms"
            className="filters bedrooms"
            onChange={this.props.change}
          >
            {this.bedrooms()}
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>
          <div className="filters floor-space">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_floor_space"
              className="minfloor-space"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label for="extras">
              <span>Elevators</span>
              <input
                name="extras"
                type="checkbox"
                value="elevator"
                onChange={this.props.change}
              ></input>
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input
                name="extras"
                type="checkbox"
                value="swimmingpool"
                onChange={this.props.change}
              ></input>
            </label>
            <label for="extras">
              <span>Finished basement</span>
              <input
                name="extras"
                type="checkbox"
                value="finished basement"
                onChange={this.props.change}
              ></input>
            </label>
            <label for="extras">
              <span>Gym</span>
              <input name="extras" type="checkbox" value="gym"></input>
            </label>
          </div>
        </div>
      </section>
    );
  }
}
