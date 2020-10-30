import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        title: 'Fixing Bug',
        status: false
      },
      {
        id: 2,
        title: 'Learn Angular Services',
        status: false
      },
    ],
  },
  getters:{
   
    activeTodoCount(state){
      return state.todoList.filter(x=>x.status==false).length;
    },
    activeTodoList(state) {
      return state.todoList.filter(x=>x.status==false)
    },
    completedTodoList(state) {
      return state.todoList.filter(x=>x.status==true)
    },
    allTodoList(state){
      return state.todoList;

    }
  },
  mutations: {
    AddNewTodo(state, todoItem) {
      let findTodo = state.todoList.find(x => x.title == todoItem && x.status == false);
     
      if (findTodo == undefined) {
        state.todoList.push({
          id: state.todoList[state.todoList.length-1].id + 1,
          title: todoItem,
          status: false
        });
      }

    },
    DeleteTodo(state, todoItem) {
      let todoIndex = state.todoList.indexOf(todoItem);
      state.todoList.splice(todoIndex, 1);


    },
    ChangeTodoStatus(state, todoItem) {
      todoItem.status = !todoItem.status;
    },
    

  },
  actions: {
    AddNewTodoItem({ commit }, payload) {
      commit('AddNewTodo', payload);

    },
    DeleteTodoItem({ commit }, payload) {
      commit('DeleteTodo', payload);

    },
    ChangeTodoStatus({ commit }, payload) {
      commit('ChangeTodoStatus', payload);

    },
   
    


  },
  modules: {
  }
})
