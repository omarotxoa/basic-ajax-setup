document.getElementById('button').addEventListener('click', loadData);
document.getElementById('json-btn').addEventListener('click', loadJSONData);
const textOutput = document.querySelector('.text-output');
const jsonOutput = document.querySelector('.json-output');

function loadData() {
    
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'some-data.txt', true);

    // HTTP Status of 200 is "OK"
    xhr.onload = function() {
        if(this.status === 200) {
            textOutput.innerHTML = `<p>${this.responseText}</p>`;
        }
    }

    xhr.send();
}

function loadJSONData() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const user = JSON.parse(this.responseText);
            jsonOutput.innerHTML = `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Profession: ${user.profession}</li>
                </ul>`;
        }
    }

    xhr.send();
}