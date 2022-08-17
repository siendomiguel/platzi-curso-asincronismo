import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const postData = (urlApi, data) =>{
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "PC Build",
  "price": 5984,
  "description": "A description on product",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
 .then(response => response.json())
 .then(data => console.log(data))
