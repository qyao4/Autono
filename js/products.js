
function showDetail(productNum){
    document.getElementById("productDetail").style.display = "none";
    let details = [
            ["images/pic02.png",
             "Autono car of our poduct",
             "HUMAN-CENTERED DESIGN",
             "Welcome to a new era of transportation, where your journey is as effortless as a ride in our autonomous vehicles - safe, efficient, and perfectly designed for your comfort."
            ],
            ["images/pic03.png",
             "Digital products about our Autono",
             "ADVANCED CYBER SECURITY",
             "Experience unrivaled protection with our autonomous cars, embedded with advanced cyber security, safeguarding your journey every step of the way."
            ]
        ];
    let productImg = document.querySelector("section#productDetail img");
    let productH5 = document.querySelector("section#productDetail h3");
    let productP = document.querySelector("section#productDetail p");
    productImg.src = details[productNum][0];
    productImg.alt = details[productNum][1];
    productH5.innerHTML = details[productNum][2];
    productP.innerHTML = details[productNum][3];

    void document.getElementById("productDetail").offsetWidth;
    document.getElementById("productDetail").style.display = "block";
}

function load(){
    
    showDetail(0);

    let productList = ["product01","product02"];
    for(let i = 0;i < productList.length;i++){
        document.getElementById(productList[i]).addEventListener("click", () => showDetail(i));
    }
}

document.addEventListener("DOMContentLoaded",load);