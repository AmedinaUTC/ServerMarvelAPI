# Marvel Power Levels Api

Express + MongoDB + Marvel API

* Searches the Marvel database for the characters using the [Marvel API](https://developer.marvel.com/)
* Show power levels of popular Marvel characters
* [Data provided by Marvel. © Marvel](http://marvel.com)

## Getting Started

### Add Marvel API Public/Private Keys

* Get Marvel API keys from [https://developer.marvel.com/](https://developer.marvel.com/)
* Add your keys to `config/config.js`


## API

### GET /characters?name={name}&limit={limit}

* Returns marvel characters that start with {name} and {limit} number of results


