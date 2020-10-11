<template>
    <div>
        <vue-simplemde v-model="reply.reply" />
        <v-card-actions>
            <v-btn icon small @click="update">
                <v-icon color="green">mdi-content-save</v-icon>
            </v-btn>
            <v-btn icon small @click="cancel">
                <v-icon color="black">mdi-close-circle</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
        name: "editReply",

        props:['reply'],

        methods:{
            cancel(reply){
                EventBus.$emit('cancelEditing', reply)
            },

            update(){
                axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.reply.reply})
                    .then(res => this.cancel(this.reply.reply))
            }
        }
    }
</script>

<style scoped>

</style>