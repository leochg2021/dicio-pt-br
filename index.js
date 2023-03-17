let url='https://dicio-api-ten.vercel.app/v2/';

let inputtxt = document.querySelector('#container_inputtxt');
let btntxt = document.querySelector('#button_bnt');
let resultado = document.querySelector('#container_resul');

btntxt.addEventListener('click', () =>{
    let palavra = inputtxt.value;
    if (palavra === '') {
        resultado.innerHTML = `<p id="container_significado">Escreva alguma palavra</p>`
        }else{
            fetch(`${url}${palavra}`)
            .then((resposta) => resposta.json())
            .then((data) => {
            console.log(data)
            resultado.innerHTML = 
                `<h3 id="container_palavra">${palavra}</h3>
                <p id="container_significado"><span>1º</span>${data[0].meanings[0]}</p>
                <p id="container_significado"><span>2º</span>${data[0].meanings[1]}</p>`
            }
        ).catch(() => {
            resultado.innerHTML = `<p id="container_significado"><span>Não</span> foi possível encontrar essa palavra</p>`
        })
    }

})


