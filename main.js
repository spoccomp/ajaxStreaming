let promise = axios.get("https://www.redbullshopus.com/products.json");

promise.then(function (res) {
    let bing = res.data.products;
    console.log(bing);
    //    let p = document.createElement("p");

    //    p.innerHTML = res.data.products[0];
    bing.forEach(element => {
        // console.log(element);
        // console.log(element.body_html)
        //console.log(element.images[0].src)//array
        // console.log(element.images[1])//array
        // console.log(element.options[0])//array
        // console.log(element.options[1])//array
        // console.log(element.published_type)
        // console.log(element.published_at)
        // console.log(element.tags[0])//array
        // console.log(element.tags[1])//array
        // console.log(element.title)
        // console.log(element.variants)
        // console.log(element.vendor)
        let h1Title = document.createElement("h1");
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        let p2V =document.createElement("p");
        let p3 = document.createElement("p");
        let p3V =document.createElement("p");
        let pType=document.createElement("p");
        let image = document.createElement("img");
        
        h1Title.style.backgroundColor = "red";
        h1Title.style.color ="white";
        h1Title.innerHTML = element.title;
        document.body.appendChild(h1Title);
        p.innerHTML = element.body_html;
        document.body.appendChild(p);
        image.style.width ="300px";
        image.src = element.images[0].src;
        document.body.appendChild(image);
        p2.style.color = "red";
        p2.innerHTML = element.options[0].name;
        document.body.appendChild(p2);
        p2V.innerHTML = element.options[0].values;
        document.body.appendChild(p2V);
        p3.style.color = "red";
        p3.innerHTML = element.options[1].name;
        document.body.appendChild(p3);
        p3V.innerHTML = element.options[1].values;
        document.body.appendChild(p3V);
        pType.style.color ="purple";
        pType.innerHTML = element.product_type;
        document.body.appendChild(pType);
        
        
        // p.innerHTML = element.title;
        // document.body.appendChild(p);
        // p.innerHTML = element.variants;
        // document.body.appendChild(p);
        // p.innerHTML = element.vendor;
        // document.body.appendChild(p);
    });




}).catch(function (response) {
    console.error(response);
})