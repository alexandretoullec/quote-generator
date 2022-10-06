const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes"


const getQuote = (e) => {
    e.preventDefault();

    if(number.value.length == 0){
        return alert("you have to enter a number ")
    }else{
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            // console.log(JSON.stringify(data));
            data = shuffle(data)

            let output = "";

            for (let i = 0 ; i< data.length ; i++) {
                if(i == number.value) {break}
                
                output +=  `
                    <li>Quotes : ${data[i].text}</li>
                    <li>Author : ${data[i].author}</li>
                    <hr>
                    `;

                    document.querySelector(".quotes").innerHTML = output;
            }
        })

    }
}

btn.addEventListener("click", getQuote)

// Function to shuffle the quotes

function shuffle () {
    let CI = quotes.length, tempValue, randomIndex;

    // While elements exist in the array

    while (CI > 0) {
        randomIndex = Math.floor(Math.random()* CI);
        //decrease th CI by 1

        CI--;

        //swap the last element with CI
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex]
        quotes[randomIndex] = tempValue;

    }
    return quotes;

}