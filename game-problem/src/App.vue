<template>
  <div id="app" class="contain">
    <GamestateStart v-if="uiState === 'start'">
      <h2>Which hooman do you want to be?</h2>
      <p
        v-for="option in characterChoices"
        :key="option"
        class="character-choices"
      >
        <input
          v-model="characterinput"
          :id="option"
          :value="option"
          type="radio"
        />
        <label :for="option">{{ option }}</label>
        <br />
      </p>
      <button @click="pickCharacter">Pick your character</button>
    </GamestateStart>

    <section v-else-if="uiState === 'characterChosen'">
      <svg viewBox="0 -180 1628 1180" class="main">
        <defs>
          <clipPath id="bottom-clip">
            <rect
              class="bottom-clip-path"
              x="1131.5"
              y="546.5"
              width="406"
              height="1000"
            />
          </clipPath>
          <clipPath id="top-clip">
            <rect
              class="top-clip-path"
              x="1131.5"
              y="69.5"
              width="406"
              height="473"
            />
          </clipPath>
        </defs>

        <Friend />
        <Score />

        <component :is="character"></component>

        <text
          x="1000"
          y="930"
          style="font: normal 45px 'Recursive; text-transform: uppercase;"
          class="text"
        >
          {{ character }}
        </text>

        <path fill="#f0959f" d="M0 842h657v192H0z" />

        <g id="friendbubble">
          <path
            class="cls-45"
            d="M342.3 471.8h106.6c0 42.6-21.3 63.9-21.3 63.9 64 0 85.3-63.9 85.3-63.9h42.6c42.7 0 42.7-42.7 42.7-42.7s21.3-149.3 21.3-191.9-42.6-42.7-42.6-42.7H321c-42.7 0-42.7 42.7-42.7 42.7l21.4 191.9s0 42.7 42.6 42.7z"
            transform="translate(17)"
          />
          <path
            class="cls-20"
            d="M333.8 463.2h106.6c0 42.7-21.3 64-21.3 64 63.9 0 85.3-64 85.3-64H547c42.7 0 42.7-42.6 42.7-42.6s21.3-149.3 21.3-192-42.7-42.6-42.7-42.6H312.4c-42.6 0-42.6 42.6-42.6 42.6l21.3 192s0 42.6 42.7 42.6z"
            transform="translate(17)"
          />
        </g>

        <g id="alienbubble">
          <path
            class="cls-45"
            d="M948.3 344.5c-103.8 0-187.9 76.3-187.9 170.4s84.1 170.3 187.9 170.3a201.5 201.5 0 00100.5-26.4l87.4 26.4-29.1-79.2c18.4-26.4 29.1-57.6 29.1-91.1 0-94.1-84.1-170.4-187.9-170.4z"
            transform="translate(17)"
          />
          <path
            class="cls-20"
            d="M938.9 336C835.1 336 751 412.3 751 506.4s84.1 170.3 187.9 170.3a201.5 201.5 0 00100.5-26.4l87.4 26.4-29.1-79.2c18.4-26.4 29.1-57.6 29.1-91.1 0-94.1-84.1-170.4-187.9-170.4z"
            transform="translate(17)"
          />
        </g>
      </svg>

      <div class="friendtalk">
        <h3>{{ questions[questionIndex].question }}</h3>
      </div>

      <div class="zombietalk">
        <p v-for="character in shuffle(characterChoices)" :key="character">
          <button @click="pickQuestion(character)">
            {{ questions[questionIndex][character] }}
          </button>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"
import gsap from "gsap"

import Score from "@/components/Score.vue"
import Baker from "@/components/Baker.vue"
import Friend from "@/components/Friend.vue"
import Artist from "@/components/Artist.vue"
import Zombie from "@/components/Zombie.vue"
import Mechanic from "@/components/Mechanic.vue"
import GamestateStart from "@/components/GamestateStart.vue"

export default {
  components: {
    Score,
    Baker,
    Friend,
    Artist,
    Zombie,
    Mechanic,
    GamestateStart,
  },
  data() {
    return {
      characterinput: "",
    }
  },
  computed: {
    ...mapState([
      "uiState",
      "characterChoices",
      "character",
      "questions",
      "questionIndex",
      "score",
    ]),
  },
  methods: {
    pickCharacter() {
      this.$store.commit("updateCharacter", this.characterinput)
      this.$store.commit("updateUIState", "characterChosen")
    },
    pickQuestion(character) {
      this.$store.commit("pickQuestion", character)
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Recursive", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 19px;
  color: #2c3e50;
  position: relative;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: url("./assets/background.svg") no-repeat center center scroll,
    #29abe2;
}

h1,
h2,
h3,
h4 {
  font-weight: 800;
}

svg.main,
.contain {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1300px;
}

.character-clip {
  clip-path: url(#bottom-clip);
}

.zombie-clip {
  clip-path: url(#top-clip);
}

.modal {
  position: absolute;
  left: calc(50% - 300px);
  max-width: 550px;
  top: 100px;
  background: white;
  padding: 30px 60px 60px;
  border-radius: 20px;
}

.character-choices {
  margin: 5px 0;
}

.friendtalk {
  position: absolute;
  z-index: 1000;
  top: 300px;
  left: 265px;
  width: 200px;
}

button {
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  margin: 10px 0;
  border-radius: 5px;
  text-decoration: none;
  background: #0c719b;
  color: #ffffff;
  font-size: 1rem;
  font-family: "Recursive", Helvetica, Arial, sans-serif;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

text {
  font-family: "Recursive", Helvetica, Arial, sans-serif;
}

.zombietalk {
  position: absolute;
  z-index: 1000;
  top: 445px;
  left: 665px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0;
    text-align: center;
  }
  button {
    padding: 0.25rem 1rem;
    margin: 7px 0;
    border-radius: 5px;
    text-decoration: none;
    background: #fff;
    color: #1e1e1e;
    border: 1px solid #cfcece;
  }
}

.text {
  fill: white;
}

.cls-2 {
  fill: #29abe2;
}
.cls-3 {
  fill: #3d2f45;
}
.cls-4 {
  fill: #ff4d60;
}
.cls-5 {
  fill: #bf593a;
}
.cls-6 {
  fill: #96442b;
}
.cls-7 {
  fill: #852028;
}
.cls-8 {
  fill: #fffaf1;
}
.cls-9 {
  fill: #b8343f;
}
.cls-10 {
  fill: #66273a;
}
.cls-11 {
  fill: #d64151;
}
.cls-12 {
  fill: #9c2f3b;
}
.cls-13 {
  fill: #5c4769;
}
.cls-14 {
  fill: #bf571f;
}
.cls-15 {
  fill: #f58a4c;
}
.cls-16 {
  fill: #ffa870;
}
.cls-17 {
  fill: #ff8366;
}
.cls-18 {
  fill: #7a2f45;
}
.cls-19 {
  fill: #a12d37;
}
.cls-20 {
  fill: #fff;
}
.cls-21 {
  fill: #c93945;
}
.cls-22 {
  fill: #644b6e;
}
.cls-23 {
  fill: #382a3d;
}
.cls-24 {
  fill: #96c466;
}
.cls-25 {
  fill: #7bad47;
}
.cls-26 {
  fill: #d1e6ff;
}
.cls-27 {
  fill: #c6f7be;
}
.cls-28 {
  fill: #b3e084;
}
.cls-29 {
  fill: #dfffbd;
}
.cls-30 {
  fill: #6fc716;
}
.cls-32 {
  fill: #73648c;
}
.cls-33 {
  fill: #f59055;
}
.cls-34 {
  fill: #f57355;
}
.cls-35 {
  fill: #fe932e;
}
.cls-36 {
  fill: #f27501;
}
.cls-37 {
  fill: #fcea10;
}
.cls-38 {
  fill: #e6332a;
}
.cls-39 {
  fill: #8cb214;
}
.cls-40 {
  fill: #f39200;
}
.cls-41 {
  fill: #95c11f;
}
.cls-42 {
  fill: #d81d19;
}
.cls-43 {
  fill: #33415e;
}
.cls-44 {
  fill: #263147;
}
.cls-45 {
  fill: #0071bc;
}
</style>
