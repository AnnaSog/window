import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () =>{
    "use strict";

    let modalState ={};
    let deadline = '2021-11-18 00:00';
    
    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active'); //ТЗ 5
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); //ТЗ 7
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img>img', 'do_image_more', 'inline-block');
    forms(modalState); //ТЗ 3
    timer('.container1',  deadline);
    images(); //ТЗ 9
    
});
