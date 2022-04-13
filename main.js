document.querySelector('#btn').addEventListener('click', GetName)

function GetName() {
    let name = document.querySelector('.input').value

    fetch(`https://api.genderize.io?name=${name}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)

        document.querySelector('.name').innerText = `Name : ${name}.`
        document.querySelector('.gender').innerText = `Gender : ${data.gender}.`
        document.querySelector('.probability').innerText = `Probability : ${data.probability*100}%.`
        document.querySelector('.count').innerText = `Sample size : ${data.count} people named ${data.name} found.`
        document.querySelector('.summary').innerText = `Based on a sample size of ${data.count} people named ${data.name}, we have calculated that the probability of ${data.name} being a ${data.gender} is ${data.probability*100}%.`

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}