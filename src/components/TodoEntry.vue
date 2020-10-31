<template>
<div class="input-group input-group-lg">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
    </div>
    <input type="text" class="form-control" placeholder="What needs to be done?" v-model="newTodoItem" @keyup.enter="AddNewTodoItem()" />

</div>
</template>

<script>
export default {
    name:'TodoEntry',
    data() {
        return {
            newTodoItem: "",
        };
    },
    methods: {
        AddNewTodoItem() {
            this.$store.dispatch('AddNewTodoItem', this.newTodoItem);
            this.newTodoItem = "";
        },

    },
}
</script>


