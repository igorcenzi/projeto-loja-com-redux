import { GET_PRODUCTS } from "./actionTypes"

const initialState = [
  {
    name: 'Summer Eletrohits by Dj Roger',
    price: 27.90,
    image: 'https://i.ytimg.com/vi/R0BrkAsjfIQ/maxresdefault.jpg'
  },
  {
    name: 'Summer Eletrohits 2',
    price: 24.90,
    image: 'https://img.youtube.com/vi/gb64gu1_i_A/0.jpg?resize=153%2C153'
  },
  {
    name: 'Summer Eletrohits 3',
    price: 24.90,
    image: 'https://i.discogs.com/0zJ1OQc7kuN4aKLM0EuJ00pYzVKULA6Li9k5Uc97c9w/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjY4/OTk4LTE2MDYzMTA5/NDMtNDEwOC5qcGVn.jpeg'
  },
  {
    name: 'Summer Eletrohits 4 Musicas TOP',
    price: 54.90,
    image: 'https://i.ytimg.com/vi/Y-l6UsFX6CA/maxresdefault.jpg'
  },
  {
    name: 'Summer Eletrohits 5',
    price: 17.90,
    image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/0/5/1/3/898541591128507.jpg'
  },
  {
    name: 'Summer Eletrohits 6',
    price: 28.90,
    image: 'https://i.discogs.com/3OvFw1Jp342RnSymIgxSxJfVKsVcVfzRcAybRe8OXAg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTk1/NzE2MzUtMTQ4Mjk1/MzA1OS0yMDQ3LnBu/Zw.jpeg'
  },
  {
    name: 'Summer Eletrohits 7 AS MELHORES',
    price: 99.90,
    image: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/1543106/1000275381.jpg?v=637004177032670000'
  },
  {
    name: 'Summer Eletrohits 8 AS SEGUNDAS MELHORES',
    price: 99.80,
    image: 'https://3.bp.blogspot.com/-_DaO0hbU6v4/UYCQeujIBuI/AAAAAAAAAM8/ryxEGt-MH_c/s1600/unnamed.png'
  },
]

const productsReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_PRODUCTS:
      return state
    default:
      return state
  }
}

export default productsReducer