<template>
<div>

    <ul class="list-group">
        <todo-item v-for="(item,index) in todos" :key="index" :todoItem="item" />

        <a class="list-group-item  d-flex justify-content-between align-items-center" style="padding: 0.3rem 0.25rem!important;" v-if="allTodos.length>0">

            <div class="text-right ml-2"><small>{{activeTodoCount}} items left</small></div>
            <div class="text-center">
                <div class="btn btn-padding  mr-1" @mouseover="mouseOverAll = true" @mouseleave="mouseOverAll = false" @click="changeNavigation('All');" :class="{border: mouseOverAll}">
                    <small>
                        All
                    </small>
                </div>
                <div class="btn btn-padding  mr-1" @mouseover="mouseOverActive = true" @mouseleave="mouseOverActive = false" @click="changeNavigation('Active');" :class="{border: mouseOverActive}">
                    <small>
                        Active
                    </small>
                </div>
                <div class="btn btn-padding " @mouseover="mouseOverCompleted = true" @mouseleave="mouseOverCompleted = false" @click="changeNavigation('Completed');" :class="{border: mouseOverCompleted}">
                    <small>
                        Completed
                    </small>
                </div>
            </div>
            <div class="text-left btn u" @click="clearCompleted();"><small>Clear Completed</small></div>

        </a>
        <a class="list-group-item  d-flex justify-content-between align-items-center ml-1 list-border-1" v-if="allTodos.length>0"> </a>

        <a class="list-group-item  d-flex justify-content-between align-items-center ml-2 list-border-2" v-if="allTodos.length>0"> </a>

    </ul>
</div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default {
    name: 'TodoList',
    components: {
        TodoItem
    },
    data() {
        return {

            mouseOverAll: false,
            mouseOverCompleted: false,
            mouseOverActive: false,
            navigate: 'All',
            todos:[],
           

        };
    },
    computed: {

        activeTodoCount() {
            return this.$store.getters.activeTodoCount;

        },
        allTodos(){
            return this.$store.getters.allTodoList;

        }

    },
    mounted(){
        this.getTodos();
    },

    methods: {
        changeNavigation(navigate){
            this.navigate = navigate;
            this.getTodos();

        },
        getTodos() {
            if (this.navigate == 'Completed') this.todos = this.$store.getters.completedTodoList;
            else if (this.navigate == 'Active') this.todos =  this.$store.getters.activeTodoList;
            else this.todos =  this.$store.getters.allTodoList;
        },
        clearCompleted(){
             this.$store.dispatch('ClearCompletedTodos',this.$store.getters.completedTodoList);
             this.getTodos();
        },
    }
};
</script>
<style scoped>
.list-border-1{
    padding: 0.16rem 0.1rem!important;width:98%
}
.list-border-2{
    padding: 0.16rem 0.1rem!important;width:97%
}

.u {
    text-decoration: underline;
}
.btn-padding {
    padding: 0.175rem 0.55rem !important;
    line-height: 1.5 !important;
}

</style>