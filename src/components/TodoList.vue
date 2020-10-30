<template>
<div>
    
    <ul class="list-group">
        <todo-item v-for="(item,index) in todos" :key="index" :todoItem="item" />
        <!-- <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

                <div>
                    <label style="font-size: 1.25rem;">task 1</label>
                    <div class="round">

                        <input type="checkbox" id="checkbox1" />
                        <label for="checkbox1"></label>

                    </div>

                </div>

                <span>
                    <i class="fa fa-close text-danger close"></i></span>
            </a> -->
        <!-- <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

                <div>
                    <label style="font-size: 1.25rem;" class="del">task 2</label>
                    <div class="round">

                        <input type="checkbox" id="checkbox2" />
                        <label for="checkbox2"></label>

                    </div>

                </div>

                <span>
                    <i class="fa fa-close text-danger close"></i></span>
            </a> -->
        <a class="list-group-item  d-flex justify-content-between align-items-center" style="padding: 0.3rem 0.25rem!important;">

            <div class="text-right ml-2"><small>{{activeTodoCount}} items left</small></div>
            <div class="text-center">
                <div class="btn btn-padding  mr-1" @mouseover="mouseOverAll = true" @mouseleave="mouseOverAll = false" :class="{border: mouseOverAll}"><small>All</small></div>
                <div class="btn btn-padding border mr-1"  @mouseover="mouseOverActive = true"  @mouseleave="mouseOverActive = false" :class="{border: mouseOverActive}"><small>Active</small></div>
                <div class="btn btn-padding border"  @mouseover="mouseOverCompleted = true" @mouseleave="mouseOverCompleted = false" :class="{border: mouseOverCompleted}"><small>Completed</small></div>
            </div>
            <div class="text-left btn u"><small>Clear Completed</small></div>

        </a>
        <a class="list-group-item  d-flex justify-content-between align-items-center ml-1 list-border-1"> </a>

        <a class="list-group-item  d-flex justify-content-between align-items-center ml-2 list-border-2"> </a>

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

        };
    },
    computed: {
        todos() {
            return this.$store.state.todoList;
        },
        activeTodoCount(){
            return this.$store.getters.activeTodoCount;

        }

    },

    methods: {

    }
};
</script>
