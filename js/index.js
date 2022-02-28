const searchClick = () => {
    const searchBox = document.getElementById('search-box').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
}
