<template>
<div>
    <div class="row">
        <div class="col-md-4">

        </div>
        <div class="col-md-8">
            <div style="position:fixed;width:35rem;">

                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="What needs to be done?" aria-label="Search" aria-describedby="basic-addon2" ref="searchBox" />

                </div>
                <ul class="list-group">
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

                        <!-- Filled-in rounded example -->
                        <div>
                            <label style="font-size: 1.25rem;">task 1</label>
                            <div class="round">

                                <input type="checkbox" id="checkbox1" />
                                <label for="checkbox1"></label>

                            </div>

                        </div>

                        <span>
                            <i class="fa fa-close text-danger close"></i></span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

                        <div>
                            <label style="font-size: 1.25rem;" class="del">task 2</label>
                            <div class="round">

                                <input type="checkbox" id="checkbox2" />
                                <label for="checkbox2"></label>

                            </div>

                        </div>

                        <span>
                            <i class="fa fa-close text-danger close"></i></span>
                    </a>
                    <a class="list-group-item  d-flex justify-content-between align-items-center" style="padding: 0.3rem 0.25rem!important;">

                        <div class="text-right ml-2"><small>1 items left</small></div>
                        <div class="text-center">
                            <div class="btn btn-padding border mr-1"><small>All</small></div>
                            <div class="btn btn-padding border mr-1"><small>Active</small></div>
                            <div class="btn btn-padding border"><small>Completed</small></div>
                        </div>
                        <div class="text-left btn u"><small>Clear Completed</small></div>

                    </a>
                    <a class="list-group-item  d-flex justify-content-between align-items-center ml-1 list-border-1"> </a>

                    <a class="list-group-item  d-flex justify-content-between align-items-center ml-2 list-border-2"> </a>

                </ul>

            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
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

.btn-padding {
    padding: 0.175rem 0.55rem !important;
    line-height: 1.5 !important;
}

.del {
    text-decoration: line-through;
    color: silver;
}

.u {
    text-decoration: underline;
}
.list-border-1{
    padding: 0.16rem 0.1rem!important;width:98%
}
.list-border-2{
    padding: 0.16rem 0.1rem!important;width:97%
}
.close{
    color:red;
    font-size:1.2rem; 
}
</style>
