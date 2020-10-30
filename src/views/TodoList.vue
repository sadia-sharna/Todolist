<template>
<div>
    <div class="row">
        <div class="col-md-3">

        </div>
        <div class="col-md-6">
            <div>

                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="What needs to be done?" aria-label="Search" aria-describedby="basic-addon2" v-model="search" @input="showSearchItems = true" ref="searchBox" />

                </div>
                <ul class="list-group" v-if="filteredList.length > 0 && showSearchItems == true">
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" v-for="(item, index) in filteredList" :key="index" @click="
                selectSearchItem(item);
                showSearchItems = false;
              " @mouseover="item.isMouseOveritem = true" @mouseleave="item.isMouseOveritem = false">

                        <!-- Filled-in rounded example -->
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input checkbox-round" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>

                        <span class="badge badge-primary badge-pill" v-show="item.isMouseOveritem">
                            Click to Select</span>
                    </a>
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
            exactMatch: false,
            search: "",
            selectedItem: "",
            showSearchItems: false,
            isMouseOverList: false,
            searchItemList: [{
                    id: 1,
                    name: "AngularJs",
                    isMouseOveritem: false
                },
                {
                    id: 2,
                    name: "Node.Js",
                    isMouseOveritem: false
                },
                {
                    id: 3,
                    name: "Vue.js",
                    isMouseOveritem: false
                },
                {
                    id: 4,
                    name: "Bootstrap",
                    isMouseOveritem: false
                },
                {
                    id: 5,
                    name: "CodeIgniter",
                    isMouseOveritem: false
                },
                {
                    id: 6,
                    name: "ASP.NET",
                    isMouseOveritem: false
                },
                {
                    id: 7,
                    name: "ASP.NET Core",
                    isMouseOveritem: false
                }
            ]
        };
    },
    computed: {
        filteredList() {
            if (this.exactMatch)
                return this.searchItemList.filter((item) => {
                    return item.name.toLowerCase().startsWith(this.search.toLowerCase());
                });
            else
                return this.searchItemList.filter((item) => {
                    return item.name.toLowerCase().includes(this.search.toLowerCase());
                });
        }
    },
    methods: {
        selectSearchItem(item) {
            this.search = item.name;
            this.selectedItem = item.name;
            this.showSearchItems = false;
        }
    }
};
</script>

<style>
/* .custom-control-input:focus~.custom-control-indicator {
    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 3px #0275d8;
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #0275d8;
    background-color:  black;
}
.custom-checkbox .custom-control-indicator {
    border-radius: .55rem;
} */
.checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}

.checkbox-round:checked {
    background-color: gray;
}

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
}

.round label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;
}

.round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
}

.round input[type="checkbox"] {
    visibility: hidden;
}

.round input[type="checkbox"]:checked+label {
    background-color: #66bb6a;
    border-color: #66bb6a;
}

.round input[type="checkbox"]:checked+label:after {
    opacity: 1;
}

.containercheck {
    margin: 0 auto;
}
</style>
