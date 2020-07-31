webpackJsonp([0],{

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var filter = function (_Component) {
  _inherits(filter, _Component);

  function filter() {
    _classCallCheck(this, filter);

    var _this = _possibleConstructorReturn(this, (filter.__proto__ || Object.getPrototypeOf(filter)).call(this));

    _this.state = {
      name: "Joe"
    };

    _this.cities = _this.cities.bind(_this);
    _this.houseTypes = _this.houseTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;


        console.log(cities);
        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }

      //return populateFormsData.map((item) => {

      //  return (
      //    <option value={item}>{item} </option>
      //  )

      //})
    }
  }, {
    key: "houseTypes",
    value: function houseTypes() {
      if (this.props.globalState.populateFormsData.houseTypes != undefined) {
        var houseTypes = this.props.globalState.populateFormsData.houseTypes;


        console.log(houseTypes);
        return houseTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;


        console.log(bedrooms);
        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            " + BR"
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city" },
            "City"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "city",
              className: "filters city",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "select",
            {
              name: "neighbourhood",
              className: "filters neighbourhood",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            _react2.default.createElement(
              "option",
              { value: "Ridgewood" },
              "Ridgewood"
            ),
            _react2.default.createElement(
              "option",
              { value: "Miami" },
              "Miami"
            )
          ),
          _react2.default.createElement(
            "select",
            {
              name: "houseType",
              className: "filters houseType",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Homes"
            ),
            this.houseTypes()
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              className: "filters bedrooms",
              onChange: this.props.change
            },
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_price",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: "minfloor-space",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: "max-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { "for": "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", {
                name: "extras",
                type: "checkbox",
                value: "elevator",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", {
                name: "extras",
                type: "checkbox",
                value: "swimmingpool",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { "for": "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Finished basement"
              ),
              _react2.default.createElement("input", {
                name: "extras",
                type: "checkbox",
                value: "finished basement",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { "for": "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", { name: "extras", type: "checkbox", value: "gym" })
            )
          )
        )
      );
    }
  }]);

  return filter;
}(_react.Component);

exports.default = filter;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create Ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About Us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Log In"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(90);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Joe"
    };

    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: "loopListings",
    value: function loopListings() {
      var data = this.props.data;


      if (data == undefined || data.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      return data.map(function (listing, index) {
        return _react2.default.createElement(
          "div",
          { className: "col-md-3", key: index },
          _react2.default.createElement(
            "div",
            { className: "listing" },
            _react2.default.createElement(
              "div",
              {
                className: "listing-img",
                style: {
                  background: "url(\"" + listing.image + "\") no-repeat center center"
                }
              },
              _react2.default.createElement(
                "span",
                { className: "address" },
                listing.address
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "div",
                  { className: "col-md-3" },
                  _react2.default.createElement("div", { className: "user-img" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-md-9" },
                  _react2.default.createElement(
                    "div",
                    { className: "user-details" },
                    _react2.default.createElement(
                      "span",
                      { className: "user-name" },
                      "Nina Smith"
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "post-date" },
                      "05/05/2017"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "listing-details" },
                    _react2.default.createElement(
                      "div",
                      { className: "floor-space" },
                      _react2.default.createElement("i", { className: "fa fa-square-o", "area-hidden": "true" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        "1000ft \xB2"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "bedrooms" },
                      _react2.default.createElement("i", { className: "fa fa-bed", "area-hidden": "true" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        listing.bedrooms
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "bottom-info" },
              _react2.default.createElement(
                "span",
                { className: "price" },
                listing.price
              ),
              _react2.default.createElement(
                "span",
                { className: "location" },
                _react2.default.createElement("i", { className: "fas fa-map-marker" }),
                listing.city,
                ",",
                listing.state
              )
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search" })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            null,
            "390 results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              { name: "sortby", className: "sortby" },
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Highest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                "Lowest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", { className: "fa fa-th-list", "area-hidden": "true" }),
              _react2.default.createElement("i", { className: "fa fa-th", "area-hidden": "true" })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-results" },
          this.loopListings()
        ),
        _react2.default.createElement(
          "section",
          { className: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              { className: "active" },
              " Prev"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 1"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 2"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 3"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 4"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 5"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 6"
            ),
            _react2.default.createElement(
              "li",
              null,
              " Next"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = [{
  address: "20-34-Grad Avenue",
  city: "Ridgewood",
  state: "New York",
  rooms: 3,
  price: 22000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  houseType: "Apartment",
  image: "https://q-cf.bstatic.com/images/hotel/max1024x768/197/197179243.jpg"
}, {
  address: "L/34 Lethal Street",
  city: "Buffalo",
  state: "New York",
  rooms: 3,
  price: 18000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  houseType: "Apartment",
  image: "https://i.pinimg.com/originals/26/81/70/2681707747d6f7e0965cfe186f1effbb.jpg"
}, {
  address: "210 Talbert Hall",
  city: "Buffalo",
  state: "New York",
  rooms: 3,
  price: 22000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  houseType: "Apartment",
  image: "https://media.architecturaldigest.com/photos/5c1a657fcd9ad05aac56b5e0/16:9/w_2560%2Cc_limit/ju_international_houses_p286.jpg"
}, {
  address: "6413 Christopher Lane",
  city: "Pleasonton",
  state: "California",
  rooms: 3,
  price: 25000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  houseType: "Single House",
  image: "https://i.pinimg.com/originals/86/80/bd/8680bdcd7d50012a1f51f2f41314a338.jpg"
}, {
  address: "2034-AngelAvenue",
  city: "Islington",
  state: "California",
  rooms: 3,
  price: 25000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  houseType: "Condol",
  image: "https://q-cf.bstatic.com/images/hotel/max1024x768/197/197179243.jpg"
}, {
  address: "2034-Voldemort City",
  city: "London",
  state: "England",
  rooms: 3,
  price: 25000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  houseType: "Multi-Home",
  image: "https://q-cf.bstatic.com/images/hotel/max1024x768/197/197179243.jpg"
}];

exports.default = data;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(90);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(306);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(305);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(307);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(308);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _types = __webpack_require__(311);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: "Joe",
      data: _listingsData2.default,
      city: "All",
      houseType: "0",
      bedrooms: "0",
      min_price: 0,
      max_price: 102000,
      min_floor_space: 0,
      max_floor_space: 50000,
      filteredData: _listingsData2.default,
      populateFormsData: ""
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: "change",
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: "filteredData",
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.data.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city = _this3.state.city;
        });
      }

      if (this.state.houseType != "All") {
        newData = newData.filter(function (item) {
          return item.houseType = _this3.state.houseType;
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: "populateForms",
    value: function populateForms() {
      var _this4 = this;

      //City
      var cities = this.state.data.map(function (item) {
        return item.city;
      });

      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      //houseType
      var houseTypes = this.state.data.map(function (item) {
        return item.houseType;
      });

      houseTypes = new Set(houseTypes);
      houseTypes = [].concat(_toConsumableArray(houseTypes));

      //bedrooms
      var bedrooms = this.state.data.map(function (item) {
        return item.rooms;
      });

      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));

      this.setState({
        populateFormsData: {
          houseTypes: houseTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(_Filter2.default, {
            change: this.change,
            globalState: this.state,
            populateAction: this.populateForms
          }),
          _react2.default.createElement(_Listings2.default, { data: this.state.filteredData })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[313]);