const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') =>{
   const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    //функция, ктр будет скрывать все табы
    function hideTabContent () {
        content.forEach(item =>{
            item.style.display = 'none';
        });

        tab.forEach(item =>{
            item.classList.remove(activeClass);
        });
    }

    //функция показа конкретного таба
    function showTabContent (i=0){
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }
 
    hideTabContent();
    showTabContent();


    //Отслеживаем какой таб кликнул пользователь, чтобы запустить фун-ции. Для этого используем делегирование событий
    header.addEventListener('click', (e) =>{
        const target = e.target;
        if (target && //проверяем на наличие самого таргета
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
                
        } 
    });

};

export default tabs;