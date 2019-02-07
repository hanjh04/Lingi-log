<template>
    <div>
        <filter-component></filter-component>
        <search-component></search-component>
        <div>
            <table class="table table-hover">
                <colgroup> 
                    <col width="20px"/>
                    <col width="20%"/>
                    <col width="15%"/>
                    <col width="20%"/>
                    <col width="10%"/>
                    <col width="15%"/>
                    <col width="15%"/>
                </colgroup>
                <thead class="thead-dark">
                    <tr>
                        <th class="chkbox all"><input type="checkbox" @click="selectAll" v-model="allSelected"></th>
                        <th v-for="(columnNm, index) in columnNmList" :key="index">
                            {{columnNm.toUpperCase()}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in fetchedBookList" :key="item.idx" @click="getDetail(item.idx, $event, item, item.imgUrl)">
                        <td class="chkbox"><input type="checkbox" :value="item.idx" v-model="itemIdx"></td>
                        <td class="title">{{item.title}}</td>
                        <td class="image"><img class="img-thumbnail" :src=item.imgUrl alt="./"></td>
                        <td class="publisher">{{item.publisher}}</td>
                        <td class="keyword">
                            <ul>
                                <span v-for="keyword in item.keywords" :key="keyword.index" class="badge badge-info">
                                    {{keyword}}
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </ul>
                            <!-- </li> -->
                        </td>
                        <td class="owner">{{item.owner}}</td>
                        <td class="buyDate">{{new Date(item.buyDate.seconds*1000).toISOString().split("T")[0]}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btnArea">
            <router-link to="./bookManagement/addBook" class="btn btn-outline-primary" tag="button">Add</router-link>
            <button class="btn btn-outline-primary" @click="delBookInfo()">Del</button>
        </div>
    </div>
</template>

<script>
import FilterComponent from '@/components/common/FilterComponent'
import SearchComponent from '@/components/common/SearchComponent'
import store from '../../store/index.js';
import { mapGetters, mapActions } from 'vuex';

export default {
    components:{
        FilterComponent,
        SearchComponent
    },
    data(){
        return{
            allSelected:false,
            itemIdx:[],
            columnNmList:['title', 'image', 'publisher', 'keywords', 'owner', 'buy date']
        }
    },
    props:['rowCnt'],
    computed:{
        ...mapGetters(['fetchedBookList']),
    },
    watch:{
        itemIdx:function(changedIdx){
            if(changedIdx.length === this.fetchedBookList.length){
                this.allSelected = true;
            }else{
                this.allSelected = false;
            }
        }
    },
    methods:{
        ...mapActions({deleteBookInfo:'DELETE_BOOKINFO'}),
        selectAll() {
            this.itemIdx = []
            if (!this.allSelected) {
                for (var idx in this.fetchedBookList) {
                    this.itemIdx.push(this.fetchedBookList[idx].idx.toString());
                }
            }
        },
        getDetail(idx, event, item, imgUrl) {
            if(event.target.type !== 'checkbox') {
                this.$router.push({
                    name:'bookDetail',
                    params:{idx:idx, imgUrl:imgUrl},
                })
            }
        },
        delBookInfo(){
            if(this.itemIdx.length === 0){
                alert('click at least one item')
            }else{
                const res = confirm('really want to delete this row?')
                if(res){
                    this.itemIdx.forEach(idx => {
                        this.deleteBookInfo(idx)
                        .then(() => {
                            // this.$router.push({

                            // })
                            this.$router.replace(this.$router.path || '/');
                        })
                    })
                }
            }
        }
    }
}
</script>

<style>
.image img{
    width:auto;
    height:150px;
}
</style>
