import checkNumInputs from './checkNumInputs';

const changeModalState = (state) =>{
    
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowhHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
        

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop){
        elem.forEach((item, i) =>{
            item.addEventListener(event, ()=>{
                switch(item.nodeName){    //nodeName -название строки каждого эл, если оно повдаете с сase
                    case 'SPAN':
                     state[prop] = i;
                     break;

                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach ((box, j) => { //перебираем каждый сheckbox
                                box.checked = false; 
                                if(i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                        
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
       
                }

                //блокирует "Далее" если не заполнены все данные
            
                if(Object.keys(state).length ==3){
                    document.querySelector('.popup_calc_button').removeAttribute('disabled');
                }
                if(Object.keys(state).length==5){
                    document.querySelector('.popup_calc_profile_button').removeAttribute('disabled');

                }
                
               
                console.log(state);
            });
        });

    }   

         

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowhHeight, 'heigth');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
   

};

export default changeModalState;