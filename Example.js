document.querySelector('#btn').addEventListener('click', GetName)


async function GetName() {
    let name = document.querySelector('.input').value
    let info = {};

  const getGeneral = await fetch(`https://api.genderize.io?name=${name}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
        info.name = name;
        info.gender = data.gender;
        info.count = data.count;

        document.querySelector('.name').innerText = `Name : ${name}.`
        document.querySelector('.gender').innerText = `Gender : ${data.gender}.`
        document.querySelector('.count').innerText = `Sample size : ${data.count} people named ${data.name} found.`
      
    }).catch(err => {
        console.log(`error ${err}`)
    });
      
  const getNationalize= await fetch(`https://api.nationalize.io/?name=${name}`)
        .then( res => res.json())
        .then( data2 => {
            console.log(data2)
            info.country1 = data2.country[0].country_id;
            info.country2 = data2.country[1].country_id;
            info.country3 = data2.country[2].country_id;

            document.querySelector('.Country1').innerText = `Most likely country of origin : ${data2.country[0].country_id}.`                    
            document.querySelector('.Country2').innerText = `Second most likely country of origin : ${data2.country[1].country_id}.`           
            document.querySelector('.Country3').innerText = `Third most likely country of origin : ${data2.country[2].country_id}.`           


}).catch(err => {
    console.log(`error ${err}`)
});
     const getAge = await fetch(`https://api.agify.io/?name=${name}`)
        .then( res => res.json())
        .then( data3 => {
            console.log(data3)
            info.age = data3.age;
            document.querySelector('.age').innerText = `Age : ${data3.age}.`    
                   
                        
}).catch(err => {
                console.log(`error ${err}`)
            });  

        document.querySelector('.summary').innerText = `Summary :
            Out of ${info.count} people named ${info.name}, ${info.probability*100}% were ${info.gender}.
            Among the ${info.count} we found the most common age to be ${info.age}.`


    
           
}