let headerLink = document.querySelector('.header__list-link');
let headerList = document.querySelector('.header__list');
let headerEquipment = document.querySelector('.header__equipment');
let headerServices = document.querySelector('.header__services');
let headerMaterials = document.querySelector('.header__materials');
let headerEquipmentList = document.querySelector('.header__equipment-list');
let headerServicesList = document.querySelector('.header__services-list');
let headerMaterialsList = document.querySelector('.header__materials-list');
let headerListList = document.querySelector('.header__list-list');


headerEquipment.addEventListener('click', function(){
headerEquipmentList.classList.toggle('header__list-list_visibility');
headerEquipment.classList.toggle('header__list-link_active');
});

headerServices.addEventListener('click', function(){
      headerServicesList.classList.toggle('header__list-list_visibility');
      headerServices.classList.toggle('header__list-link_active');
});

headerMaterials.addEventListener('click', function(){ 
      headerMaterialsList.classList.toggle('header__list-list_visibility');
      headerMaterials.classList.toggle('header__list-link_active');
});

let headerLanguage = document.querySelector('.header__language');
let headerLanguageList = document.querySelector('.header__language-list');

headerLanguage.addEventListener('click', function(){ 
      headerLanguageList.classList.toggle('header__list-list_visibility');
      console.log(headerLanguageList);
});

