<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <span v-for="state in states" :key="state" 
            :class="[state,filter === state?'actived':'']" @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAll">clear completed</span>
    </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  computed: { // 计算
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggle', state)
    },
    clearAll() {
      this.$emit('clearAllCompleted')
    }
  }
};
</script>

<style scoped>
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 3em;
  background-color: #ffffff;
  font-size: 14px;
}
.left,
.clear,
.tabs {
  padding: 0 10px;
  box-sizing: border-box;
}
.left,
.clear {
  width: 150px;
}
.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
* {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid rgba(175, 48, 48, 0);
}
.actived {
  border-color: rgba(175, 48, 48, 0.4);
  border-radius: 5px;
}
.clear {
  text-align: right;
  cursor: pointer;
}
.left {
  text-align: right;
}
</style>
