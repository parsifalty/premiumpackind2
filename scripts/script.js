let headerLink = document.querySelector('.header__list-link');
let headerListList = document.querySelector('.header__list-list');
headerLink.addEventListener('click', function() { 
      headerListList.classList.toggle('header__list-list_visibility');
      console.log(headerListList);
});

 headerListList.addEventListener('mouseout', function() { 
      headerListList.classList.toggle('header__list-list_visibility');
      console.log(headerListList);
}); 