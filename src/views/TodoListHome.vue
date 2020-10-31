<template>
<div>
    <div class="row">
        <div class="col-sm-4">

        </div>
        <div class="col-sm-5">
          
                <todo-entry/>
                <todo-list/>

           
        </div>

    </div>

</div>
</template>

<script>
import TodoEntry from '@/components/TodoEntry.vue';
import TodoList from '@/components/TodoList.vue';

export default {
    name:'TodoListHome',
    components:{
        TodoEntry,
        TodoList
    },
    data() {
        return {

            isMouseOverList: false,

        };
    },

    methods: {

    }
};
</script>

<style>
.input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-right: none;
    /* border-radius: 0.25rem; */
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-left: none;
    /* border-radius: 0.25rem; */
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}


.btn-padding {
    padding: 0.175rem 0.55rem !important;
    line-height: 1.5 !important;
}


</style>
