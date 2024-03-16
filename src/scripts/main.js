document.addEventListener('DOMContentLoaded', function (){

    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();
        
        let multiplierA = document.getElementById('multiplier-A').value;
        multiplierA = parseInt(multiplierA);

        let multiplierB = document.getElementById('multiplier-B').value;
        multiplierB = parseInt(multiplierB);

        const result = multiplierA * multiplierB;

        document.getElementById('multiplication-result').innerText = result;
        document.querySelector('.result').style.display = 'block';
    })
})