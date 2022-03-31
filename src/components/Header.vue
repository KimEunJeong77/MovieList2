<template>
    <div class="nav nav-pills">
        <div 
            class="nav-item"
            v-for="nav in navigations"
            :key="nav.name">
            <router-link
                active-class="active"
                class="nav-link"
                :to="nav.href">
                {{ nav.name }}
            </router-link>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            navigations:[
                {name:'Home',href:'/'},
                {name:'Movie',href:'/movie'},
                {name:'About',href:'/about'}
            ]
        }
    }
}
</script>
