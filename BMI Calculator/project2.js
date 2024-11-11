const form = document.querySelector('form');

// This usecase will give you empty
// const weight = parseInt(document.querySelector("#weight").value);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // const height = Number(document.querySelector("#height").value);
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            var resulttext = "Under Weight"
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            var resulttext = "Normal Weight"
        }
        if (bmi > 24.9) {
            var resulttext = "Overweight"
        }
        results.innerHTML = `<span>${bmi}</span>
                             <br>
                             <span>${resulttext}</span>`
    }
})