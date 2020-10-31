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
      return state.todoList.filter(x=>x.status==false);
    },
    completedTodoList(state) {
      return state.todoList.filter(x=>x.status==true);
    },
    allTodoList(state){
      return state.todoList;

    }
  },
  mutations: {
    AddNewTodo(state, todoItem) {
      let findTodo = state.todoList.find(x => x.title == todoItem && x.status == false);
      let todoId = state.todoList.length == 0?0 :state.todoList[state.todoList.length-1].id;
      if (findTodo == undefined) {
        state.todoList.push({
          id: todoId + 1,
          title: todoItem,
          status: false
        });
      }
      else alert("Already Exist!");

    },
    DeleteTodo(state, todoItem) {
      let todoIndex = state.todoList.indexOf(todoItem);
      state.todoList.splice(todoIndex, 1);


    },
    EditTodo(state, todoItem) {
      let todo = state.todoList.find(x=>x.id == todoItem.id);
      if(todo) todo.title = todoItem.title;


    },
    ChangeTodoStatus(state, todoItem) {
      todoItem.status = !todoItem.status;
    },
    ClearCompletedTodos(state,completedList){

      for(let i=0; i <completedList.length; i++){
        let todoIndex = state.todoList.indexOf(completedList[i]);
        state.todoList.splice(todoIndex, 1);
        
      }
    }
    

  },
  actions: {
    AddNewTodoItem({ commit }, payload) {
      commit('AddNewTodo', payload);

    },
    DeleteTodoItem({ commit }, payload) {
      commit('DeleteTodo', payload);

    },
     
    EditTodoItem({ commit },payload) {
      commit('EditTodo',payload);

    },
    ChangeTodoStatus({ commit }, payload) {
      commit('ChangeTodoStatus', payload);

    },
    ClearCompletedTodos({ commit },payload) {
      commit('ClearCompletedTodos',payload);

    },
   
    
    
   
    


  },
  modules: {
  }
})
