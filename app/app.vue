<script setup lang="ts">
import "~/assets/styles/main.css"
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'page', mode: 'out-in'
      }" />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  transform: translateX(10px);
}
</style>
