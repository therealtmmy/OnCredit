// Documentation
// Fetch() method: It is defined on the window object, which we can use to perform request.
// This method will return promise.
// Promise will either be fullfilled or rejected.

// To be fullfilled which means to display, you use return to reject, you use catch.

// we use return data.json() to return an api to objects

fetch('https://fakestoreapi.com/products').then(data=>{
    // console.log(data)
    return data.json(); 
}).then(completedata =>{
    console.log(completedata);
    let data1 = "";
    completedata.forEach((values)=>{
        data1 +=`  <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" alt="img">
        <p>${values.description}</p>
        <h3 class="category">${values.category}</h3>
        <h3 class="price">${values.price}</h3>
    </div>`
    });
    
    document.querySelector(".cards").innerHTML = data1
})