<template>
    <div id="app">
      <div id="cover">
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
      </div>
    </div>
</template>
<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.jsx";
import Todo from "./components/todo.vue";
export default {
  data() {
    return {
      msg: "10000!!!!"
    };
  },
  components: {
    Header,
    Footer,
    Todo
  }
};
</script>
<style scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #999999;
  opacity: 0.7;
  z-index: 2;
}
</style>

