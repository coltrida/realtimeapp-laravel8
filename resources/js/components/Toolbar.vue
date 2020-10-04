<template>
    <v-card
            color="grey lighten-4"
            flat
            tile
    >
        <v-toolbar
                color="grey lighten-4"
        >
            <v-toolbar-title>Single Page Forum</v-toolbar-title>
            <v-spacer></v-spacer>

            <router-link
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    v-if="item.show"
            >
                <v-btn text>
                    {{ item.title }}
                </v-btn>
            </router-link>

        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "Toolbar",
        data() {
            return {
                loggedIn: User.loggedIn(),
                items:[
                    {title : 'Forum', to: '/forum', show: true},
                    {title : 'Ask Question', to: '/ask', show: User.loggedIn()},
                    {title : 'Category', to: '/category', show: User.admin()},
                    {title : 'Login', to: '/login', show: !User.loggedIn()},
                    {title : 'Logout', to: '/logout', show: User.loggedIn()},
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout()
            })
        }
    }
</script>

<style scoped>

</style>
