<template>
    <div>
        <span>Book List</span>
        <filter-component></filter-component>
        <search-component></search-component>
        <div>
            <colgroup> 
                <col width="20px"/>
                <col width="20%"/>
                <col width="20%"/>
                <col width="20%"/>
                <col width="10"/>
                <col width="15"/>
                <col width="15"/>
            </colgroup>
            <thead>
                <tr>
                    <th class="chkbox all"><input type="checkbox" @click="selectAll" v-model="allSelected"></th>
                    <th v-for="(columnNm, index) in columnNmList" :key="index">
                        {{columnNm.toUpperCase()}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in fetchedBookList" :key="item.idx" @click="getDetail(item.idx, $event, item)">
                    <td class="chkbox"><input type="checkbox" :value="item.idx" v-model="itemIdx"></td>
                    <td class="title">{{item.title}}</td>
                    <td class="image"><img :src=item.imgUrl alt="./"></td>
                    <td class="publisher">{{item.publisher}}</td>
                    <td class="keyword">
                        <li v-for="keyword in item.keywords" :key="keyword.index">
                            {{keyword}}
                        </li>
                    </td>
                    <td class="owner">{{item.owner}}</td>
                    <td class="buyDate">{{item.buyDate.seconds}}</td>
                </tr>
            </tbody>
        </div>
        <div class="btnArea">
            <router-link to="./bookManagement/addBook" tag="button">Add</router-link>
            <button>Del</button>
            <button>Modify</button>
        </div>
    </div>
</template>

<script>
import FilterComponent from '@/components/common/FilterComponent'
import SearchComponent from '@/components/common/SearchComponent'
import store from '../../store/index.js';
import { mapGetters } from 'vuex';

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
        selectAll() {
            this.itemIdx = []
            if (!this.allSelected) {
                for (var idx in this.fetchedBookList) {
                    this.itemIdx.push(this.fetchedBookList[idx].idx.toString());
                }
            }
        },
        getDetail(idx, event, item) {
            if(event.target.type !== 'checkbox') {
                this.$router.push({
                    name:'bookDetail',
                    params:{idx:idx},
                })
            }
            
        }
    }
}
</script>

<style>
.image img{
    width:auto;
    height:200px;
}
</style>
