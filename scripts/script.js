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
headerServicesList.classList.remove('header__list-list_visibility');
headerServices.classList.remove('header__list-link_active');
headerMaterialsList.classList.remove('header__list-list_visibility');
headerMaterials.classList.remove('header__list-link_active');

function equipmentName(){
      if (headerEquipment.textContent === 'Оборудование ⬆️') { 
            headerEquipment.textContent = 'Оборудование ⬇️'
                 }
                 else {
                        headerEquipment.textContent = 'Оборудование ⬆️'
           }
               }
             equipmentName();

             function servicesNamed(){
                if (headerServices.textContent === 'Услуги ⬆️') { 
                    headerServices.textContent = 'Услуги ⬆️'
                         }
                         else {
                                headerServices.textContent = 'Услуги ⬆️'
                   }
                       }
                     servicesNamed();

                     function materialsNamed(){
                        if (headerMaterials.textContent === 'Материалы ⬆️') { 
                            headerMaterials.textContent = 'Материалы ⬆️'
                                 }
                                 else {
                                    headerMaterials.textContent = 'Материалы ⬆️'
                       }
                                 }
                               materialsNamed();
  });

  document.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        headerEquipmentList.classList.remove('header__list-list_visibility');
        headerEquipment.classList.remove('header__list-link_active');
    }
    function equipmentNamed(){
        if (headerEquipment.textContent === 'Оборудование ⬆️') { 
              headerEquipment.textContent = 'Оборудование ⬆️'
                   }
                   else {
                    headerEquipment.textContent = 'Оборудование ⬆️'
       }
                 }
               equipmentNamed();
  });


headerServices.addEventListener('click', function(){
      headerServicesList.classList.toggle('header__list-list_visibility');
      headerServices.classList.toggle('header__list-link_active');
      headerEquipmentList.classList.remove('header__list-list_visibility');
      headerEquipment.classList.remove('header__list-link_active');
      headerMaterialsList.classList.remove('header__list-list_visibility');
      headerMaterials.classList.remove('header__list-link_active');
      function servicesName(){
            if (headerServices.textContent === 'Услуги ⬆️') { 
       headerServices.textContent = 'Услуги ⬇️'
            }
            else {
                   headerServices.textContent = 'Услуги ⬆️'
      }
          }
        servicesName();

        function equipmentNamed(){
            if (headerEquipment.textContent === 'Оборудование ⬆️') { 
                  headerEquipment.textContent = 'Оборудование ⬆️'
                       }
                       else {
                        headerEquipment.textContent = 'Оборудование ⬆️'
           }
                     }
                   equipmentNamed();

                   function materialsNamed(){
                    if (headerMaterials.textContent === 'Материалы ⬆️') { 
                        headerMaterials.textContent = 'Материалы ⬆️'
                             }
                             else {
                                headerMaterials.textContent = 'Материалы ⬆️'
                   }
                             }
                           materialsNamed();
});

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        headerServicesList.classList.remove('header__list-list_visibility');
        headerServices.classList.remove('header__list-link_active');
    }
    function servicesNamed(){
        if (headerServices.textContent === 'Услуги ⬆️') { 
            headerServices.textContent = 'Услуги ⬆️'
                 }
                 else {
                        headerServices.textContent = 'Услуги ⬆️'
           }
               }
             servicesNamed();
     });

headerMaterials.addEventListener('click', function(){ 
      headerMaterialsList.classList.toggle('header__list-list_visibility');
      headerMaterials.classList.toggle('header__list-link_active');
      headerServicesList.classList.remove('header__list-list_visibility');
      headerServices.classList.remove('header__list-link_active');
      headerEquipmentList.classList.remove('header__list-list_visibility');
      headerEquipment.classList.remove('header__list-link_active');
      function materialsName(){
            if (headerMaterials.textContent === 'Материалы ⬆️') { 
       headerMaterials.textContent = 'Материалы ⬇️'
            }
            else {
                   headerMaterials.textContent = 'Материалы ⬆️'
      }
          }
        materialsName();

        function servicesNamed(){
            if (headerServices.textContent === 'Услуги ⬆️') { 
                headerServices.textContent = 'Услуги ⬆️'
                     }
                     else {
                            headerServices.textContent = 'Услуги ⬆️'
               }
                   }
                 servicesNamed();

                 if (headerEquipment.textContent === 'Оборудование ⬆️') { 
                    headerEquipment.textContent = 'Оборудование ⬆️'
                         }
                         else {
                          headerEquipment.textContent = 'Оборудование ⬆️'
             }
                       
                     equipmentNamed();
                 
});

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        headerMaterialsList.classList.remove('header__list-list_visibility');
        headerMaterials.classList.remove('header__list-link_active');
    }
    function materialsNamed(){
        if (headerMaterials.textContent === 'Материалы ⬆️') { 
            headerMaterials.textContent = 'Материалы ⬆️'
                 }
                 else {
                    headerMaterials.textContent = 'Материалы ⬆️'
       }
                 }
               materialsNamed();
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
}); 

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
      }); */

 


    
    