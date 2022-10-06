const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");



const getQuote = (e) => {
    e.preventDefault();
    if(number.value.length == 0){
        return alert("you have to enter a number ")
    }else{
        const https = new XMLHttpRequest();

        https.open("GET" , "https://type.fit/api/quotes", true)

        https.onLoad = (()=> {
            if (this.status === 200){
                console.log(this.responseText);
                const response = shuffle(JSON.parse(this.responseText)) 
                
                let output = "";

                // response.forEach(quote => {
                //     output +=  `
                //         <li>Quotes : ${quote.text}</li>
                //         <li>Author : ${quote.author}</li>
                //         <hr>
                //     `;
                // })

                for (let i = 0 ; i< response.length ; i++) {
                    if(i == number.value) {
                        break
                    }
                    
                    output +=  `
                        <li>Quotes : ${response[i].text}</li>
                        <li>Author : ${response[i].author}</li>
                        <hr>
                        `;
                }

                document.querySelector(".quotes").innerHTML = output;

            }
        })

        https.send();

        
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

