import axios from 'axios'
export default{
    // store/index.js파일에서 모듈로 관리하겠다는 선언  modules:{ movie }
    namespaced:true,
    // data
    state:()=>({
        movies:[],
        message:'Search for movie title',
        loading:false
    }),
    // computed
    getters:{},
    // methods
    // 변이를 통해서만 state의 값을 변경
    mutations:{
        updateState(state,payload){
            Object.keys(payload).forEach(key=>{
                state[key]=payload[key]
            })
        },
        resetMovie(state){
            state.movies=[]
        }
    },
    // methods actions에 만드는 메서드들은 비동기함수로동작
	// context.state, context.getters, context.commit(변이접근할때)
	// 복잡해지므로 객체구조분해로 { state, context, commit }
    actions:{
        async searchMovies(context,payload){
            const OMDB_API_KEY='7035c60c';
            const { title, type, number, year }=payload
            const res=await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`);
            
            context.commit('updateState',{
                movies:res.data.Search,
                message:''
            })
        }
    }
}