import axios from 'axios'
const Card = (article) => {
  let nDiv = document.createElement('div')
  nDiv.classList.add('card')
  let hDiv = document.createElement('div')
  hDiv.classList.add('headline')
  hDiv.textContent = article.headline
  let aDiv = document.createElement('div')
  aDiv.classList.add('author')
  let iDiv = document.createElement('div')
  iDiv.classList.add('img-container')
  let nImg = document.createElement('img')
  nImg.src = article.authorPhoto 
  let nSpan = document.createElement('span')
  nSpan.textContent = article.authorName
  nDiv.append(hDiv)
  nDiv.append(aDiv)
  aDiv.append(iDiv)
  iDiv.append(nImg)
  aDiv.append(nSpan)
  return nDiv
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles').then(resp =>{
    for(let i = 0; i<Object.keys(resp.data.articles).length; i++){
      resp.data.articles[Object.keys(resp.data.articles)[i]].forEach(art =>{
        document.querySelector(selector).append(Card(art))
      })
    }
    console.log(resp)
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
