<template>
    <form @submit.prevent=addBook()>
        <li>title : <input type="text" name="title" id="title" placeholder="book title" v-model="title"></li>
        <li>buyer : <input type="text" name="buyer" id="buyer" placeholder="buyer" v-model="buyer"></li>
        <li>author : <input type="text" name="author" id="author" placeholder="author" v-model="author"></li>
        <li>content : <input type="text" name="content" id="content" placeholder="content" v-model="content"></li>
        <li>subject : <input type="text" name="subject" id="subject" placeholder="subject" v-model="subject"></li>
        <li>image : <input type="file" name="" id=""></li>
        <input type="submit" value="Save">
    </form>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            buyer:"",
            author:"",
            content:"",
            subject:""
        }
    },
    methods:{
        addBook(){
            console.log('adddd')
        }
    }
}
</script>

<style>

</style>
