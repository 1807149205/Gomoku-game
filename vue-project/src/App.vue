<script setup lang="ts">
import { onMounted, ref } from 'vue';

const playerName = ref('');
const socketInstance = ref<WebSocket | null>(null);

const startGameHandle = () => {
  if (socketInstance.value) {
    socketInstance.value.send(playerName.value);
  }
}

onMounted(() => {
  socketInstance.value = new WebSocket('ws://192.168.153.67:3000');
  
  socketInstance.value.onopen = () => {
    console.log('WebSocket connection opened.');
  };

  socketInstance.value.onclose = () => {
    console.log('WebSocket connection closed.');
  };

  socketInstance.value.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socketInstance.value.onmessage = (event) => {
    console.log('Received from server:', event.data);
  };
});
</script>

<template>
  <div>
    <h1 class="text-4xl text-gray-700">🧏五 子 棋</h1>
    <div class="mb-6 mt-10">
      <label for="success" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">
        输入你的名字，开始游戏！
      </label>
      <input v-model="playerName" type="text" id="success" class="bg-green-50 border border-gray-500 text-green-900 dark:text-gray-100 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Player name">
    </div>
    <button :disabled="playerName === ''" @click="startGameHandle" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      开始游戏！
    </button>
  </div>
</template>

<style scoped>
</style>
