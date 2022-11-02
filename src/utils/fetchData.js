export const exerciseOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '67f556bd40msh1e17b00df35999fp12cf6cjsndbe896fe13d6' ,

      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com/'  
    }
  };

export const fetchData = async (url, options) => {
const res = await fetch (url, options);
const data = await res.json();

return data ;

 }