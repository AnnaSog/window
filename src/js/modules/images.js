const images = () => {
    const imgPopup = document.createElement('div'), //создание нового мод окна, подложка всех картнок
        workSection = document.querySelector('.works'), //получение доступа к родителю всех картинкам
        bigImage = document.createElement('img'); //создание тега изображения, сама картинка


    imgPopup.classList.add('popupImg');
    workSection.appendChild(imgPopup); //помещаем новый блок в родителя


    imgPopup.style.justifyContent = 'center'; //выравнивает по горизонтали
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    
    

    imgPopup.appendChild(bigImage); //помещаем в новый  div изображение 
    

    workSection.addEventListener('click', (e) => {    
        e.preventDefault(); //отменяем стандартное поведение(не открывалась ссылка на отд стр при клике на img)

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');//обр к родителя и получаем его атрибут
            bigImage.setAttribute('src', path); //у тега img создается атрибут src и получает атрибут родителя
            document.body.style.overflow = 'hidden'; //отмена скроллинга при откр мод окна
            bigImage.style.cssText = 'max-width:100%;max-height:100%;object-fit:contain;';
            //растягивается изображение при увеление или уменьшения экрана
           
        }

        //при клике на подлокжку изображение исчежает
        if (target && target.matches('div.popupImg')) { //при клике будет найдена подложка, т.е.div.popup
            imgPopup.style.display = 'none';
        }

    });

};

export default images;

