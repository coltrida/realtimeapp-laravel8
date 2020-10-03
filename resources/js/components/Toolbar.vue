<template>
    <v-card
            color="grey lighten-4"
            flat
            tile
    >
        <v-toolbar
                color="grey lighten-4"
        >
<!--            <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
            <v-toolbar-title>Single Page Forum</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link to="/login">
                <v-btn text> Forum </v-btn>
            </router-link>
            <router-link to="/login">
                <v-btn text> Ask Question </v-btn>
            </router-link>
            <router-link to="/login">
                <v-btn text> Category </v-btn>
            </router-link>
            <router-link to="/login">
                <v-btn text> Login </v-btn>
            </router-link>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>
