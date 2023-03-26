let headerLink = document.querySelector('.header__list-link');
let headerList = document.querySelector('.header__list');
let headerEquipment = document.querySelector('.header__equipment');
let headerServices = document.querySelector('.header__services');
let headerMaterials = document.querySelector('.header__materials');
let headerEquipmentList = document.querySelector('.header__equipment-list');
let headerServicesList = document.querySelector('.header__services-list');
let headerMaterialsList = document.querySelector('.header__materials-list');
let headerListList = document.querySelector('.header__list-list');
let headerLanguage = document.querySelector('.header__language');
let headerLanguageList = document.querySelector('.header__language-list');

headerEquipment.addEventListener('click', function(){
headerEquipmentList.classList.toggle('header__list-list_visibility');
headerEquipment.classList.toggle('header__list-link_active');
function equipmentName(){
      if (headerEquipment.textContent === 'Оборудование ⬆️') { 
            headerEquipment.textContent = 'Оборудование ⬇️'
                 }
                 else {
                        headerEquipment.textContent = 'Оборудование ⬆️'
           }
               }
             equipmentName();
  });

headerServices.addEventListener('click', function(){
      headerServicesList.classList.toggle('header__list-list_visibility');
      headerServices.classList.toggle('header__list-link_active');
      function servicesName(){
            if (headerServices.textContent === 'Услуги ⬆️') { 
       headerServices.textContent = 'Услуги ⬇️'
            }
            else {
                   headerServices.textContent = 'Услуги ⬆️'
      }
          }
        servicesName();
});

headerMaterials.addEventListener('click', function(){ 
      headerMaterialsList.classList.toggle('header__list-list_visibility');
      headerMaterials.classList.toggle('header__list-link_active');
      function materialsName(){
            if (headerMaterials.textContent === 'Материалы ⬆️') { 
       headerMaterials.textContent = 'Материалы ⬇️'
            }
            else {
                   headerMaterials.textContent = 'Материалы ⬆️'
      }
          }
        materialsName();
});

headerLanguage.addEventListener('click', function(){
      headerLanguageList.classList.toggle('header__list-list_visibility');
      headerLanguage.classList.toggle('header__list-link_active');
      headerLanguageList.classList.toggle('header__list-list')
      /* function Language(){
            if (headerLanguage.textContent === 'Оборудование ⬆️') { 
                  headerLanguage.textContent = 'Оборудование ⬇️'
                       }
                       else {
                              headerEquipment.textContent = 'Оборудование ⬆️'
                 }
                     }
                   equipmentName(); */
        });

/* headerLanguage.addEventListener('click', function(){ 
      headerLanguageList.classList.toggle('header__list-list_visibility');
      headerLanguage.classList.toggle('header__list-link_active');
      console.log(headerLanguageList);
}); */

const translateBtn = document.querySelector("#translateBtn");

    translateBtn.addEventListener("click", () => {
        const elementsToTranslate = document.querySelectorAll("p, a, h1, h2");
        const translatorUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=en&dt=t&q=";

        elementsToTranslate.forEach(element => {
            fetch(translatorUrl + encodeURI(element.textContent))
                .then(response => response.json())
                .then(data => {
                    element.textContent = data[0][0][0];
                });
        });
      });

 


    
    