<template>
    <div class="movie">
        {{ movie.imdbID }}
    </div>
</template>
<script>
export default {
    props:{
        movie:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>