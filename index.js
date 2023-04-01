fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=89346e6112f443d988bb1dc03f228f23").then(function(response){
    return response.json(); //return a promise
}).then(function(data){
    console.log(data)
    displayNews(data);
    return data; //returns a promise
})

function createCard(article){
    var card= document.createElement("div");
    card.classList.add("card")
    var cardImage= document.createElement("div")
    cardImage.classList.add("card-image")

    var image= document.createElement("img")
    image.src = article.urlToImage;

    var cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    var title =document.createElement("span");
    title.classList.add("card-title")
    title.textContent = article.title
    
    var description= document.createElement("p")
    description.textContent = article.description

    var cardAction = document.createElement("div")
    cardAction.classList.add("card-action")

    var link = document.createElement("a")
    link.textContent = "Read More...";
    link.href = article.url

    cardAction.appendChild(link)
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    cardImage.appendChild(image);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    card.appendChild(cardAction);

    document.querySelector("#news").appendChild(card);
}

function displayNews(data){
    for(var i=0;i < data.articles.length; i++){
        createCard(data.articles[i]);
    }
} 