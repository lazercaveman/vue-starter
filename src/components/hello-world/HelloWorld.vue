<template>
  <div class="flex h-screen flex-col items-center justify-center gap-2 bg-gray-800">
    <h1 class="text-5xl text-white">{{ msg }}</h1>
    <p class="text-3xl text-white">Lets start something awesome!</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
