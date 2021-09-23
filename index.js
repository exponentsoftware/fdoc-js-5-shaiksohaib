import axios from "axios";

const GetAllTypeLanguage = async () => {
  try {
    // let api = `https://restcountries.eu/rest/v2/all`;
    let api = `https://restcountries.com/v2/all`;
    const res = await axios.get(api);

    // for (let single in data.data) {} it return key

    const data = res.data;
    // console.log(data[0].languages);

    let arr = [];
    for (let ob of data) {
      for (let language of ob.languages) {
        // console.log(language)
        if (arr.includes(language.name) == false) {
          arr.push(language.name);
        }
      }
    }
    console.log("Total language: ", arr.length);
  } catch (error) {
    console.error(error);
    // console.log("somthing Error");
  }
};

GetAllTypeLanguage();

///////////////////
// console.log("10 most largest countries")
const lagestTop10ContryInArea = async () => {
    let api = `https://restcountries.com/v2/all`;
  
    try {
      const res = await axios.get(api);
  
      let data = res.data;
      let arr = []; // object
  
      console.log(typeof data); // object
  
      for (let i of data) {
        let tempObj = {};
        tempObj["country"] = i.name; // like { country: 'Afghanistan', area: 652230 }
        tempObj["area"] = i.area;
        arr.push(tempObj);
      }
  
      let sorted_array = arr.sort(function (x, y) {
        return y.area - x.area;
      });
  
      let top_10 = [];
      for (let i = 0; i < 10; i++) {
        top_10.push(sorted_array[i]);
      }
      console.log(top_10);
    } catch (error) {
      console.error(error);
    }
  };
  
  lagestTop10ContryInArea();

  /////////////////////////
  console.log("Most spoken 15 languages")
  async function mostSpoken_15Lang() {
    let api = `https://restcountries.com/v2/all`;
  
    const res = await axios.get(api);
  
    const data = res.data;
    let arr = [];
    for (let i of data) {
      for (let language of i.languages) {
        if (arr.includes(language.name) == false) {
          arr.push(language.name);
        }
      }
    }
  
    // console.log( arr)///all languages
    let arr2 = [];
    for (let l of arr) {
      let newObj = {};
      newObj["language"] = l;
  
      let counter = 0;
      for (let i of data) {
        for (let language of i.languages) {
          if (l == language.name) {
            counter++;
          }
        }
      }
      newObj["countries"] = counter;
      arr2.push(newObj);
    }
    let sorted_array = arr2.sort(function (x, y) {
      return y.countries - x.countries;
    });
    //top 15 array
    let top_15_countries = [];
    // let rev = sorted_array.reverse()
    for (let i = 0; i < 15; i++) {
      top_15_countries.push(sorted_array[i]);
    }
    console.log(top_15_countries);
  }
  mostSpoken_15Lang();

  /////////////////////////