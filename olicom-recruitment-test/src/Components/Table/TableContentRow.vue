<template>
  <tr v-for="singleKeyValuePair in this.sortedData" :key="singleKeyValuePair">
    <td v-for="singleValue in singleKeyValuePair" :key="singleValue">
      {{ singleValue }}
    </td>
    <!-- {{
      singleKeyValuePair
    }} -->
  </tr>
</template>

<script lang="ts">
import { IUser } from "@/types";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({})
export default class TableContentRow extends Vue {
  @Prop() contentValues!: Record<string, any>;
  @Prop() contentToShowKeys!: string[];

  sortedData: string[] = [];
  filteredData: string[] = [];

  mounted() {
    this.sortedData = this.sortDataToMatchContentToShowKeys();
  }

  sortDataToMatchContentToShowKeys() {
    const sortedData: string[] = [];
    for (const contentToShowKey in this.contentToShowKeys) {
      if (this.contentValues[contentToShowKey]) {
        sortedData.push(this.contentValues[contentToShowKey]);
      }
    }
    return sortedData;
  }
}
</script>

<style lang="scss"></style>
