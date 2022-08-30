<template>

  <div>

    <h2 class="text-center mt-10 text-decoration-underline">Have a look at my projects</h2>

    <v-carousel class="mt-2">

      <v-carousel-item>

        <v-row>
          <v-col class="intro">
            <div class="intro-container">
              <h3 class="mb-5">My project</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi ipsum eum delectus repellendus magni perspiciatis culpa omnis molestias magnam!</p>
              <v-btn outlined rounded text>
                Button
              </v-btn>
            </div>

          </v-col>
          <v-col>
            <div class="container">

              <div class="mockup">
                <img
                  src="https://psdmockups.s3.amazonaws.com/wp-content/uploads/2013/12/apple-macbook-pro-retina-flat-design-front-view-vector-psd-mockup.jpg">
                <div class="artwork">
                  <img
                    src="https://cdn.dribbble.com/users/1254659/screenshots/4732851/attachments/1066732/sally-eaves-home-01.jpg">
                </div>
              </div>
            </div>

          </v-col>

        </v-row>
      </v-carousel-item>

      <v-carousel-item>

        <v-row>
          <v-col class="intro">
            <div class="intro-container">
              <h3 class="mb-5">My project</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi ipsum eum delectus repellendus magni perspiciatis culpa omnis molestias magnam!</p>
              <v-btn outlined rounded text>
                Button
              </v-btn>
            </div>

          </v-col>
          <v-col>
            <div class="container">

              <div class="mockup">
                <img
                  src="https://psdmockups.s3.amazonaws.com/wp-content/uploads/2013/12/apple-macbook-pro-retina-flat-design-front-view-vector-psd-mockup.jpg">
                <div class="artwork">
                  <img
                    src="https://cdn.dribbble.com/users/1254659/screenshots/4732851/attachments/1066732/sally-eaves-home-01.jpg">
                </div>
              </div>
            </div>

          </v-col>

        </v-row>
      </v-carousel-item>

      <v-carousel-item>

        <v-row>
          <v-col class="intro">
            <div class="intro-container">
              <h3 class="mb-5">My project</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi ipsum eum delectus repellendus magni perspiciatis culpa omnis molestias magnam!</p>
              <v-btn outlined rounded text>
                Button
              </v-btn>
            </div>

          </v-col>
          <v-col>
            <div class="container">

              <div class="mockup">
                <img
                  src="https://psdmockups.s3.amazonaws.com/wp-content/uploads/2013/12/apple-macbook-pro-retina-flat-design-front-view-vector-psd-mockup.jpg">
                <div class="artwork">
                  <img
                    src="https://cdn.dribbble.com/users/1254659/screenshots/4732851/attachments/1066732/sally-eaves-home-01.jpg">
                </div>
              </div>
            </div>

          </v-col>

        </v-row>
      </v-carousel-item>

    </v-carousel>


  </div>

</template>

<script>
export default {
  name: "Porjects",
}
</script>

<style scoped>
.container {
  padding: 1em 4em 4em;
  max-width: 800px;

}

img {
  width: 100%;
}

.mockup {
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.artwork {
  position: absolute;
  width: 76%;
  height: 75%;
  top: 9%;
  left: 11.75%;
  overflow: scroll;
}

.intro{
  position: relative;
}

.intro-container{
  position: absolute;
  top: 30%;
  left: 30%;
}
</style>