export class Filter {
  constructor() {
    this.randerFilters(this.filters);
  }
    filters = [
      
        {
            blockName: 'Модели',
            name: 'name',
            values: [
                {
                    name: 'ASX',
                    model_id: 1
                },
                 {
                    name: 'Outlander',
                    model_id: 2
                }, 
            ]
        },    
  ];
    randerFilters(filters, list) {
      
    filters.forEach((filter) => {
      switch (filter.type) {
          case "checkbox":
            this.randerCheckbox(filter).appendChild();
          // console.log("1");
          break;

        case "range":
          // console.log("2");
          break;
      }
    });
  }
    randerCheckbox(filter) {
      
    let filterListBlock = document.createElement("div");
        filterListBlock.setAttribute("class", "filter-list__model filter-list-block");
      
    let accordion = document.createElement("div");
        accordion.setAttribute("class", "accordion active");
        
      accordion.innerText = filter.blockName;
        filterListBlock.appendChild(accordion);
        
   return ;
  }

  randerRange() {}
}
{
  /*     
  
        foreach
  
        <div class="filter-list__model filter-list-block">
            <div class="accordion active">Модель</div>
            <div class="filter-list__content" style="max-height: 132px;">
                <div class="additionally-close"></div>
            
             forEach(filter.valus)
                <div class="filter-list__item">
                    <label >

                    <input type="checkbox" name="name" value="Terrano">
                     <span>Terrano</span>
                    </label>

            end forEach


                </div>
                <div class="filter-list__item">
                     <label>
                        <input type="checkbox" name="name" value="X-Trail">
                        <span>X-Trail 2020</span>
                     </label>
                </div>
            </div>
        </div>
        
        end foreach
        
        */
}
