<template>
    <v-app-bar app class="grey lighten-1">
        <div class="d-flex align-center">
            <fa alt="Logo" class="shrink mr-2 display-4 mx-10" contain icon="coffee" transition="scale-transition"
                width="50" />
            <div class="name">
                <h1>F</h1>
                <h1 class="t">T</h1>
            </div>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">

            <v-list-item v-for="item in items" :key="item.title" link class="mr-10">
                <!-- <v-list-item-icon>
            <v-icon>{{ item }}</v-icon>
          </v-list-item-icon> -->

                <v-list-item-content>
                    <v-list-item-title>
                        <router-link class="link" :to="{ name: item }">{{ item }}</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </div>



    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
    data: function () {
        return {
            drawer: null,
            items: ["Home", "About", "Contact"]
        }
    },



}
</script>

<style scoped>
.link {
    color: white;
    text-decoration: none;
    font-size: 30px;
}

.t {
    position: relative;
    left: -10px;
}

.name{
    display:flex;
    transform:rotate(90deg) translateY(23px);
    
}
</style>