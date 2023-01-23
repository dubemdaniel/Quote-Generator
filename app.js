const btn = document.querySelector('.btn')

btn.addEventListener('click', button)



function button(e){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
    

    xhr.onload = function(){
        
        if(this.status === 200){
            // const res = JSON.parse(this.responseText)

            const obj = JSON.parse(this.responseText);

            // console.log(obj);

            let output = ''

            let joke = document.querySelector('.joke')

            joke.textContent = ''

            output = obj.value

            joke.textContent += output
        }
    }
    xhr.send()

    e.preventDefault()
}