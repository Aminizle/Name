document.querySelector('#btn').addEventListener('click', GetName)


async function GetName() {
    let name = document.querySelector('.input').value

    fetch(`https://api.genderize.io?name=${name}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)

        document.querySelector('.name').innerText = `Name : ${name}.`
        document.querySelector('.gender').innerText = `Gender : ${data.gender}.`
        document.querySelector('.count').innerText = `Sample size : ${data.count} people named ${data.name} found.`
      })

      
    //      todo 
    //      get nationalize working 
      
        fetch(`https://api.nationalize.io/?name=${name}`)
        .then( res => res.json())
        .then( data2 => {
            console.log(data2)
            
            document.querySelector('.country1').innerText = `country1 : ${data2.country}.`                    
            document.querySelector('.country2').innerText = `country2 : ${country[2].country_id}.`           
            document.querySelector('.country3').innerText = `country3 : ${country_id[2]}.`           


})
        fetch(`https://api.agify.io/?name=${name}`)
        .then( res => res.json())
        .then( data3 => {
            console.log(data3)
    
            document.querySelector('.age').innerText = `Age : ${data3.age}.`           
                        
})   

 document.querySelector('.summary').innerText = `Summary :
            Out of ${data.count} people named ${data.name}, ${data.probability*100}% were ${data.gender}.
            Among the ${data.count} we found the most common age to be ${data3.age}.`


    .catch(err => {
        console.log(`error ${err}`)
    });
        
}