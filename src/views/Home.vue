<template>
  <div>
    <PostListing />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostListing from "@/components/PostListing.vue"; // @ is an alias to /src

@Component({
  components: {
    PostListing
  }
})
export default class Home extends Vue {}
</script>
