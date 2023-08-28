<template>
  <div id="searchDiv">
    <div id="inputBox">
      <label for="searchInput"
        >Type Keywords separated by a comma (,) to search Resume</label
      >
      <input
        id="searchInput"
        type="text"
        v-model="searchText"
        placeholder="C#, SQL"
      />
      <button v-on:click="searchResume()">Search</button>
    </div>
    <div id="searchResults">
      <div v-for="term in searchResults" v-bind:key="term.id">
        <p :color="`${term.present ? green : red}`">{{ term.term }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skills"],
  data() {
    return {
      searchText: "",
      lowerSkills: [],
      searchTerms: [],
      searchResults: [],
    };
  },
  methods: {
    searchResume() {
      this.searchText = this.searchText.toLowerCase().split(" ").join("");
      this.searchTerms = this.searchText.split(",");

      this.lowerSkills = this.skills.filter((t) => {
        t = t.split(" ").join("");
        t = t.toLowerCase();
        return t;
      });

      this.lowerSkills.filter((s) => {
        return this.searchTerms.filter((t) => {
          if (t == "") {
            return null;
          }
          if (s.includes(t)) {
            this.searchResults.push(this.makeResult(t, true));
            return this.makeResult(t, true);
          } else if (t != "") {
            this.searchResults.push(this.makeResult(t, false));
            return this.makeResult(t, false);
          } else {
            return null;
          }
        });
      });
    },
    makeResult(r, tF) {
      let n = {
        term: "",
        present: false,
      };
      if (tF) {
        n.term = JSON.stringify(r);
        n.present = JSON.stringify(true);
      } else {
        n.term = JSON.stringify(r);
        n.present = JSON.stringify(false);
      }
      return n;
    },
  },
};
</script>

<style></style>
