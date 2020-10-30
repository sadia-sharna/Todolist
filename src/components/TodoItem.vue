<template>
<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

    <div>
        <label style="font-size: 1.25rem;" :class="{completed: todoItem.status}">{{todoItem.title}}</label>
        <div class="round">

            <input type="checkbox" :id="todoItem.id" @click="ChangeTodoStatus();"/>
            <label :for="todoItem.id"></label>

        </div>

    </div>

    <span @click="DeleteTodoItem()">
        <i class="fa fa-close text-danger close"></i>
    </span>
</a>

</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todoItem"],
    data() {
        return {

            isMouseOverList: false,

        };
    },

    methods: {
        DeleteTodoItem() {
            this.$store.dispatch('DeleteTodoItem', this.todoItem);
        },
        ChangeTodoStatus(){
             this.$store.dispatch('ChangeTodoStatus', this.todoItem);

        },

    }
};
</script>

<style>
.completed {
    text-decoration: line-through;
    color: silver;
}
</style>
