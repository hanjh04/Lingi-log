<template>
<div>
    <form @submit.prevent=addBook()>
        <ul v-if="isAddPage">
            <li>title : <input type="text" name="title" id="title" placeholder="book title" v-model="title"></li>
            <li>buyer : <input type="text" name="buyer" id="buyer" placeholder="buyer" v-model="buyer"></li>
            <li>author : <input type="text" name="author" id="author" placeholder="author" v-model="author"></li>
            <li>content : <input type="text" name="content" id="content" placeholder="content" v-model="content"></li>
            <li>subject : <input type="text" name="subject" id="subject" placeholder="subject" v-model="subject"></li>
            <li>image : <input type="file" name="" id=""></li>
            <input type="submit" value="Save">
        </ul>
        <ul v-else>
            <button @click.prevent="toggle()">Edit</button>
            <li>title : {{fetchedBookDetail.title}}</li>
            <li>buyer : {{fetchedBookDetail.buyer}}</li>
            <li>author : {{fetchedBookDetail.author}}</li>
            <li>content : </li>
            <li>subject : </li>
            <li>image : <img :src=fetchedBookDetail.imgUrl alt="./"></li>
        </ul>
    </form>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            title:"",
            buyer:"",
            author:"",
            content:"",
            subject:"",
            isAddPage:true
        }
    },
    computed:{
        ...mapGetters(['fetchedBookDetail'])
    },
    methods:{
        addBook(){
            console.log('adddd')
        },
        toggle(){
            this.isAddPage = !this.isAddPage
        }

    },
    beforeRouteEnter:(to, from, next)=>{
        // console.log(to)
        // console.log(to.params.idx)
        // console.log(this.fetchedBookList)
        next(vm=>{
            if(to.params !== undefined && to.params.idx !== undefined){
                vm.isAddPage = false;
            }
        });
    },
    // beforeRouteUpdate:(to, from, next)=>{
    //     // console.log(to)
    //     // console.log(to.params.idx)
    //     // console.log(this.fetchedBookList)
    //     next();
    // },
    // beforeRouteLeave:(to, from, next)=>{
    //     // console.log(to)
    //     // console.log(to.params.idx)
    //     console.log(bookDetail)
    //     next();
    // }
}
</script>

<style>

</style>
