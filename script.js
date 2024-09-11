const labels = document.querySelectorAll(".labels");
const radios = document.querySelectorAll("input[type='radio']");
const form = document.querySelector("form");
const result_container = document.querySelector(".result_container");
const rate_container = document.querySelector(".rate_container");
const selected_rate = document.querySelector(".selected_rate");

const remove_selection = ()=>{
    labels.forEach((label)=>{
        label.classList.remove('active');
    });
}

radios.forEach((radio)=>{
    radio.addEventListener('change',(e)=>{
        remove_selection();
        e.target.parentElement.classList.add("active");
    })
})

const getSelectedRate = ()=>{
    const input = document.querySelector("input[type='radio']:checked");
    const selected = input ? input.value : false;
    return selected;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value_selected = getSelectedRate();
    if(value_selected){
        selected_rate.textContent = getSelectedRate();
        rate_container.style.display = 'none';
        result_container.style.display = 'flex';
    }else{
        alert("Select a rate from 1 to 5")
    }
})