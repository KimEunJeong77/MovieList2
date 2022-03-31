<template>
    <div class="container">
        <div class="inner">
        <input 
            @keydown.enter="apply"
            type="text" 
            v-model="title" 
            class="form-control" />
        <div class="selects">
            <select 
                class="form-select"
                v-model="$data[filter.name]"
                v-for="filter in filters"
                :key="filter.name">
                <option 
                    v-if="filter.name==='year'"
                    value="">All Years</option>
                <option
                    v-for="item in filter.items"
                    :key="item">
                    {{ item }}
                </option>
            </select>
        </div>
        <button @click="apply" class="btn btn-primary">Apply</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'', type:'movie', number:'10', year:'',
            filters:[
                {name:'type',items:['movie','series','episode']},
                {name:'number',items:[10,20,30]},
                {name:'year',items:(()=>{
                    const thisYear=new Date().getFullYear();
                    const years=[];
                    for(let y=thisYear; y>=1900; y--) years.push(y);
                    return years;
                })()}
            ]
        }
    },
    methods:{
        apply(){
            this.$store.dispatch('movie/searchMovies',{
                title:this.title, 
                type:this.type, 
                number:this.number, 
                year:this.year
            });
        }
    }
}
</script>
<style scoped lang="scss">
.container{
    margin-top:30px;
    .inner{
        display:flex;
        .selects{
            display:flex;
            select{
                width:120px;
            }
        }
    }
}
</style>