<template>
<div>
    <form @submit.prevent=save() v-if="isAddPage">
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">TITLE</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="title" placeholder="Title"  v-model="bookInfo.title">
            </div>
            <!-- <li>title : <input type="text" name="title" id="title" placeholder="book title" v-model="bookInfo.title"></li> -->
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">BUYER</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="buyer" id="buyer" placeholder="buyer" v-model="bookInfo.buyer">
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">AUTHOR</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="author" id="author" placeholder="author" v-model="bookInfo.author">
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">CONTENT</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="content" id="content" placeholder="content" v-model="bookInfo.content">
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">SUBJECT</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="subject" v-model="bookInfo.subject">
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">BUY DATE</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="buyDate" id="buyDate" v-model="bookInfo.buyDate">
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">IMAGE</label>
            <div class="col-sm-10">
                <div id="imgArea" >{{displayImage(bookImageBlob)}}</div>
                <input type="file" class="form-control-file" id="imgFile" accept="image/*" name="" @change="displayImage($event.target.files[0])">
            </div>
            <!-- <li>image : </li> -->
        </div>
        <input type="submit" class="btn btn-primary mb-2" value="Save">
        
    </form>
    <form v-else>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">TITLE</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="title" :value="bookInfo.title" readonly>
            </div>
            <!-- <li>title : <input type="text" name="title" id="title" placeholder="book title" v-model="bookInfo.title"></li> -->
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">BUYER</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" name="buyer" id="buyer" :value="bookInfo.buyer" readonly>
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">AUTHOR</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" name="author" id="author" :value="bookInfo.author" readonly>
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">CONTENT</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" name="content" id="content" :value="bookInfo.content" readonly>
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">SUBJECT</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" name="subject" id="subject" :value="bookInfo.subject" readonly>
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">BUY DATE</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" name="buyDate" id="buyDate" v-model="bookInfo.buyDate" readonly>
            </div>
        </div>
        <div class="form-group row" >
            <label for="title" class="col-sm-2 col-form-label">IMAGE</label>
            <div class="col-sm-10">
                <div id="imgArea" ></div>
            </div>
        </div>
        <button class="btn btn-primary mb-2" @click.prevent="toggle()">Edit</button>
    </form>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { saveBookInfo } from '../../api';
const reader = new FileReader();

export default {
    data(){
        return{
            bookInfo:{
                title:"",
                buyer:"",
                author:"",
                content:"",
                subject:"",
                imgUrl:"",
                idx:new Number(),
                buyDate:new Date()
            },
            isAddPage:true,
            isNewBook:true,
            bookImage:new Image(),
            bookImageBlob:new Blob()
        }
    },
    computed:{
        ...mapGetters(['fetchedBookDetail','fetchedImage', 'fetchedBookList']),
    },
    created() {
        console.log('created')
        if(this.$route.params !== undefined && this.$route.params.idx !== undefined){
            this.isAddPage = false;
            this.isNewBook = false;
        }else{
            this.initBookinfo();
        }

        reader.onload = this.fileReaderOnLoad;
        this.setBookInfo(this.fetchedBookDetail)
    },
    watch: {
        fetchedImage:function() {
            if(this.fetchedImage.size === 0) return;
            this.bookImageBlob = this.fetchedImage;
            this.displayImage(this.bookImageBlob);
        }
    },
    methods:{
        ...mapMutations({initBookinfo:'INIT_BOOKINFO'}),
        ...mapActions({saveBookInfo:'SAVE_BOOKINFO', saveBookImage:'SAVE_BOOKIMAGE'}),
        setBookInfo({title, owner, author, content, subject, imgUrl, buyDate}){
            this.bookInfo.title = title || '';
            this.bookInfo.buyer = owner || '';
            this.bookInfo.content = content || '';
            this.bookInfo.subject = subject || '';
            this.bookInfo.imgUrl = imgUrl || '';
            this.bookInfo.author = author || '';
            
            if(buyDate === undefined || buyDate.seconds === undefined){
                this.bookInfo.buyDate = new Date().toISOString().split("T")[0];
            }else{
                this.bookInfo.buyDate = new Date(buyDate.seconds*1000).toISOString().split("T")[0];
            }

            if(this.bookInfo.imgUrl !== undefined && this.bookInfo.imgUrl !== ''){
                this.$store.dispatch('FETCH_IMAGE', this.bookInfo.imgUrl)
                    .then()
                    .catch((error) => console.log(error))
            }
        },
        toggle(){
            this.isAddPage = !this.isAddPage;
            console.log(document.getElementById('imgFile'))
        },
        fileReaderOnLoad(e){
            this.bookImage.src = e.target.result;

            if (this.bookImage.width > 300) {
                this.bookImage.width = 300;
            }
            
            this.setImage(this.bookImage)
        },
        displayImage(file){
            if(file.size === 0) return;
            reader.readAsDataURL(file);
        },
        setImage(img){
            const imgArea = document.getElementById('imgArea');
            imgArea.innerHTML = '';
            imgArea.appendChild(img);
            imgArea.firstElementChild.classList.add("img-thumbnail");
        },
        save(){
            if(this.bookInfo.title === undefined || this.bookInfo.title === ''){
                alert('책 제목을 입력하세요');
                return;
            }
            if(this.bookInfo.buyDate === undefined || this.bookInfo.buyDate === ''){
                alert('Buy Date 가 오늘로 설정되었습니다.')
                this.bookInfo.buyDate = new Date().toISOString().split("T")[0];
            }
            // console.log(this.bookInfo)
            this.bookInfo.idx = this.fetchedBookList[this.fetchedBookList.length-1].idx + 1;
            this.bookInfo.buyDate = new Date(this.bookInfo.buyDate);
            if(document.getElementById('imgFile').files !== undefined && document.getElementById('imgFile').files[0] !== undefined){
            //     save image... return 받고 
                console.log('image save')
                const file = document.getElementById('imgFile').files[0];
                this.saveBookImage({file})
                .then(res => {
                    const imgUrl = res;
                    this.bookInfo.imgUrl = imgUrl;
                    saveBookInfo(this.bookInfo)
                    this.$router.replace(this.$route.query.redirect || '/')
                })
                .catch(error => {
                    alert('저장 실패!')
                    console.log(error)
                })
                return;
            }
            saveBookInfo(this.bookInfo)
            .then(res => {
                this.$router.replace(this.$route.query.redirect || '/')
            })
            .catch(error => {
                console.log(error)
            })
            // saveBookInfo({"idx":4,"title":"Head First Design Patterns","author":"에릭프리먼","imgUrl":"https://firebasestorage.googleapis.com/v0/b/my-web-e191b.appspot.com/o/123104887.jpg?alt=media&token=529d6d78-e70c-448f-a50f-4f5cd7b0b0b3"});
            // console.log(JSON.stringify(this.bookInfo))
        },
        a(){
            const ref = firebase.storage().ref();
            const file = document.querySelector('#photo').files[0]
            const name = (+new Date()) + '-' + file.name;
            const metadata = {
                contentType: file.type
            };
            const task = ref.child(name).put(file, metadata);
            task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
                console.log(url);
                document.querySelector('#someImageTagID').src = url;
            })
            .catch(console.error);
        }
    },
}
</script>

<style>
#imgArea img{
    width:auto;
    height:200px;
}
</style>
