<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question
                        v-for="question in questions"
                        :key="question.path"
                        :data=question
                ></question>

                <div class="text-center">
<!--                    <v-pagination
                            v-model="meta.current_page"
                            :length="numPag"
                            @input="changePage"
                    ></v-pagination>-->
                </div>
            </v-flex>

            <v-flex xs4>
                <app-sidebar></app-sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Question from './question'
    import AppSidebar from './AppSidebar'
    export default {
        name: "Forum",

        data(){
            return {
                questions: {},
                meta: {},
                numPag: 0
            }
        },

        components: {Question, AppSidebar},

        created() {
            this.fetchQuestions()
        },

        methods:{
            fetchQuestions(page){
               // let url = page ? `/api/question?page=${page}` : '/api/question'
                let url = '/api/question'
                axios.get(url)
                    .then(res => {
                        this.questions = res.data.data
                       // this.meta = res.data.meta
                        //this.numPag = Math.ceil(this.meta.total / this.meta.per_page)
                    })
                    .catch(error => console.log(error.response.data))
            },

            changePage(page){
                this.fetchQuestions(page)
            }
        }
    }
</script>

<style scoped>

</style>
