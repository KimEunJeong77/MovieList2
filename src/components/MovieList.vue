<template>
    <div class="container">
        <div 
            class="inner"
            :class="{'no-results':!movies.length}">
        <div class="message">
            {{ message }}</div>
        <div class="movies">
            <MovieItem 
                v-for="movie in movies"
                :key="movie.imdbID"
                :movie="movie" />
        </div>
        </div>
    </div>
</template>
<script>
import MovieItem from '~/components/MovieItem'
export default {
    components:{MovieItem},
    computed:{
        movies(){ return this.$store.state.movie.movies },
        message(){ return this.$store.state.movie.message },
        loading(){ return this.$store.state.movie.loading }
    }
}
</script>
<style scoped lang="scss">
.container{
    margin-top:30px;
    .inner{
        width:100%;
        background-color: gainsboro;
        text-align: center;
        &.no-results{
            padding:70px 0;
        }
    }
}
</style>