// console.log('3684e6479e9a4ac29fd01258fe97dc0e');
//maan - 3684e6479e9a4ac29fd01258fe97dc0e
//meshv - e217c1e1f57e46289989fd685a5f108b
//link = https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3684e6479e9a4ac29fd01258fe97dc0e
let api = 'e217c1e1f57e46289989fd685a5f108b';
let source = 'bbc-news'
let pgno = 1;
// let link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${pgno}&pagesize=10&apiKey=${api}`;
// let link = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
// console.log(link);
let title, content;
let spinner = document.getElementById('spinner');
let accordionExample = document.getElementById('accordionExample');
let token = `51fdb444c9b286bfcd1450513ed0eae0;`
let spin = `<div class="spinner-border text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;
window.addEventListener('load', () => {
    loaddata('general')
});

let load = 'sports';
let notes = '';
let i = 9;
let j = 18;
function categoryitem(id) {
    notes = "";
    console.log(id);
    spinner.style.display = "block";
    loaddata(id);
    load = id;
}


function loaddata(s) {
    let category = s;

    //start xhr
    let xhr = new XMLHttpRequest();

    //    let  category = c;
    link = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
    // link = `https://gnews.io/api/v4/top-headlines?token=51fdb444c9b286bfcd1450513ed0eae0`;
    console.log(link);
    xhr.open('GET', link, true);


    xhr.onreadystatechange = function () {
        // console.log("ready state" + this.readyState);

        if (this.readyState == 4) {
            spinner.style.display = "none";
        }

    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            // title = obj.articles[2].title;
            // content = obj.articles[2].content;

            //showing news
            let accordionExample = document.getElementById('accordionExample');
            let loop = obj.articles;
            // console.log(obj.articles.);
            //    console.log(obj.articles);

            //for loop
            for (let e = 0; e < loop.length; e++) {
                if (e > i) {
                    break;
                }
                let article = `
                <div class="col-auto mx-auto my-2">  
                  <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src=${loop[e].urlToImage ? loop[e].urlToImage : "https://s.w-x.co/in-earthshine%281%29.jpg"}  alt="image">
                      <div class="card-body">
                          <h5 class="card-title">${loop[e]['title'] ? loop[e]['title'] : ""}</h5>
                          <p class="card-text"> ${loop[e]['content'] ? loop[e]['content'].slice(0, 157) : ""}...</p>
                          <a href="${loop[e]['url']}" target="_blank">Read More</a>
                          <small class="text-muted ms-5 ps-4">${loop[e].publishedAt.slice(0, 10)}</small>
                      </div>
                  </div>    
                </div>`;
                // console.log(article);
                notes += article;
            }




            // loop.map(function (e) {
            //     let article = `
            //               <div class="col-auto mx-auto my-2">  
            //                 <div class="card" style="width: 18rem;">
            //                     <img src=${e.urlToImage?e.urlToImage:"https://s.w-x.co/in-earthshine%281%29.jpg"} class="card-img-top" alt="image">
            //                     <div class="card-body">
            //                         <h5 class="card-title">${e['title']?e['title']: ""}</h5>
            //                         <p class="card-text"> ${e['content']?e['content'].slice(0,157) :""}...</p>
            //                         <a href="${e['url']}" target="_blank">Read More</a>
            //                         <small class="text-muted ms-5 ps-4">${e.publishedAt.slice(0,10)}</small>
            //                     </div>
            //                 </div>    
            //               </div>`
            //         ;
            //     notes += article;
            //     number++;

            // });

            //end of for each loop



            // console.log(notes);
            accordionExample.innerHTML = notes;
            console.log('done');

        }
        else {
            //  document.getElementById('d').innerHTML = "Some error occured..";
            console.log("Some error occured..");
        }
    }

    xhr.send();

}


function loadmore(s) {
    let notes2 = '';
    let category = s;

    //start xhr
    let xhr = new XMLHttpRequest();

    //    let  category = c;
    link = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
    //     console.log(link);
    xhr.open('GET', link, true);



    xhr.onreadystatechange = function () {
        // console.log("ready state" + this.readyState);

        if (this.readyState == 4) {
            spinner.style.display = "none";
        }

    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            // title = obj.articles[2].title;
            // content = obj.articles[2].content;

            //showing news
            let accordionExample = document.getElementById('accordionExample');
            let loop = obj.articles;
            // console.log(obj.articles.);
            //    console.log(obj.articles);

            //for loop
            for (let e = 10; e < loop.length; e++) {
                if (e > j) {
                    break;
                }
                let article2 = `
                <div class="col-auto mx-auto my-2">  
                  <div class="card" style="width: 18rem;">
                      <img src=${loop[e].urlToImage ? loop[e].urlToImage : "https://s.w-x.co/in-earthshine%281%29.jpg"} class="card-img-top" alt="image">
                      <div class="card-body">
                          <h5 class="card-title">${loop[e]['title'] ? loop[e]['title'] : ""}</h5>
                          <p class="card-text"> ${loop[e]['content'] ? loop[e]['content'].slice(0, 157) : ""}...</p>
                          <a href="${loop[e]['url']}" target="_blank">Read More</a>
                          <small class="text-muted ms-5 ps-4">${loop[e].publishedAt.slice(0, 10)}</small>
                      </div>
                  </div>    
                </div>`;
                // console.log(article);
                notes2 += article2;

            }

            //for loop end


            // loop.forEach(function (e) {
            //     let article2 = `<div class="col-auto mx-auto my-2">  
            //     <div class="card" style="width: 18rem;">
            //         <img src=${e.urlToImage?e.urlToImage:"https://s.w-x.co/in-earthshine%281%29.jpg"} class="card-img-top" alt="image">
            //         <div class="card-body">
            //             <h5 class="card-title">${e['title']?e['title']: ""}</h5>
            //             <p class="card-text"> ${e['content']?e['content'].slice(0,196) :""}...</p>
            //             <a href="${e['url']}" target="_blank">Read More</a>
            //         </div>
            //     </div>    
            //   </div>`;
            //     notes2 += article2;
            //     number++;

            // });


            // console.log(notes);
            let f = notes.concat(notes2);
            accordionExample.innerHTML = f;

            console.log('done');
        }
        else {
            //  document.getElementById('d').innerHTML = "Some error occured..";
            console.log("Some error occured..");
        }
    }

    xhr.send();

}




window.addEventListener('scroll', () => {
    if (scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        console.log('i am at bottom');
        document.getElementById('endspinner').classList.add('spinner-border');
        console.log(load);
        i += 9;
        j += 9;
        loadmore(load);
    }
})


//for search bar
function searchnews(){
    let accordionExample = document.getElementById('accordionExample');
    accordionExample.innerHTML = '';
    spinner.style.display = "block";
    let m ;
    let searchtxt = document.getElementById("search").value;
    console.log(searchtxt);

let searchlink = `https://gnews.io/api/v4/search?q=${searchtxt}&token=51fdb444c9b286bfcd1450513ed0eae0`;
    console.log(searchtxt);

    if(!searchlink){
           accordionExample.innerHTML = "Sorry, your result is not found..." 
    }
    else{

    
    //start xhr
    let xhr = new XMLHttpRequest();

    //    let  category = c;
    // link = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
    // link = `https://gnews.io/api/v4/top-headlines?token=51fdb444c9b286bfcd1450513ed0eae0`;
    // console.log(link);
    xhr.open('GET', searchlink, true);


    xhr.onreadystatechange = function () {
        // console.log("ready state" + this.readyState);

        if (this.readyState == 4) {
            spinner.style.display = "none";
        }

    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
           

            //showing news
            let loop = obj.articles;
           
            loop.map(function (e) {
                let article = `
                          <div class="col-auto mx-auto my-2">  
                            <div class="card" style="width: 18rem;">
                                <img src=${e.image?e.image:"https://s.w-x.co/in-earthshine%281%29.jpg"} class="card-img-top" alt="image">
                                <div class="card-body">
                                    <h5 class="card-title">${e['title']?e['title']: ""}</h5>
                                    <p class="card-text"> ${e['content']?e['content'].slice(0,157) :""}...</p>
                                    <a href="${e['url']}" target="_blank">Read More</a>
                                    <small class="text-muted ms-5 ps-4">${e.publishedAt.slice(0,10)}</small>
                                </div>
                            </div>    
                          </div>`;
                m += article;
            });
            //end of for each loop

            accordionExample.innerHTML = m;

        }
        else {
            console.log("Some error occured..");
        }
    }

    xhr.send();
    }
}
