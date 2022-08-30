<template>
    <header class="elevation-2 grey lighten-1">

        <v-container grid-list-xl >
            <v-row>

                <v-col xs12 md8 text-xs-center class="col-8">
                    <v-card id="jumbo-card" flat class="card  grey lighten-1 text-center">
                        <h1 class="display-3 mb-3">Fatih Tuzun</h1>
                        <h2 >Full Stack Web Developer</h2>
                        <h2>
                            2 years software development experience
                            <p>Vue.js, Bootstrap, HTML, CSS,
                                Python, MySQL,  etc.</p>
                        </h2>
                    </v-card>
                </v-col>

                <v-col class="col-4 avatar">

                    <v-avatar class="grey lighten-4 mt-10" rounded v-if="isAvatarVisible" :size="avatarSize">
                        <img :src="imageProfile" />
                    </v-avatar>

                </v-col>

            </v-row>
        </v-container>

    </header>
</template>

<script>
export default {

    data() {
        return {
            avatarSize: 250,
            gradient: 'to right, #004, #1CB5E0',
            isAvatarVisible: false
        }
    },
    props: {
        folderImage: {
            type: String,
            default: ''
        }
    },
    computed: {
        imageProfile() {
            return this.folderImage + 'profile.jpg';
        }
    },
    methods: {

    },
    mounted() {
        // To trigger animation
        this.isAvatarVisible = true;
    }

};
</script>

<style scoped>
p {
    font-size: medium;
}

header {
    height: 50vh !important;
}

.card{
    
    margin: 0;
    position: absolute;
    top: 5%;
    left: 10%;
}
</style>