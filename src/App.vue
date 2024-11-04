<template>

  <div>
    <h1 class="title_text"> {{ texts[0].text }}</h1>
    <span  class="container">
      <img src="@/assets/dog.png">
    </span>
    
  </div>
  <div>
    <h1 class="title_text">{{ texts[1].text }}</h1>
  </div>
  
  <form action="/create" method="post">
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
      texts : [
          {id:0 , text:"" , content:"Profile", index:0},
          {id:1 , text:"" , content:"This is Bread's site", index:0}
      ],
      typedText: "",
      index : 0,
    };
  },

  methods:{
    typeText(id, content){
      let textObj = this.texts.find(t=>t.id === id);
      if (!textObj){
        console.error(`Text object with id ${id} not found`);
        return;
      }
      
      if (textObj.index < content.length){
        textObj.text += content.charAt(textObj.index);
        textObj.index++;
        setTimeout(() => this.typeText(id, content), 50); //set type speed 50ms
      }
    },
  },

  mounted(){
    this.texts.forEach(textObj => {
      this.typeText(textObj.id, textObj.content)
    })
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  h1.title_text{
    text-align: center;
  }
/* .profile-img{
  max-width: 25%;
  max-height: auto;
  align-items: center;
  display: flex;
} */
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .container img {
    width: 15%; 
    max-width: 15%;
    height: auto; 
  }


</style>