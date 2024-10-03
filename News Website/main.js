apiKey = "5392a3988de04e7eb76be2820d0f5cf3";
apiUrl = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${apiUrl}${query}&apiKey=${apiKey}`);
  const data = await res.json();
  console.log(data);
}
