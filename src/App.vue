<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="message" placeholder="Edit me">
    <p>Character count: {{ message.length }}</p>
  </div>
  
  <form >
      <label for="username">用戶名:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">密碼:</label><br>
        <input type="password" id="password" name="password" required><br><br>
      <input type="submit" value="登入">
  </form>
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