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
    const selected = document.querySelector("input[type='radio']:checked").value;
    return selected;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    selected_rate.textContent = getSelectedRate();
    rate_container.style.display = 'none';
    result_container.style.display = 'flex';
})