let test = document.getElementById('test');
let result = '';

let myHttp = new XMLHttpRequest();
myHttp.onreadystatechange = () => {
    if(myHttp.readyState === 4 && myHttp.status === 200) {
        let data = JSON.parse(myHttp.responseText);
        data = data.articles;
        data.forEach(news => {
            result += `
            <div class='new'>
                <div class='title-new'>
                    <h3>${news.title}</h3>
                </div>

            <div class="content-new">

                    <div class="image">
                        <img src='${news.urlToImage}' >
                    </div>
                    <div class='new-details'>
                        <a href ='${news.url}'>details</a>
                        <span>${news.publishedAt}</span>
                    </div>
                    <p>${news.description}</p>
                </div>
            </div>
            `
           
        });
        console.log(result)
            test.innerHTML = result;
    }

}

myHttp.open('GET','https://newsapi.org/v2/everything?q=tesla&from=2022-04-09&sortBy=publishedAt&apiKey=a7905db5102c46f2870ea52a96ebeefb');
myHttp.send();


let message = ['News World'];
let speed = 100;
let textTyping = 0;

let typeWriter = () => {
    document.getElementById('title').innerHTML = message[0].substring(0,textTyping) + '<span>|</span>';
    if( textTyping++ != message[0].length) setTimeout(typeWriter,speed)
}
window.addEventListener('load',typeWriter)