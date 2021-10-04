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
        <div class="col-md-1 header_about">
          <button v-on:click='modal()'  class="header_button">About</button>
        </div>
      </div>

      <div class="row body">
        <div style='display: none' class="col-md-6  modal-window offset-md-3 border">
          <p class="me-auto modal_exit" v-on:click='modal()'  style="font-size: 30px;">&cross;</p>
         <p class='text-center'>Это мое лучшее приложение</p>
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
          {{ checkedNames }}
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
    // ЧЕК БОКСЫ
    someFun() {
      console.log("ПРОВЕРКА");
    },
    modal() {
      this.modalWind = !this.modalWind
     this.modalWindow('.modal-window', '.modal_down')
    },
    modalWindow(classesShow, classesDown){
      let wind = document.querySelector(classesShow)
      let back = document.querySelector('.back')
      console.log(classesDown)
      if(this.modalWind == true) {
        wind.style.display = 'block'
        wind.classList.remove('modal_dowm')
        wind.classList.add('modal_show')
        back.classList.add('another')
      }
      if(this.modalWind == false) {
     
        wind.classList.remove('modal_show')
        wind.classList.add('modal_dowm')
   
        setTimeout(function() {
          back.classList.remove('another')
          wind.style.display = 'none'
        }, 1300)
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

  mounted() {
    // console.log(typeof this.all);
    // let al = this.all.map(function(item, index) {
    //     return [index, item]
    // })
    // console.log(al)
  },
};
</script>

<style>
  @keyframes popup_down {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(-930px);
    }
  }
@keyframes popup_show {
  0% {
    transform: translateY(-230px);
  }
  50% {
    transform: translateY(60px);
  }
  70% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes headerP {
  0% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes logo_animationTr {
  0% {
    top: 30px;
    left: 40px;
    transform: rotate(170deg);
  }
  70% {
    top: 90px;
    left: -30px;
    transform: rotate(70deg);
  }
  100% {
    top: 70px;
    left: -20px;
  }
}

@keyframes logo_animationRes {
  0% {
    top: 40px;
    left: 80px;
  }
  70% {
    top: 30px;
    left: 160px;
    transform: rotate(70deg);
  }
  100% {
    top: 20px;
    left: 140px;
  }
}

@keyframes anima {
  0% {
    width: 0%;
  }

  70% {
    margin-left: 10px;
    width: 105%;
  }
  100% {
    width: 100%;
  }
}

@keyframes animaRever {
  0% {
    width: 110%;
  }

  70% {
    margin-left: 10px;
    width: 70%;
  }
  100% {
    width: 0%;
  }
}

@keyframes card_anima {
  0% {
    left: -1000px;
  }
  70% {
    left: 100px;
  }
  100% {
    left: 0;
  }
}
.modal_exit {
  position: absolute;
  cursor: pointer;
  transition: 0.4s;
}
.modal_exit:hover {
  padding-top: 10px;
}
.another {
  padding: 0;
  margin: 0;
  background: rgba(125, 125, 125, 0.48);
}
.modal_show {
  animation-name: popup_show;
  animation-duration: 1.5s;
}
.modal_dowm {
  animation-name: popup_down;
  animation-duration: 1.5s;

}
.modal-window {
  position: relative;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 999;
  opacity: 1;
  background: #ffffff;
  border: 1px solid #595959;
  box-sizing: border-box;
  box-shadow: 3px 4px 7px rgba(112, 112, 112, 0.25);
  border-radius: 20px;
  height: 400px;
}
.image {
  position: absolute;
}
.img_tr {
  top: 70px;
  left: -20px;
  animation-name: logo_animationTr;
  animation-duration: 1s;
}
.img_res {
  top: 20px;
  left: 140px;
  animation-name: logo_animationRes;
  animation-duration: 1s;
}
.header_logo {
  position: relative;
}
.header_logo p {
  position: absolute;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 92px;
  animation-name: headerP;
  animation-duration: 1s;
  color: #000000;
}
.header_button {
  background: none;
  border: 1px solid black;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.checkbox_anima__rever {
  color: black;
  padding-left: 10px;
  animation-name: animaRever;
  animation-duration: 2s;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #ffffff;
  box-shadow: 3px 4px 7px rgba(112, 112, 112, 0.25);
  border-radius: 20px;
}

.checkbox_anima__all {
  color: black;
  padding-top: 15px;
  padding-left: 10px;
  animation-name: anima;
  animation-duration: 1.5s;
  padding-bottom: 15px;
  background: #ffffff;
  box-shadow: 3px 4px 7px rgba(112, 112, 112, 0.25);
  border-radius: 20px;
}

label {
  color: #6f6f6f;
}
.checkbox_body {
  position: absolute;
}
.checkbox_body + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  transition: 0.3s all;
}
.checkbox_body + label::before {
  transition: 0.3s all;
  content: "";
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  color: black;
}
.checkbox_body:not(:disabled):not(:checked) + label:hover::before {
  border-color: #76e86c;
  cursor: pointer;
}
.checkbox_body:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
.checkbox_body:checked + label::before {
  border-color: #76e86c;
  background-color: #c7ffa4;
  color: black;
  font-size: 20px;
}
.checkbox_body:focus:not(:checked) + label::before {
  border-color: #76e86c;
}

.body_lines {
  margin-top: 35px;
}
h2 {
  margin-bottom: 30px;
}
.header {
  margin-top: 20px;
  margin-bottom: 140px;
}
.body_about_option {
  margin-bottom: 200px;
  margin-top: 100px;
}
.body_card_animation {
  animation-name: card_anima;
  animation-duration: 2s;
  left: 0;
}
.body_about_option__card {
  position: relative;

  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  box-shadow: 3px 4px 7px rgba(112, 112, 112, 0.25);
  border-radius: 10px;
  width: 400px;
  margin-top: 40px;
}
.body_card__inner {
  padding-top: 40px;
  padding-bottom: 60px;
  padding-left: 40px;
}
</style>
