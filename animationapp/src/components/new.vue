<template>
  <div class="back ">
    <div class="container">
      <div class="row header d-flex justify-content-between">
        <div class="col-md-2 header_logo">
          <p>Easing</p>
          <img src="../assets/tr.png" class="image img_tr" width="30" alt="" />
          <img
            src="../assets/res.png"
            class="image img_res"
            width="20"
            alt=""
          />
        </div>
        <div class="col-md-1 header_about ">
          <button v-on:click="modal()" class="header_button header_button_hov">
            About
          </button>
        </div>
      </div>

      <div class="row body">
        <div
          style="display: none"
          class="col-md-6  modal-window offset-md-3 border"
        >
          <p
            class="me-auto modal_exit"
            v-on:click="modal()"
            style="font-size: 30px;"
          >
            &cross;
          </p>
          <p class="text-center">Это мое лучшее приложение</p>
        </div>
        <div class="col-md-6 body_text ">
          <div class="body_select">
            <h2>Select option</h2>
            <div class="row body_title">
              <div
                class="col-md-6 body_lines "
                v-for="i in all.easingFunctions"
                :key="i"
                style="max-height: 300px"
              >
                <div style="max-width:190px">
                  <p :class="[body, i.class, i.text]">
                    <input
                      v-on:click="checkboxToggle"
                      class="checkbox_body"
                      type="checkbox"
                      name=""
                  
                      :value="i.text"
                      id=""
                      v-model="checkedNames"
                    />
                    <label for="">{{ i.text }}</label>
                  </p>
                </div>

                <p></p>
              </div>
            </div>
          </div>

          <div class="body_about_option">
            <h2>About this option</h2>

            <div
              v-for="i in checkedMass"
              :key="i"
              class="body_about_option__card body_card_animation  body-card border"
            >
              <div class="body_card__inner">
                <p>
                  Name: <span class="card_name">{{ i.text }}</span>
                </p>
                <p>Description: {{ i.description }}</p>
                <p>
                  Formula <span>{{ i.formula }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 body_graph ">
          <h2>
            Graphic
          </h2>

          <div style="height: 500px;" class="body_graph_graph border">
            fff
          </div>
          <div class="body_graph__radioSlider">
            <input type="range" style="width: 100%;" name="" id="" />
          </div>
          <div class="body_graph__button  d-flex justify-content-center">
            <button class="mx-auto buttonpl buttonMain" v-on:click='buttonPlayFun()'>Play</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="text-center">Copyright 2021 - I love it</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
      modalWind: false,
      buttonPlay: false,
      classes: [
        "body_about_option__card",
        "body_card_animation",
        "body-card",
        "border",
      ],
      body: "checkbox_anima",
      checkedNames: [],
      checkedMass: [],
      a: 1,
      all: {
        description:
          "In the provided equations, t has value range 0-1. Source: https://gist.github.com/gre/1650294",
        easingFunctions: {
          linear: {
            text: "linear",
            description: "no easing, no acceleration",
            formula: "t",
            equation: "t",
          },
          easeInQuad: {
            text: "easeInQuad",
            description: "accelerating from zero velocity",
            formula: "t^2",
            equation: "t*t",
          },
          easeOutQuad: {
            text: "easeOutQuad",
            description: "decelerating to zero velocity",
            formula: "t*(2-t)",
            equation: "t*(2-t)",
          },
          easeInOutQuad: {
            text: "easeInOutQuad",
            description: "acceleration until halfway, then deceleration",
            formula: "t<.5 ? 2t^2 : -1+(4-2t)t",
            equation: "t<.5 ? 2*t*t : -1+(4-2*t)*t",
          },
          easeInCubic: {
            text: "easeInCubic",
            description: "accelerating from zero velocity ",
            formula: "t^3",
            equation: "t*t*t",
          },
          easeOutCubic: {
            text: "easeOutCubic",
            description: "decelerating to zero velocity ",
            formula: "(--t)t^2+1",
            equation: "(--t)*t*t+1",
          },
          easeInOutCubic: {
            text: "easeInOutCubic",
            description: "acceleration until halfway, then deceleration ",
            formula: "t<.5 ? 4t^3 : (t-1)(2t-2)(2t-2)+1",
            equation: "t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1",
          },
          easeInQuart: {
            text: "easeInQuart",
            description: "accelerating from zero velocity ",
            formula: "t^4",
            equation: "t*t*t*t",
          },
          easeOutQuart: {
            text: "easeOutQuart",
            description: "decelerating to zero velocity ",
            formula: "1-(--t)t^3",
            equation: "1-(--t)*t*t*t",
          },
          easeInOutQuart: {
            text: "easeInOutQuart",
            description: "acceleration until halfway, then deceleration",
            formula: "t<.5 ? 8t^4 : 1-8*(--t)t^3",
            equation: "t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t",
          },
          easeInQuint: {
            text: "easeInQuint",
            description: "accelerating from zero velocity",
            formula: "t^5",
            equation: "t*t*t*t*t",
          },
          easeOutQuint: {
            text: "easeOutQuint",
            description: "decelerating to zero velocity",
            formula: "1+(--t)t^4",
            equation: "1+(--t)*t*t*t*t",
          },
          easeInOutQuint: {
            text: "easeInOutQuint",
            description: "acceleration until halfway, then deceleration ",
            formula: "t<.5 ? 16t^5 : 1+16*(--t)t^4",
            equation: "t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t",
          },
        },
      },
    };
  },
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
        });
      }

      return checkedMassives;
    },
  },

  // при обновлении
  updated() {

    let rea = this.transformMassive(
      this.checkedNames,
      this.all.easingFunctions,
      "checkbox_anima__all"
    );
    this.checkedMass = rea;
  },

// ПРИ МОНТИРОВАНИИ
  mounted() {
    let doc = this.classModules('.buttonpl')
     if(this.buttonPlay == false) {
        doc('buttonPlayAnim', 'remove')
        console.log(false)
        doc('buttonPlayChec', 'remove')
        doc('buttonMain', 'add')
      }

  },
};
</script>

<style>
@import url("../assets/css/style.css");
</style>
