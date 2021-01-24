<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <TableHeader
            v-for="contentKeyName in this.contentToShowKeys"
            :key="contentKeyName"
            :name="contentKeyName"
          />
        </tr>
      </thead>
      <tbody>
        <TableContentRow
          v-for="singleObject in this.fetchedData"
          :key="singleObject"
          :contentValues="this.fetchedData"
          :contentToShowKeys="this.contentToShowKeys"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { DataFetcher } from "@/DataFetcher";
import { IUser } from "@/types";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import TableHeader from "./TableHeader";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import TableContentRow from "./TableContentRow";

@Options({
  components: {
    TableHeader,
    TableContentRow,
  },
})
export default class Table extends Vue {
  @Prop() endpoint!: string;
  @Prop() search!: boolean;
  @Prop() sorting!: boolean;
  @Prop() pagination!: boolean;
  @Prop() contentToShowKeys!: string[];

  fetchedData: IUser[] = [];
  filteredData: IUser[] = [];

  mounted() {
    this.fetchData();
    this.filterData();
  }

  /**
   * Filters data basing on passed contentToShowKeys prop
   */
  filterData() {
    this.contentToShowKeys.forEach((keyName: string) => {
      this.filteredData = this.fetchedData.filter(
        (singleObject: Record<string, any>) =>
          // eslint-disable-next-line no-prototype-builtins
          singleObject.hasOwnProperty(keyName)
      );
    });
  }

  private async fetchData() {
    try {
      this.fetchedData = await DataFetcher.fetch<IUser[]>(this.endpoint);
    } catch (error) {
      console.error(
        "Error happened during data fetching for Table component",
        error
      );
    }
  }
}
</script>

<style lang="scss"></style>
