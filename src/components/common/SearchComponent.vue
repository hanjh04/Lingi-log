<template>
    <div>
        <span>Search : </span>
        <!-- <select name="searchType">
            <option value="title">TITLE</option>
            <option value="keyword">KEYWORD</option>
        </select> -->
        <input aria-label="Search" autocomplete="off" spellcheck="false"  placeholder="Search..." >
        <button @click="print"></button>
        
        <!-- <div class="search-box">
            <input aria-label="Search" autocomplete="off" spellcheck="false" value="" class="focused">
            <ul class="suggestions">
                <li class="suggestion">
                    <a href="/about.html"><span class="page-title">About ME</span> </a>
                </li>
                <li class="suggestion">
                    <a href="/blog/#about-lingi-log">
                    <span class="page-title">lingi-log</span><span class="header">&gt; About Lingi-log</span></a>
                </li>
            </ul>
        </div> -->
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
    computed:{
        print(){
            console.log('aaa')
        }
    }
}
</script>

<style>

</style>