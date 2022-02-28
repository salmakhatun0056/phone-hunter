const main = document.getElementById('main')

const searchClick = () => {
    main.innerHTML = ''
    const searchBox = document.getElementById('search-box').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data))

}
const showPhoneDetails = (phones) => {
    // console.log(phones)
    for (const phone of phones) {
        console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        div.classList.add('mt-5')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">${phone.phone_name}</h5>
               <p class="card-text">${phone.brand}</p>
               <button onclick="phoneDetail('${phone.slug}')" href="#" class="btn btn-primary">See Detail </button>
            </div>
        </div>
        `
        main.appendChild(div)
    }
}
const phoneDetail = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data.data))
}

const setDetail = (info) => {
    console.log(info)
    const div = document.createElement('div')
    console.log(div)
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${info.name}</h5>
           <p class="card-text">${info.brand}</p>
        </div>
    </div>
    `

    main.appendChild(div)
}
