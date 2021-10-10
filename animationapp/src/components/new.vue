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

          <svg
            width="500"
            height="500"
            class="svage"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- <path
              v-for="i in pathes"
              :key="i"
              class="squiggle"
              fill="none"
              stroke="#bc85ff"
              stroke-miterlimit="10"
              stroke-width="5"
              :d="i"
            /> -->
            <path
              v-for="j in names"
              :key="j"
              :id="j"
              class="someAnimation"
              fill="none"
              stroke="#bc85ff"
              stroke-miterlimit="10"
              stroke-width="5"
              d=""
            />

            <!-- Highlight the curve vertex and control points -->
          </svg>

          <div class="body_graph__radioSlider">
            <input
              type="range"
              min="0"
              max="800"
              v-model="range"
              step="1"
              v-on:change="radionBut()"
              style="width: 100%;"
              name=""
              id=""
            />

            {{ range }}
          </div>

          <div class="body_graph__button  d-flex justify-content-center">
            <button
              class="mx-auto buttonpl buttonMain"
              v-on:click="buttonPlayFun()"
            >
              Play
            </button>
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
let myMix = {
  methods: {
    radionBut() {
      
      console.log(this.nameChecked);
      this.nameChecked.forEach((item) => {
        document
          .getElementById(item)
          .style.setProperty("stroke-dashoffset", this.range);
      });
      console.log(this.range);
    },
    //4---------- ЧЕКБОКС ТОГГЛ
    checkboxToggle(e) {
      if (e.target.checked == false) {
        console.log("ЧЕК БОК ОТЖАЛИ");

        let doc = document.querySelector(`.${e.target.value}`);
        doc.classList.remove("checkbox_anima__all");
        console.log(this.checkedMass);
        document.querySelector(".body-card").classList.add("aawaaaa");
      }

      // если не нажат
      else {
        let doc = document.querySelector(`.${e.target.value}`);
        doc.classList.add("checkbox_anima__all");
        console.log(doc);

        // вставляем элемент

        let mypath = this.takePath(e.target.value, this.all.easingFunctions);
        console.log(mypath);
        document.getElementById(e.target.value).setAttribute("d", mypath[1]);
        this.nameChecked.push(e.target.value);
      }
    },

    takePath(value, func) {
      // расчитваем значения
      let path = this.transformMassive([value], func, "some");
      // let t = 1

      let form = path[0].equation;
      let nor = this.normalFunction(form, 5);

      this.thisName = path[0].text;
      // просто поомщь

      let liner = {
        linear: {
          text: "M5,5 C50,50 400,400 400,400",
        },
        easeInQuad: {
          text: "M477,482 C128,441 14,284 16,11",
        },
        easeOutQuad: {
          text: "M497,1 C278,0 166,80 1,478",
        },
        easeInCubic: {
          text: "M497,1 C484,412 458,498 4,498",
        },
        easeInOutCubic: {
          text: "M497,1 C113,0 489,441 4,498",
        },
        easeInOutQuad: {
          text: "M497,1 C246,25 437,450 4,498",
        },
        easeInQuart: {
          text: "M497,1 C446,423 356,487 4,498",
        },
        easeOutQuart: {
          text: 'M6,568 C6,13 448,-4 591,19'
        },
        easeOutCubic: {
          text: 'M-4,589 C99,49 448,-4 598,11'
        },
        easeInQuint: {
          text: 'M10,491 C380,494 481,408 484,23'
        },
        easeOutQuint: {
          text: 'M0,488 C-3,13 273,-3 495,9'
        },
        easeInOutQuart: {
          text: 'M17,491 C498,484 37,13 475,1'
        },
        easeInOutQuint: {
          text: 'M17,491 C374,463 190,54 477,-3'
        }
      };
      let onePath = this.transformMassive([value], liner, "class");
      console.log(onePath[0].text);

      // let a = Math.floor(Math.random() * 3);

      return [nor, onePath[0].text];
    },


    // остальные функции
    normalFunction(formul, t) {
      let t1 = `let t = ${t}`;
      let t2 = t1 + "; " + formul;
      let res = eval(t2);
      return res;
    },



    // кнопка графика
    graph() {
      if (this.buttonPlay == false) {
        let doc = this.classModules(".buttonpl");
        this.buttonPlay = false;
        doc("buttonPlayAnim", "remove");
        console.log(false);
        doc("buttonPlayChec", "remove");
        doc("buttonMain", "add");
        console.log(this.buttonPlay);
        setTimeout(function() {}.bind(this), 5000);
      }
    },
    //2------------  ЧЕК БОКСЫ

    buttonPlayFun() {
      this.buttonPlay = !this.buttonPlay;
      // if (this.buttonPlay == true) {

      // } else if (this.buttonPlay == false) {

      // }
      let doc = this.classModules(".buttonpl");
      this.graph();
      if (this.buttonPlay == true) {
      
        console.log(true);
        doc("buttonPlayAnim", "add");
        setTimeout(function() {
          doc("buttonPlayChec", "add");
          doc("buttonMain", "remove");
        }, 1000);
        console.log(this.nameChecked);
        this.nameChecked.forEach((item) => {
          document.getElementById(item).classList.add("squiggle");
        });
      } else if (this.buttonPlay == false) {
        // this.range = 800
        this.nameChecked.forEach((item) => {
          document.getElementById(item).classList.remove("squiggle");
        });
        doc("buttonPlayAnim", "remove");
        console.log(false);
        doc("buttonPlayChec", "remove");
        doc("buttonMain", "add");
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
        if (doing == "disable") {
          document.querySelector(classe).disabled = true;
        }
      };
    },

    // 3------ МОДАЛЬНОЕ ОКНО
    modal() {
      this.modalWind = !this.modalWind;
      this.modalWindow(".modal-window", ".modal_down");
    },
    modalWindow(classesShow, classesDown) {
      let wind = document.querySelector(classesShow);
      let but = document.querySelector(".header_button");
      let butt = this.classModules(".header_button");

      let checko = document.querySelectorAll(".checkbox_body");

      let back = document.querySelector(".back");
      console.log(classesDown);
      if (this.modalWind == true) {
        but.disabled = true;

        butt("header_button_hov", "remove");
        wind.style.display = "block";
        wind.classList.remove("modal_dowm");
        wind.classList.add("modal_show");
        back.classList.add("another");
        for (let i in checko) {
          checko[i].disabled = true;
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

        for (let i in checko) {
          checko[i].disabled = false;
        }
      }
    },

    // вспомогаттельная функция
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
};

export default {
  name: "vue",
  data() {
    return {
      thisName: "",
      range_two: 0,
      nameChecked: [],
      names: [],
      modalWind: false,
      buttonPlay: false,
      path: "M 0,0 C 150,90 450,50, 300,400",
      pathes: ["M 0,0 C 150,90 450,50, 300,400"],
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
      range: 0,
      newMassives: [],
      all: {
        description:
          "In the provided equations, t has value range 0-1. Source: https://gist.github.com/gre/1650294",
        easingFunctions: {
          linear: {
            text: "linear",
            description: "no easing, no acceleration",
            formula: "t",
            equation: "t",
            func(y) {
              let y1 = y;
              let x = y;
              return [x, y1];
            },
          },
          easeInQuad: {
            text: "easeInQuad",
            description: "accelerating from zero velocity",
            formula: "t^2",
            equation: "t*t",
            func(y) {
              let y1 = y;
              let x = y * y;
              return [x, y1];
            },
          },
          easeOutQuad: {
            text: "easeOutQuad",
            description: "decelerating to zero velocity",
            formula: "t*(2-t)",
            equation: "t*(2-t)",
            func(y) {
              let y1 = y;
              let x = y1 * (2 - y1);
              return [x, y1];
            },
          },
          easeInOutQuad: {
            text: "easeInOutQuad",
            description: "acceleration until halfway, then deceleration",
            formula: "t<.5 ? 2t^2 : -1+(4-2t)t",
            equation: "t<.5 ? 2*t*t : -1+(4-2*t)*t",
            func(y) {
              let y1 = y;
              let x = 0;
              if (y1 < 5) {
                x = 2 * y * y;
              } else {
                x = -1 + (4 - 2 * y) * y;
              }
              return [x, y1];
            },
          },
          easeInCubic: {
            text: "easeInCubic",
            description: "accelerating from zero velocity ",
            formula: "t^3",
            equation: "t*t*t",
            func(y) {
              let y1 = y;
              let x = Math.pow(y1, 3);
              return [x, y1];
            },
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
            func(y) {
              let y1 = y;
              let x = Math.pow(y1, 4);
              return [x, y1];
            },
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
            func(y) {
              let y1 = y;
              let x = Math.pow(y1, 5);
              return [x, y1];
            },
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
  mixins: [myMix],

  computed: {},
  // при обновлении
  updated() {
    let rea = this.transformMassive(
      this.checkedNames,
      this.all.easingFunctions,
      "checkbox_anima__all"
    );
    this.checkedMass = rea;

    // выводим формулы
    // rea.forEach((item) => {
    //   this.createGraph(item.equation, item.text);
    // });
  },
  created() {
    for (let i in this.all.easingFunctions) {
      this.names.push(this.all.easingFunctions[i].text);
    }
    console.log(this.names);
  },
  // ПРИ МОНТИРОВАНИИ
  mounted() {
    // CANVAS

    // let ctxMass = this.canvasFun();

    // // let canvH = ctxMass[1].height

    // // FIRST
    // ctxMass[0].beginPath();

    // ctxMass[0].moveTo(0, 0);
    // ctxMass[0].lineTo(0, ctxMass[1].width);
    // for (let i = 0; i <= ctxMass[1].width; i = i + 50) {
    //   ctxMass[0].fillText(` ${i} `, 0, i);
    // }
    // ctxMass[0].fillText("3c", 0, ctxMass[1].width);
    // ctxMass[0].font = "30px";
    // ctxMass[0].stroke();

    // // SECOND
    // ctxMass[0].beginPath();
    // ctxMass[0].moveTo(0, 0);
    // ctxMass[0].lineTo(ctxMass[1].height, 0);

    // // ctxMass[0].fillText("100", ctxMass[1].height - 20, 10);
    // for (let i = 0; i <= ctxMass[1].height; i = i + 50) {
    //   ctxMass[0].fillText(` ${i} `, i, 10);
    // }
    // ctxMass[0].stroke();

    let doc = this.classModules(".buttonpl");
    if (this.buttonPlay == false) {
      doc("buttonPlayAnim", "remove");

      doc("buttonPlayChec", "remove");
      doc("buttonMain", "add");
    }
  },
};
</script>

<style>
@import url("../assets/css/style.css");
.block {
  border: 1px solid black;
  width: 20px;
  height: 20px;
  transition: transform 0.6s cubic-bezier(0.11, 0, 0.5, 0);
}
.block:hover {
  padding-left: 100px;
  background: linear-gradient(
    to bottom,
    #1473e6,
    cubic-bezier(0.11, 0, 0.5, 0),
    #247b5e
  );
  -webkit-transition-duration: 2s;
  transition-duration: 2s;
  cursor: pointer;
}
</style>
