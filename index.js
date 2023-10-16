fetch('./data.json')
.then(res => res.json())
.then(data => {
    let li = data.map((elem, i) => `<li class="cat-${i + 1}"><span class="head text-${i + 1}"><img src="${elem.icon}" alt="${elem.category} symbol">${elem.category}</span><span><span class="bold"> ${elem.score}</span> / 100</span></li>`)
    document.getElementById('info').innerHTML = li.join('')
})

// YOU MIGHT ARGUE THAT I COULD HAVE JUST INCLUDED THIS IN THE HTML FILE
// BUT I PREFER TO KEEP JS AND HTML SEPARATED