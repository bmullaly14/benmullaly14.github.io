<template>
  <div>
    <div id="big-container">
      <div class="row">
        <div class="col-9 small-box">
          <div class="image">
            <img :src="blurbs[0].img" />
          </div>
          <div class="text">
            <p>
              "Insightful, Perceptive, Golden Retriever Energy" <br />
              - Tech Elevator Superlatives
            </p>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
      <!-- <div class="row">
        <div class="col-3"></div>
        <div class="col-9 small-box">
          <div class="text">
            <h3>{{ blurbs[1].text }}</h3>
          </div>
          <div class="image">
            <img src="blurbs[1].img" />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
//import { Template } from 'webpack';

export default {
  data() {
    return {
      blurbs: [
        {
          id: 1,
          text:
            '"Insightful, Perceptive, Golden Retriever Energy"' +
            "" +
            "- Tech Elevator Superlatives",
          img: "https://www.techelevator.com/wp-content/uploads/2023/07/cropped-tech-elevator-favicon.png",
        },
        {
          id: 2,
          text: "What should even go here, I really don't know man... I guess we'll find out eventually!",
          img: "insert URL here",
        },
      ],
    };
  },
};
</script>

<style scoped>
#theRow,
#big-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.row {
  display: block;
}
.text {
  width: 66%;
}
img {
  height: 10vw;
}
.small-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 85vw;
  margin: 10px 0px;
  align-content: center;
  text-align: center;
}
.text > p {
  text-align: center;
  margin: auto;
}
.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
