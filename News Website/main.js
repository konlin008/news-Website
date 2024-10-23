apiKey = "5392a3988de04e7eb76be2820d0f5cf3";
apiUrl = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${apiUrl}${query}&apiKey=${apiKey}`);
  const data = await res.json();

  bindDAta(data.articles.slice(0, 30));
}
function bindDAta(articles) {
  var newsSection = document.getElementById("news-Section");
  var newsSectionTemp = document.getElementById("news-section-temp");
  newsSection.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsSectionTemp.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    newsSection.appendChild(cardClone);
  });
}
function fillDataInCard(cardClone, article) {
  newsImage = cardClone.querySelector("#newsImg");
  newsTitle = cardClone.querySelector(".newsTitle");
  newsDesc = cardClone.querySelector(".newsDescription");
  newsData = cardClone.querySelector(".newsData");
  newsSource = cardClone.querySelector(".source");
  newsDate = cardClone.querySelector(".date");

  const date = new Date(article.publishedAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  newsImage.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;
  newsSource.innerHTML = article.source.name;
  newsDate.innerHTML = date;

  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

let crntSeleNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  crntSeleNav?.classList.remove("active");
  crntSeleNav = navItem;
  crntSeleNav.classList.add("active");
}

const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
  const searchInput = document.querySelector("#news_input").value;
  fetchNews(searchInput);
});
