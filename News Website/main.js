apiKey = "5392a3988de04e7eb76be2820d0f5cf3";
apiUrl = "https://newsapi.org/v2/everything?q=";
newsImage = document.querySelector(".newsImg");
newsTitle = document.querySelector(".newsTitle");
newsDesc = document.querySelector(".newsDescription");
newsData = document.querySelector(".newsData");

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${apiUrl}${query}&apiKey=${apiKey}`);
  const data = await res.json();
  bindDAta(data.articles);
}
function bindDAta(articles) {
  var newSection = document.getElementById("news-Section");
  var newsSectionTemp = document.getElementById("news-section-temp");
  newSection.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsSectionTemp.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    newSection.appendChild(cardClone);
  });
}   
function fillDataInCard(articles) {
  newsImage.src = articles.urlToImage;
}
