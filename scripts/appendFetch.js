
async function getData(url) {
    let res = await fetch(url)
    let data = await res.json()
    return data
}

function display(data , cont){
    data.forEach(function(elem){

        const box = document.createElement('div');
        box.setAttribute("class","box")

        const img = document.createElement('img');
        img.src = elem.image

        const title = document.createElement('h3');
        title.innerText = elem.title;

        box.append(img,title)

        cont.append(box)
    })
}

export {getData, display}