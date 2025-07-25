<template>
  <div class="h-screen flex flex-col gap-2 justify-center items-center bg-gray-800">
    <h1 class="text-white text-5xl">{{ msg }}</h1>
    <p class="text-white text-3xl">Lets start something awesome!</p>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
