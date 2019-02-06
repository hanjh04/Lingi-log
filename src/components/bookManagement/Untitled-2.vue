    <template>
<div>
    <form @submit.prevent=saveBookInfo()>
        <ul v-if="isAddPage">
            <li>title : <input type="text" name="title" id="title" placeholder="book title" v-model="title" value="abcd"></li>
            <li>buyer : <input type="text" name="buyer" id="buyer" placeholder="buyer" v-model="buyer"></li>
            <li>author : <input type="text" name="author" id="author" placeholder="author" v-model="author"></li>
            <li>content : <input type="text" name="content" id="content" placeholder="content" v-model="content"></li>
            <li>subject : <input type="text" name="subject" id="subject" placeholder="subject" v-model="subject"></li>
            <li>image : <div id="imgArea"></div></li>
            <input type="file" accept="image/*" name="" @change="reader.readAsDataURL($event.target.files[0])">
            <input type="submit" value="Save">
        </ul>
        <ul v-else>
            <button @click.prevent="toggle()">Edit</button>
            <li>title : {{fetchedBookDetail.title}}</li>
            <li>buyer : {{fetchedBookDetail.buyer}}</li>
            <li>author : {{fetchedBookDetail.author}}</li>
            <li>content : </li>
            <li>subject : </li>
            <li>image : <div id="imgArea"></div></li>
        </ul>
    </form>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
const reader = new FileReader();

export default {
    data(){
        return{
            title:"",
            buyer:"",
            author:"",
            content:"",
            subject:"",
            imgUrl:"",
            isAddPage:true,
            bookImage:new Image()
        }
    },
    computed:{
        ...mapGetters(['fetchedBookDetail','fetchedImage'])
    },
    created() {
        console.log('created : ', this.fetchedImage)
    },
    watch: {
        fetchedImage:function(changedImg) {
            console.log('fetchedImage is changed')
            console.log(this.title, changedImg)
            this.setImage(changedImg);
        }
    },
    methods:{
        toggle(){
            this.isAddPage = !this.isAddPage;
        },
        fileReaderOnLoad(e){
            // const img = new Image();
            this.bookImage.src = e.target.result;

            if (this.bookImage.width > 300) { // holder width
                this.bookImage.width = 300;
            }
            
            this.setImage(this.bookImage)
        },
        // displayImage(e){
        //     if(e !== undefined){
        //         const file = e.target.files[0];
        //         reader.readAsDataURL(file);
        //     }else{
        //         console.log(typeof this.bookImage)
        //         reader.readAsDataURL(this.bookImage);
        //     }
        // },
        setImage(img){
            const imgArea = document.getElementById('imgArea');
            console.log(imgArea, typeof imgArea)
            console.dir(img)
            imgArea.innerHTML = '';
            imgArea.appendChild(img);
        },
        saveBookInfo(){
            const bookInfo = {};
            if(this.title === undefined || this.title === ''){
                alert('책 제목을 입력하세요');
                return;
            }
            bookInfo.title = this.title;
            bookInfo.buyer = this.buyer
            bookInfo.author = this.author
            bookInfo.content = this.content
            bookInfo.subject = this.subject

            console.log(JSON.stringify(bookInfo))
        }
    },
    beforeRouteEnter:(to, from, next)=>{
        next(vm=>{
            if(to.params !== undefined && to.params.idx !== undefined){
                vm.isAddPage = false;
            }
        });
    },
}
</script>

<style>

</style>
