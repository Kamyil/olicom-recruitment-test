<template>
  <div>
    <Table
      endpoint="https://jsonplaceholder.typicode.com/users"
      :search="false"
      :sorting="false"
      :pagination="false"
      :contentToShowKeys="[
        'name',
        'email',
        'company',
        'address.city',
        'website',
      ]"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Table from "@/Components/Table/Table";

@Options({
  components: {
    Table,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
