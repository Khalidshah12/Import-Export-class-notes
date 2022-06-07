
// function getData() {
//     let url = `https://fakestoreapi.com/products/category/electronics`
//     fetch(url).then(function (res) {
//         return res.json()
//     }).then(function (res) {
//         console.log(res)
//         display(res)
//     }).catch(function (err) {
//         console.log(err)
//     })
// }
// getData()

// function display(data){
//     data.forEach(function(elem){
//         const cont = document.querySelector('#cont');

//         const box = document.createElement('div');
//         box.setAttribute("class","box")

//         const img = document.createElement('img');
//         img.src = elem.image

//         const title = document.createElement('h3');
//         title.innerText = elem.title;

//         box.append(img,title)

//         cont.append(box)
//     })
// }

// // category: "electronics"
// // description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"
// // id: 9
// // image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
// // price: 64
// // rating: {rate: 3.3, count: 203}
// // title: