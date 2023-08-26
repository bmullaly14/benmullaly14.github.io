<template>
  <div id="cont">
    <table class="table table-borderless" id="linkTable">
      <tbody>
        <tr>
          <td>
            <button
              class="btn btn-link"
              v-on:click="copyToClipboard()"
              v-on:mouseover="changeText()"
              v-on:mouseleave="revertText()"
              id="emailButton"
            >
              Email
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.linkedin.com/in/benmullaly14/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://github.com/bmullaly14/Ben_Mullaly_Projects"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://app.codesignal.com/profile/bmullaly14"
              target="_blank"
              rel="noopener noreferrer"
              >CodeSignal</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    changeText() {
      let button = document.getElementById("emailButton");
      button.innerText = "Click to Copy Email Address";
    },
    copyToClipboard() {
      navigator.clipboard.writeText("benmullaly14@gmail.com");
    },
    revertText() {
      let button = document.getElementById("emailButton");
      button.innerText = "Email";
    },
  },
};
</script>

<style scoped>
#linkTable {
  margin: auto;
  width: 90vw;
  background: rgba(43, 88, 143, 0.7);
  border-style: none;
  border-radius: 15px;
  padding: 10px 15%;
}
#cont {
  margin: 5vh 0 0 0;
}
a,
#emailButton {
  color: white;
  padding: 0px;
  margin: 0px;
  border: 0;
}
a:hover,
#emailButton:hover {
  color: rgba(4, 197, 251);
}
td {
  margin: 10px 0 10px 0;
}
</style>
