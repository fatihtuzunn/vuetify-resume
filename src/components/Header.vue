<template>
    <header class="elevation-2 grey lighten-1">

        <v-container grid-list-xl>
            <v-row class="cardd">

                <v-col xs12 md8 text-xs-center class="col-6">
                    <v-card id="jumbo-card" flat class="card  grey lighten-1 text-center">
                        <h1 class="display-3 mb-3">Fatih Tüzün</h1>
                        <h2>Full Stack Web Developer</h2>
                        <h2>
                            2 years software development experience
                            <p>Vue.js, Bootstrap, HTML, CSS,
                                Python, MySQL, etc.</p>
                        </h2>
                        <div class="icon-row">
                            
                            <fa id="i" contain :icon="['fab', 'twitter']" width="50" />
                            <fa id="i" contain :icon="['fab', 'linkedin']" width="50" />
                            <fa id="i" contain :icon="['fab', 'github']" width="50" />
                            
                        </div>
                    </v-card>
                </v-col>

                <v-col class="col-6  d-flex flex-column">

                    <v-avatar class="avatar" rounded v-if="isAvatarVisible" :size="avatarSize">
                        <img class="avatarImg mb-12 mr-5" src="../assets/building_blocks.svg" />
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
            avatarSize: 400,
            gradient: 'to right, #004, #1CB5E0',
            isAvatarVisible: false,
        }
    },
    props: {
        folderImage: {
            type: String,
            default: ''
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
    margin-top: 5vh;
}
.cardd {

    margin-top: 10vh;

}

.avatar{
    max-width: 20rem;
    margin: auto;
    margin-bottom: 50px;
}

.icon-row {
  margin: 45px auto;
  width: 100%;
}
.icon-row #i {
  border-radius: 4px;
  cursor: pointer;
  font-size: 44px;
  margin: 0px 20px;
  padding: 20px 30px;
  transition: all 400ms ease-in-out;
}
.icon-row #i:hover {
  background: #FFF;
  color: #ca5549;
}
</style>