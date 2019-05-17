<template>
  <div class="list">
    <div v-if="isLoaded">
      <div v-for="(item, index) in items" :key="index">
        {{ item.data.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { db } from "../firebase-config";

@Component
export default class PostListing extends Vue {
  items: Array<Object> = [];
  isLoaded: Boolean = false;

  mounted(): void {
    db.collection("blog-posts")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            data: doc.data()
          };
          this.items.push(data);
          this.isLoaded = true;
        });
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
