const page = document.getElementById('tabs1')
const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));
let currentIndex = 0; 

let switchTabs = function(index, array, className){
    for (let i = 0; i < array.length; i++) {
            if(index === i){
                array[i].classList.add(className);
            } else {
                array[i].classList.remove(className)
            }
    }
}

page.addEventListener('click', (event) => {
    currentIndex = tabs.indexOf(event.target)
    if(currentIndex >= 0 && currentIndex <= tabs.length){
        switchTabs(currentIndex, tabs, 'tab_active');
        switchTabs(currentIndex, tabsContent, 'tab__content_active');
    }
})
