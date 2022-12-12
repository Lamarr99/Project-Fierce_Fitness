export const exerciseOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d713deaeemsh8d1378fe301ed93p1c7b60jsn465c1024acfc' ,

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