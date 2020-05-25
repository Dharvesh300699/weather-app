const input = document.querySelector('input');
const weatherForm = document.getElementById('get-weather');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

//Event listeners
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.innerText = 'Loading...';
    messageTwo.innerText = '';
    address = input.value;
    fetch(`/weather?address=${address}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                messageOne.innerText = data.error;
            } else {
                messageOne.innerText = data.location;
                messageTwo.innerText = data.forecast;
            }
        })
})