const checkNumInputs = (selector) =>{
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item =>{
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\D/, ''); //запрещает вносить все кроме цифр
        });
    }); 
};

export default checkNumInputs;