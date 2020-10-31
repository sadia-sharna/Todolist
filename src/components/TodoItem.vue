<template>
<div>
    <a href="#" v-if="editTodoCheck==false" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

        <div>

            <label style="font-size: 1.25rem;" :class="{completed: todoItem.status}" @click="editTodoCheck=true;editTodo = todoItem.title">{{todoItem.title}}</label>
            <div class="round">

                <input type="checkbox" :id="todoItem.id" @click="ChangeTodoStatus();" v-model="todoItem.status" />
                <label :for="todoItem.id"></label>

            </div>

        </div>

        <span @click="DeleteTodoItem()" v-if="editTodoCheck==false">
            <i class="fa fa-close text-danger close"></i>
        </span>
    </a>
    <div class="list-group-item edit-todo-list " v-if="editTodoCheck==true">
        <input class=" input-lg  edit-todo-input form-control" type="text" @keyup.enter="EditTodoItem()" v-model="editTodo"/>
    </div>

</div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todoItem"],
    data() {
        return {

            editTodoCheck: false,
            editTodo:"",

        };
    },

    methods: {
        DeleteTodoItem() {
            this.$store.dispatch('DeleteTodoItem', this.todoItem);
        },
        ChangeTodoStatus() {
            this.$store.dispatch('ChangeTodoStatus', this.todoItem);

        },
        EditTodoItem(){
            this.editTodoCheck=false;
            this.todoItem.title = this.editTodo;
            this.$store.dispatch('EditTodoItem', this.todoItem);
        },

    }
};
</script>

<style>
.completed {
    text-decoration: line-through;
    color: silver;
}

.close {
    color: red;
    font-size: 1.2rem;
}

.round {
    position: relative;
    float: left;
    margin-right: 1.6rem;
}

.round label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 29px;
    left: -12px;
    position: absolute;
    top: 3px;
    width: 28px;

}

.round label:after {
    border: 2px solid #19bb3e;
    border-top: none;
    border-right: none;
    content: "";
    height: 8px;
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 7px;
    transform: rotate(-57deg);
    width: 15px;

}

.round input[type="checkbox"] {
    visibility: hidden;
}

.round input[type="checkbox"]:checked+label:after {
    opacity: 1;
}

.edit-todo-list {
    padding: 0px 0px 0px 7% !important
}

.edit-todo-input {
    border: 2px solid #3a363657 !important;
    padding: 1.75rem 1.25rem !important;
}
</style>
