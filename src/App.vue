<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="message" placeholder="Edit me">
    <p>Character count: {{ message.length }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 10px;
  font-size: 16px;
  margin: 10px;
}

h1, p {
  margin-bottom: 20px;
}
</style>