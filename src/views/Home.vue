<template>
  <div>
    <h1>List dari cookie</h1>
    <list v-model="list" />
    <button @click="addItem">Tambah item</button>
    <button @click="resetItem">Reset item</button>
  </div>
</template>

<script>
import List from "../components/List.vue";
import { name } from "faker";
export default {
  components: { List },
  mounted() {
    const cookieList = this.$cookies.get("cookie-app");
    if (cookieList) {
      this.list = cookieList.split(",");
    }
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    addItem() {
      this.list.push(name.findName());
      this.$cookies.set("cookie-app", this.list);
    },
    resetItem() {
      this.list = [];
      this.$cookies.set("cookie-app", []);
    },
  },
};
</script>

<style>
</style>