const form =  document.querySelector('form');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results =  document.querySelector('#results');
        results.style.padding = "4px";


    if(height === '' || height < 0 || isNaN(height)){
        results.appendChild(document.createTextNode("Provide a Valid height"));
        // results.innerHTML = `Provide a Valid height in integer`
        results.style.color = "red";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Provide a valid Weight`
        results.style.color = "red";
    }
    else{
        const BMI_Index = BmiCalculator(height,weight)
        results.innerHTML = BMI_Index;
        results.style.color = "blue";

        const overweight = document.querySelector('#overweight');
        const normal = document.querySelector('#normal');
        const underweight = document.querySelector('#underweight');

        if(BMI_Index < 18.6){
            underweight.style.width = "max-content";
            underweight.style.border= "2px solid red";
            underweight.style.borderRadius = "4px";
            underweight.style.padding ="4px";
            underweight.style.color ="red";
        } else if(BMI_Index > 18.6 && BMI_Index < 24.9){
            normal.style.width = "max-content";
            normal.style.border= "2px solid green";
            normal.style.borderRadius = "4px";
            normal.style.padding ="4px";
            normal.style.color ="green";
        }
        else{
            overweight.style.width = "max-content";
            overweight.style.border= "2px solid red";
            overweight.style.borderRadius = "4px";
            overweight.style.padding ="4px";
            overweight.style.color ="red";
        }
    }
})

function BmiCalculator(height, weight){
    if(height == null || weight == null) return;
    let result = (weight / ((height*height)/10000)).toFixed(2);   // upto 2 decimal places
    return result;
}
