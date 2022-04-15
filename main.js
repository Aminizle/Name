document.querySelector('#btn').addEventListener('click', getName)

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getName() {
    let name = document.querySelector('.input').value
    let info = {};

    const getGeneral = await getData(`https://api.genderize.io?name=${name}`)
    info.name = name;
    info.gender = getGeneral.gender;
    info.count = getGeneral.count;

    document.querySelector('.name').innerText = `Name : ${name}`
    document.querySelector('.gender').innerText = `Gender : ${info.gender}`
    // document.querySelector('.count').innerText = `Sample size : ${info.count} people named ${info.name} found`


    const getNationalize = await getData(`https://api.nationalize.io/?name=${name}`)
    info.country1 = getNationalize.country[0].country_id;
    info.country2 = getNationalize.country[1].country_id;
    info.country3 = getNationalize.country[2].country_id;

    document.querySelector('.Country1').innerText = `Most likely country of origin : ${info.country1}`
    document.querySelector('.Country2').innerText = `2nd most likely country of origin : ${info.country2}`
    document.querySelector('.Country3').innerText = `3rd most likely country of origin : ${info.country3}`


    const getAge = await getData(`https://api.agify.io/?name=${name}`)
    info.age = getAge.age;
    document.querySelector('.age').innerText = `Age : ${info.age}`


    // document.querySelector('.summary').innerText = `Summary :
    //         Out of ${info.count} people named ${info.name}, ${info.probability * 100}% were ${info.gender}.
    //         Among the ${info.count} we found the most common age to be ${info.age}.`


}