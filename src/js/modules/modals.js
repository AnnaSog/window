const modals = () => {
    
    function bindModals (triggerSelector, modalSelector, closeSelector, closeClickOverlay=true){
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();
        
        trigger.forEach (item =>{
            item.addEventListener('click', (e) =>{
                if(e.target){
                    e.preventDefault();
                }

                windows.forEach(item =>{
                    item.style.display = 'none';
                }); //при нажатии на триггер все остальные мод окна закрываются
    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; //отмена скроллинга при откр мод окна
                // document.body.classList.add('modal-open');
                // если к проекту подключены css проекты, такие как animate.min и bootstrap.css, то можно поработать со стилями
                document.body.style.marginRight = `${scroll}px`; //добавиться отступ 
                
    
            });
        });
        

        close.addEventListener('click', () =>{

            windows.forEach(item =>{
                item.style.display = 'none';
            }); //при нажатии на Х все остальные мод окна закрываются
            
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`; //при закр мод окна исчезнет отступ
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay){ //closeClickOverlay при наж на подложку она не закр
                windows.forEach(item =>{
                    item.style.display = 'none';
                }); //при нажатии на подложку все остальные мод окна закрываются

                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`; //при закр мод окна исчезнет отступ
            }
        });
        
    }

    function showModalbyTime(selector, time){
        setTimeout(()=>{
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    //функция, ктр будет подсчитывать расстояние скролла в px
    function calcScroll() {
        let div = document.createElement('div'); //будет производиь расчеты

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden'; //скроет div

        document.body.appendChild(div); //помещаем на стр

        let scrollWidth = div.offsetWidth - div.clientWidth; 
        //полная ширина скролла -  контент скролла без самого скролла = сам скролл

        div.remove(); //как вычислили удаляем div

        return scrollWidth; //возвращаем полученное значение 

    }


 
    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');  
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalbyTime('.popup', 60000);
};

export default modals;