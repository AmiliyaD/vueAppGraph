<script>

    let myMix = {
    methods: {
    
    // ГРАФИКИ
    graph() {
      if(this.buttonPlay == true ) {
        setTimeout(function() {
          let doc = this.classModules('.buttonpl')
          this.buttonPlay = false
          doc('buttonPlayAnim', 'remove')
        console.log(false)
        doc('buttonPlayChec', 'remove')
        doc('buttonMain', 'add')
          console.log(this.buttonPlay)
        }.bind(this),3000)
      }
      
    },
    // ЧЕК БОКСЫ



    buttonPlayFun() {
      this.buttonPlay = !this.buttonPlay
      let doc = this.classModules('.buttonpl')
      this.graph()
      if(this.buttonPlay == true) {
       console.log(true)
       doc('buttonPlayAnim', 'add')
       setTimeout(function() {
         doc('buttonPlayChec', 'add')
         doc('buttonMain', 'remove')
       }, 1000)
       
   
   
   
      }
      else if(this.buttonPlay == false) {
        doc('buttonPlayAnim', 'remove')
        console.log(false)
        doc('buttonPlayChec', 'remove')
        doc('buttonMain', 'add')
      }
 
    },
    someFun() {
      console.log("ПРОВЕРКА");
    },
    classModules(classe) {
      return function(classRemove, doing) {
        if (doing == "add") {
          document.querySelector(classe).classList.add(classRemove);
        }
        if (doing == "remove") {
          document.querySelector(classe).classList.remove(classRemove);
        }
        if(doing == 'disable') {
          document.querySelector(classe).disabled = true
        }
      };
    },
    modal() {
      this.modalWind = !this.modalWind;
      this.modalWindow(".modal-window", ".modal_down");
    },
    modalWindow(classesShow, classesDown) {
      let wind = document.querySelector(classesShow);
      let but = document.querySelector(".header_button");
      let butt = this.classModules(".header_button");
   


      let checko = document.querySelectorAll('.checkbox_body')

      let back = document.querySelector(".back");
      console.log(classesDown);
      if (this.modalWind == true) {
        but.disabled = true;
        
        butt("header_button_hov", "remove");
        wind.style.display = "block";
        wind.classList.remove("modal_dowm");
        wind.classList.add("modal_show");
        back.classList.add("another");
        for(let i in checko) {
          checko[i].disabled = true
        }
      }
      if (this.modalWind == false) {
        wind.classList.remove("modal_show");
        wind.classList.add("modal_dowm");
     
        setTimeout(function() {
         
          butt("header_button_hov", "add");
          document.querySelector(".header_button").disabled = false;
          back.classList.remove("another");
          wind.style.display = "none";
        }, 1300);

        for(let i in checko) {
          checko[i].disabled = false
        }
      }
    },
    checkboxToggle(e) {
      if (e.target.checked == false) {
        console.log(e.target.value);
        console.log(e);
        this.someFun();
        let doc = document.querySelector(`.${e.target.value}`);
        doc.classList.remove("checkbox_anima__all");
        document.querySelector(".body-card").classList.add("aawaaaa");
      } else {
        let doc = document.querySelector(`.${e.target.value}`);
        doc.classList.add("checkbox_anima__all");
        console.log("чекед еще не НАЖАТ");
      }
    },
    transformMassive(firstMassive, allMassive, classAdd) {
      let checkedMassives = [];

      for (let i in allMassive) {
        firstMassive.forEach((item) => {
          if (i == item) {
            allMassive[i].class = classAdd;
            checkedMassives.push(allMassive[i]);
          }
        })
      }

      return checkedMassives;
    },
  }
    }
</script>