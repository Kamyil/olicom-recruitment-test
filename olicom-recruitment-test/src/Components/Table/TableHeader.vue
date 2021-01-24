<template>
  <th>
    {{ this.name }}
  </th>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { IUser } from "@/types";

@Options({})
export default class TableHeader extends Vue {
  @Prop() name!: string;
}
</script>

<style lang="scss"></style>
