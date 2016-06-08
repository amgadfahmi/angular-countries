# angular-countries 
Master 0.1.0: [![Master Status](https://travis-ci.org/amgadfahmi/angular-countries.svg?branch=master)](https://travis-ci.org/amgadfahmi/angular-countries)&nbsp; Development 0.1.0: [![Development Status](https://travis-ci.org/amgadfahmi/angular-countries.svg?branch=development)](https://travis-ci.org/amgadfahmi/angular-countries)&nbsp;[![Dependency Status](https://david-dm.org/amgadfahmi/angular-countries.svg)](https://david-dm.org/amgadfahmi/angular-countries)

![angular countries flags information ](https://amgadfahmi.files.wordpress.com/2016/06/countries-flags1.jpg "angular countries info")



## Installation

[![bower](https://amgadfahmi.files.wordpress.com/2016/05/bower.png "angular countries information")](http://bower.io/search/?q=angular-countries)

You can install the package using Bower 
```
$ bower install --save angular-countries
```
Or download the project and find the module in `dist/` folder 

## Usage
First you need to inject the main module then call the angular countries service   

```javascript
angular.module("app", ['angular-data-service' ])

.controller('testCtrl', function(AngularCountries) {
    AngularCountries.getAll().then(function(result) {
    console.log(result.data);
    });
});

```
`Note` you need to create an account on [mashape.com](https://www.mashape.com) and get a key in order to start using any of there APIs. The countries API is free, once you have the key place it in the app run as follow 
```javascript
app.run(function(AngularCountriesConfig ) {   
AngularCountriesConfig.setKey('3q21QYEJadmsdhuih44r47fop1xnS4Ljsnovh5gANrn3BT');
})
```

## Parameters 

```
getAll              get all countries info 
getByCode           get by 2-letter or 3-letter country codeex: us 
getByCodes          get by list of 2-letter of 3-letter country codes separated by semi-colon ex: us;ru 
getByName           get by english or native country name ex: norge 
getByCallingCode    get by calling code of country ex: 57 
getByCapital        get by name of capital city ex: cairo 
getByCurrency       get by Currency Code ex: nok 
getByLanguage       get by ISO 639-1 Language Code ex: et 
getByRegion         get by region name ex: africa 
getBySubRegion      get by calling code ex: Northen Africa 

```

## Promises 
Each function from the above will return a promise to grantee the usage of the service in async mode. 

```javascript
    AngularCountries.getByCode('us').then(function(result) {
        console.log(result.data);
    });

    AngularCountries.getByCodes('ru', 'us').then(function(result) {
        console.log(result.data);
    });
    
    AngularCountries.getByName('norge').then(function(result) {
        console.log(result.data);
    });

    AngularCountries.getByCallingCode(971).then(function(result) {
        console.log(result.data);
    });

    AngularCountries.getByCapital('tallin').then(function(result) {
        console.log(result.data);
    });

    AngularCountries.getByCurrency('nok').then(function(result) {
        console.log(result.data);
    });
    
    AngularCountries.getByLanguage('et').then(function(result) {
        console.log(result.data);
    });

    AngularCountries.getByRegion('africa').then(function(result) {
        console.log(result.data);
    });

    AngularCountries.getBySubRegion('western asia').then(function(result) {
        console.log(result.data);
    });
    
```
## Output 
Country object structure will look as following.. 
```javascript 
[
  {
    "name": "Egypt",
    "capital": "Cairo",
    "altSpellings": [
      "EG",
      "Arab Republic of Egypt"
    ],
    "relevance": "1.5",
    "region": "Africa",
    "subregion": "Northern Africa",
    "translations": {
      "de": "Ägypten",
      "es": "Egipto",
      "fr": "Égypte",
      "ja": "エジプト",
      "it": "Egitto"
    },
    "population": 89335600,
    "latlng": [
      27,
      30
    ],
    "demonym": "Egyptian",
    "area": 1002450,
    "gini": 30.8,
    "timezones": [
      "UTC+02:00"
    ],
    "borders": [
      "ISR",
      "LBY",
      "SDN"
    ],
    "nativeName": "مصر‎",
    "callingCodes": [
      "20"
    ],
    "topLevelDomain": [
      ".eg"
    ],
    "alpha2Code": "EG",
    "alpha3Code": "EGY",
    "currencies": [
      "EGP"
    ],
    "languages": [
      "ar"
    ]
  }
]
```

## License

Copyright [2016] Amgad Fahmi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
