headerEquipment.addEventListener('click', function(){
    headerEquipmentList.classList.toggle('header__list-list_visibility');
    headerEquipment.classList.toggle('header__list-link_active');
    function equipmentName(){
          if (headerEquipment.textContent === 'Equipment ⬆️') { 
                headerEquipment.textContent = 'Equipment ⬇️'
                     }
                     else {
                            headerEquipment.textContent = 'Equipment ⬆️'
               }
                   }
                 equipmentName();
      });
    
    headerServices.addEventListener('click', function(){
          headerServicesList.classList.toggle('header__list-list_visibility');
          headerServices.classList.toggle('header__list-link_active');
          function servicesName(){
                if (headerServices.textContent === 'Services ⬆️') { 
           headerServices.textContent = 'Services ⬇️'
                }
                else {
                       headerServices.textContent = 'Services ⬆️'
          }
              }
            servicesName();
    });
    
    headerMaterials.addEventListener('click', function(){ 
          headerMaterialsList.classList.toggle('header__list-list_visibility');
          headerMaterials.classList.toggle('header__list-link_active');
          function materialsName(){
                if (headerMaterials.textContent === 'Materials ⬆️') { 
           headerMaterials.textContent = 'Materials ⬇️'
                }
                else {
                       headerMaterials.textContent = 'Materials ⬆️'
          }
              }
            materialsName();
    });
