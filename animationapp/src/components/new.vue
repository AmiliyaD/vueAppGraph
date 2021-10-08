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

          <div style="height: 500px;" class="body_graph_graph ">
            <canvas width="650" height="500" class="" id="canvasEx"
              >aaaaf ffsd</canvas
            >
          
          </div>
          <div class=" border">
            <div class="block"></div>
          </div>
          <div class="body_graph__radioSlider">
            <input type="range" min="0" max="3" v-model='range' step="0.05" style="width: 100%;" name="" id="" />
            {{range}}
          </div>
          <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 240 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
          </svg>
          <div class="body_graph__button  d-flex justify-content-center">
            <button
              class="mx-auto buttonpl buttonMain"
              v-on:click="buttonPlayFun(), createGraph()"
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
    // ГРАФИКИ

    // строит графики
    createGraph(formula, id) {
      console.log([formula, id]);
      // проба 5
      let result = this.normalFunction(formula, this.range);
      console.log(`РЕЗУЛЬТАТ ФУНКЦИИ --- ${result}`);

      // проба 6

      let doc = document.querySelector(".block").offsetWidth;
      let he = document.querySelector(".block").offsetHeight;

      console.log(doc, he);
      // setInterval(function() {
      //   doc = doc + 1

      //   document.querySelector('.block').style.width = doc + 'px'
      //   document.querySelector('.block').style.left = doc + 'px'
      // },100)
      // проба

      let realX2 = [7, 12, 14];
      let mapReal = realX2.map((item) => {
        let allMass = [];
        let x = `let t = ${item}`;
        let y = x + "; " + formula;
        let coors = [eval(y), item];
        allMass.push(coors);
        return allMass;
      });
      // проба 2
      let c = this.curveBes([0.1, 0.7, 0.5], realX2, mapReal);
      console.log(c);
      console.log(mapReal);

      let canvasEx = document.getElementById("canvasEx");
      let ctxe = canvasEx.getContext("2d");
      let ctx = [ctxe, canvasEx];
      ctx[0].beginPath();
      ctx[0].moveTo(0, 0);
      ctx[0].lineWidth = 2;
      ctx[0].lineCap = "round";

      // ЧТО ДЕЛАТЬ ------
      //1 ---- easeInQuad
      // ctx[0].quadraticCurveTo(50,200,500,150);
      //2 --- easeOutSine [y, x --- координата искривления, y,x --- конечные точки] []
      //  ctx[0].quadraticCurveTo(500,100,500,400);
      // 3 --- easeInOutCubic
      // ctx[0].bezierCurveTo(10, 500, 400, 200, 500, 500);
      // 4 -- easeOutQuint
      // ctx[0].bezierCurveTo(500, 20, 500, 0, 500, 500);
      // 5 --- парабола
      // ctx[0].bezierCurveTo(0, 0, 500, 250, 0, 500);

      // проба 333
      // ctx[0].bezierCurveTo(400, 50, 5, 500, 500, 500);
      // ctx[0].bezierCurveTo(0, 400, 400, 0, 500, 500);
  
      // ctx[0].bezierCurveTo(
      //   mapReal[0][0][0],
      //   mapReal[0][0][1],
      //   mapReal[1][0][0],
      //   mapReal[1][0][1],
      //   mapReal[2][0][0],
      //   mapReal[2][0][1]
      // );

      // ПРОБА 3


 
      //  [y,x | y,x | y,x]
      let P1 = [500, 20]
      let P2 = [200, 400]

      let coora = this.makeCoors(this.range,  [0,0],  P1,  P2);

      ctx[0].bezierCurveTo(P1[0], P1[1], P2[0], P2[1], 500, 500);
      console.log(coora);
      ctx[0].stroke();
    },



    // ТЕПЕРЬ ПРОБУЕМ НАХОДИТЬ КОООРДИНТАЫЫ
    makeCoors(t = 1, P0 = [0,0],  P1 = [0, 500], P2 = [500, 0]) {
      
      let x1 = Math.round( Math.pow((1 - t),2) * P0[1] + 2 * t * (1-t) * P1[1] + Math.pow(t,2) * P2[1]);
      let y1 = Math.round( Math.pow((1 - t),2) * P0[0] + 2 * t * (1-t) * P1[0] + Math.pow(t,2) * P2[0]);


      let x = Math.round((1 - t) * P1[1] + t * P2[1]);
      let y = Math.round((1 - t) * P1[0] + t * P2[0]);
      return [
        {x: x, y: y},
        {x1: x1, y1: y1}
      ];
    },

    // остальные функции
    normalFunction(formul, t) {
      let t1 = `let t = ${t}`;
      let t2 = t1 + ";" + formul;
      let res = eval(t2);
      return res;
    },
    // ФУНКЦИЯ ДЛЯ КРИВЫХ
    curveBes(t = [0.2, 0.3, 0.4], y = [4, 5, 6], x = [5, 6, 7]) {
      console.log(t);

      let xP = [];
      let yP = [];

      t.forEach((item) => {
        let xPc = Math.round(
          Math.pow(1 - item, 2) * x[0] +
            2 * (1 - item) * x[1] +
            Math.pow(item, 2) * x[2]
        );
        let yPc = Math.round(
          Math.pow(1 - item, 2) * y[0] +
            2 * (1 - item) * y[1] +
            Math.pow(item, 2) * y[2]
        );
        xP.push(xPc);
        yP.push(yPc);
      });

      return [xP, yP];
    },

    // создает канвас
    canvasFun() {
      let canvasEx = document.getElementById("canvasEx");
      let ctx = canvasEx.getContext("2d");
      console.log(ctx);
      ctx.translate(0, canvasEx.height);
      ctx.rotate(-Math.PI / 2);
      return [ctx, canvasEx];
    },

    // кнопка графика
    graph() {
      if (this.buttonPlay == true) {
        setTimeout(
          function() {
            let doc = this.classModules(".buttonpl");
            this.buttonPlay = false;
            doc("buttonPlayAnim", "remove");
            console.log(false);
            doc("buttonPlayChec", "remove");
            doc("buttonMain", "add");
            console.log(this.buttonPlay);
          }.bind(this),
          3000
        );
      }
    },
    // ЧЕК БОКСЫ

    buttonPlayFun() {
      this.buttonPlay = !this.buttonPlay;
      let doc = this.classModules(".buttonpl");
      this.graph();
      if (this.buttonPlay == true) {
        console.log(true);
        doc("buttonPlayAnim", "add");
        setTimeout(function() {
          doc("buttonPlayChec", "add");
          doc("buttonMain", "remove");
        }, 1000);
      } else if (this.buttonPlay == false) {
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

    // ЧЕКБОКС ТОГГЛ
    checkboxToggle(e) {
      if (e.target.checked == false) {
        console.log(e.target.value);
        console.log(e);
        this.someFun();

        let doc = document.querySelector(`.${e.target.value}`);
        doc.classList.remove("checkbox_anima__all");
        document.querySelector(".body-card").classList.add("aawaaaa");
      }

      // если не нажат
      else {
        let doc = document.querySelector(`.${e.target.value}`);
        doc.classList.add("checkbox_anima__all");
        console.log(this.checkedMass);
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
};

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
      range: 0,
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
  beforeUpdate() {
    let rea = this.transformMassive(
      this.checkedNames,
      this.all.easingFunctions,
      "checkbox_anima__all"
    );
    this.checkedMass = rea;


    // выводим формулы
    rea.forEach((item) => {
      this.createGraph(item.equation, item.text);
    });
  },

  // ПРИ МОНТИРОВАНИИ
  mounted() {
    // CANVAS
    let ctxMass = this.canvasFun();

    // let canvH = ctxMass[1].height

    // FIRST
    ctxMass[0].beginPath();

    ctxMass[0].moveTo(0, 0);
    ctxMass[0].lineTo(0, ctxMass[1].width);
    for (let i = 0; i <= ctxMass[1].width; i = i + 50) {
      ctxMass[0].fillText(` ${i} `, 0, i);
    }
    ctxMass[0].fillText("3c", 0, ctxMass[1].width);
    ctxMass[0].font = "30px";
    ctxMass[0].stroke();

    // SECOND
    ctxMass[0].beginPath();
    ctxMass[0].moveTo(0, 0);
    ctxMass[0].lineTo(ctxMass[1].height, 0);

    // ctxMass[0].fillText("100", ctxMass[1].height - 20, 10);
    for (let i = 0; i <= ctxMass[1].height; i = i + 50) {
      ctxMass[0].fillText(` ${i} `, i, 10);
    }
    ctxMass[0].stroke();

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
