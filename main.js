document.querySelector('#btn').addEventListener('click', GetName)
document.querySelector('#btn').addEventListener('click', GetAge)

function GetName() {
    let name = document.querySelector('.input').value

    fetch(`https://api.genderize.io?name=${name}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)

        document.querySelector('.name').innerText = `Name : ${name}.`
        document.querySelector('.gender').innerText = `Gender : ${data.gender}.`
        // document.querySelector('.probability').innerText = `Probability : ${data.probability*100}%.`
        document.querySelector('.count').innerText = `Sample size : ${data.count} people named ${data.name} found.`
        // document.querySelector('.summary').innerText = `Summary :
        // Based on a sample size of ${data.count} people named ${data.name}, we have calculated that the probability of ${data.name} being a ${data.gender} is ${data.probability*100}%.`

        fetch(`https://api.agify.io/?name=${name}`)
        .then( res => res.json())
        .then( data1 => {
            console.log(data1)
    
            document.querySelector('.age').innerText = `Age : ${data1.age}.`           
            
            document.querySelector('.summary').innerText = `Summary :
            Out of ${data.count} people named ${data.name}, ${data.probability*100}% were ${data.gender}.
            Among the ${data.count} we found the most common age to be ${data1.age}.` 
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    // function GetAge() {
    //     let name = document.querySelector('.input').value
    
    //     fetch(`https://api.agify.io/?name=${name}`)
    //     .then( res => res.json())
    //     .then( data => {
    //         console.log(data)
    
    //         document.querySelector('.age').innerText = `Age : ${data.age}.`           
    //         document.querySelector('.probability').innerText = `Probability : ${data.probability*100}%.`
    //         document.querySelector('.count').innerText = `Sample size : ${data.count} people named ${data.name} found.`
    //         document.querySelector('.summary').innerText = `Summary :
    //         Based on a sample size of ${data.count} people named ${data.name}, we have calculated that the probability of ${data.name} being ${data.age} years of age is ${data.probability*100}%.`
    
    //     })
    //     .catch(err => {
    //         console.log(`error ${err}`)
    //     });

})
}