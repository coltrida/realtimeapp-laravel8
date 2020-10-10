<template>
    <v-container fluid>
        <v-card>
            <v-form @submit.prevent="update">
                <v-text-field
                        v-model="form.title"
                        label="Title"
                        required
                        type="text"
                ></v-text-field>

                <vue-simplemde v-model="form.body" />

                <v-card-actions>
                    <v-btn icon type="submit">
                        <v-icon color="teal">mdi-content-save</v-icon>
                    </v-btn>

                    <v-btn icon @click="cancel">
                        <v-icon color="black">mdi-close-circle</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "editQuestion",

        props:['data'],

        data(){
            return {
                form: {
                    title: null,
                    body: null
                }
            }
        },

        methods:{
            cancel(){
                EventBus.$emit('cancelEditing')
            },

            update(){
                axios.patch(`/api/question/${this.form.slug}`, this.form)
                    .then(res => this.cancel())
            }
        },

        mounted(){
            this.form = this.data
        }
    }
</script>

<style scoped>

</style>
