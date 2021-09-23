const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();



const displayCountries = countries => {
    const countriesDiv = document.getElementById('countriesDiv');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        const button = document.createElement('button');
        button.innerText = 'Details';
        button.setAttribute('onclick', `loadCountryName("${country.name}")`);
        div.appendChild(button);
        countriesDiv.appendChild(div);
    });
}
const loadCountryName = country => {
    const url = `https://restcountries.com/v2/name/${country}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `<h5>${country.name}</h5>
    <h5>${country.capital}</h5>`;
    countryDiv.appendChild(countryDiv);
}
