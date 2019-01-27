<template>
    <div>
        <thead>
            <tr>
                <th class="chkbox all"><input type="checkbox" @click="selectAll" v-model="allSelected"></th>
                <th v-for="(columnNm, index) in columnNmList" :key="index">
                    {{columnNm.toUpperCase()}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in itemList" :key="item.idx">
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
</template>

<script>
export default {
    data(){
        return{
            allSelected:false,
            itemIdx:[],
        }
    },
    props:['itemList', 'columnNmList', 'rowCnt'],
    watch:{
        itemIdx:function(changedIdx){
            if(changedIdx.length === this.rowCnt){
                this.allSelected = true;
            }else{
                this.allSelected = false;
            }
        }
    },
    methods:{
        selectAll: function() {
            this.itemIdx = []
            if (!this.allSelected) {
                for (var idx in this.itemList) {
                    this.itemIdx.push(this.itemList[idx].idx.toString());
                }
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
