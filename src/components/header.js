const Header = (title, date, temp) => {
  let nDiv = document.createElement('div')
  nDiv.classList.add('header')
  let nSpan = document.createElement('span')
  nSpan.classList.add('date')
  nSpan.textContent = date
  let tit = document.createElement('h1')
  tit.textContent = title
  let nSpan1 = document.createElement('span')
  nSpan1.classList.add('temp')
  nSpan1.textContent = temp
  nDiv.append(nSpan, tit, nSpan1)
  return nDiv
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  document.querySelector(selector).append(Header('This is a title', '1/1/1111', '69'))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
