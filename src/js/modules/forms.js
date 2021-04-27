import checkNumInputs from './checkNumInputs';

const forms = (state) =>{
    
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    
    checkNumInputs('input[name="user_phone"]');    
    

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с вами скоро свяжемся',
        failure: 'Что-то пошло не так...'
    };

    //переменная с функцией, которая будет отвечать за отправку данных на сервер
    const postData = async(url, data) =>{
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    //переменная с функцией по очистке input
    const clearInput = () =>{
        inputs.forEach(item =>{
            item.value = '';
        });
    };

    form.forEach(item =>{
        item.addEventListener('submit', (e) =>{
            e.preventDefault(); //отключaем перезагрузку

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage); //помещаем в конец формы


            const formData = new FormData(item);
            //FormData это объект, ктр соберет все содержание в инпутах и поместить в перемен formData
            if(item.getAttribute('data-calc')==='end'){
                for(let key in state){ //тогда берем данные из state перебираем и 
                    formData.append(key, state[key]);//отправляем в formData с помощью append
                }
            }

            //отправляем переменую postData на сервер 
            postData('assets/server.php', formData)
            .then(res =>{
                console.log(res);
                statusMessage.textContent= message.success;
            })
            .catch ( ()=>{
                statusMessage.textContent= message.failure;
            })
            .finally ( ()=>{
                clearInput();
                setTimeout ( ()=>{
                    statusMessage.remove();
                },5000);
            });


        });
    });


};
export default forms;