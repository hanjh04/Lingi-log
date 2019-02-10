<template>
    <div class="dropdown">
        <!-- <span>Search : </span> -->
        <!-- <select name="searchType">
            <option value="title">TITLE</option>
            <option value="keyword">KEYWORD</option>
        </select> -->
        <!-- <a id="data-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a> -->
        <div class="input-group-append">
            <span class="input-group-text amber lighten-3" id="basic-text1">
                <i class="fas fa-search text-grey" aria-hidden="true"></i>
            </span>
        </div>
        <input aria-label="Search" autocomplete="off" spellcheck="false"  placeholder="Search..." data-toggle="dropdown" @keydown="print" @click="onClickSearchBox($event)">
        <div class="dropdown-menu" id="search-dropdown" aria-labelledby="data-toggle">
            <h6 class="dropdown-header" id="search-title">Title</h6>
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action Another action Another action</a>
            <h6 class="dropdown-header" id="search-keywords">Keywords</h6>
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
        </div>

<i class="fas fa-allergies"></i>


        <div class="form-group has-feedback has-search">
            <span class="fa fa-search inside"></span>
            <input type="text" class="form-control" placeholder="Search">
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            bookMetaData:
            [
                {
                    title:'Quick Start Vue.js',
                    keywords:['vue', 'frontend', 'js']
                },{
                    title:'Clean Code',
                    keywords:['clean code', 'coding']
                },{
                    title:'Head First Design Patterns',
                    keywords:['디자인 패턴', 'pattern']
                }
            ]
        }
    },
    methods:{
        print(e){
            console.log(e)
        },
        onClickSearchBox(e){
            if(e.target.value === "") return;
            document.getElementById("search-dropdown").style.display = 'block'
        },
        abc(){
            console.log(document.getElementById('myList'))
//             $('#myList a').on('click', function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
        }
    }
}
</script>

<style>
/* Bootstrap 4 text input with search icon */

.inside{
    position:absolute;
    margin-top:10px;
    margin-left:10px;
    color:green;
}

.has-search .form-control-feedback {
    right: initial;
    left: 0;
    color: #ccc;
}

.has-search .form-control {
    padding-right: 12px;
    padding-left: 34px;
}

</style>