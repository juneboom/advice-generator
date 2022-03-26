const adviceURL = 'https://api.adviceslip.com/advice';
const cardText = document.querySelector('.card-text');

const printAdvice = async() => {
    let { slip } = await getData(adviceURL);
    cardText.innerHTML = `
    <h1>ADVICE #${slip.id}</h1>
    <p>"${slip.advice}"</p>
    `
};

const getData = async(url) => {
    let data = await fetch(url)
        .then((response) => {
            if (!response.ok)
                throw new Error(`Status Code: ${response.status}`);

            return response.json();
        })
        .catch((err) => {
            console.log('Something went wrong with fetch');
            console.log(err);
        });
    return data;
};

printAdvice();

const button = document.getElementById('button');
button.addEventListener("click", () => {
    console.log('On button press:');
    printAdvice();
});