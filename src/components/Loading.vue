<template>
    <div class="box">
        <div class="computer-top">
            <div class="camera"></div>
            <div class="screen">
                <div class="code">
                    <div class="line line01"></div>
                    <div class="line line02"></div>
                    <div class="line line03"></div>
                    <div class="line line04"></div>
                    <div class="line line05"></div>
                    <div class="line line06"></div>
                    <div class="line line07"></div>
                    <div class="line line08"></div>
                    <div class="line line09"></div>
                    <div class="line line10"></div>
                    <div class="line line11"></div>
                    <div class="line line12"></div>
                    <div class="line line13"></div>
                    <div class="line line14"></div>
                    <div class="line line15"></div>
                </div>
            </div>
        </div>
        <div class="computer-bottom">
            <div class="keyboard"></div>
        </div>
        <div class="bottom-box"></div>
    </div>
</template>

<script>
export default {
    name: "laoding",
    data: ()=>{
        return {
            isLoaded: false
        }
    },
    mounted() {
        document.onreadystatechange= ()=>{
            if (document.readyState=="complete") {
                this.isLoaded= true;
            }
        }
    },
    methods: {
        
    },
}
</script>

<style>
body {
    background: #38beea;
}

.box {
    display: block;
    margin: auto;
    width: 700px;
    height: 500px;
    margin-top: 10%;
    position: relative;
}

.computer-top {
    position: absolute;
    width: 30%;
    height: 30%;
    left: 35%;
    top: 15%;
    background: #fff;
    border-radius: 4px 4px 0 0;
}

.camera {
    position: absolute;
    top: 3.5%;
    left: 47%;
    width: 3%;
    height: 4%;
    background: #222;
    border-radius: 50%;
}

.screen {
    position: absolute;
    width: 90%;
    left: 5%;
    height: 80%;
    top: 10%;
    background: #222;
    overflow: hidden;
}

.code {
    position: absolute;
    width: 92%;
    height: 400%;
    padding: 4%;
    animation: slide 1s linear infinite;
    top: 0%;
}

.line {
    width: 30%;
    height: 1%;
    background: #fff;
    margin-bottom: 4%;
    border-radius: 50px;
}

.line02,
.line03,
.line04,
.line06,
.line07,
.line08,
.line10,
.line11,
.line12,
.line14,
.line15 {
    margin-left: 10%;
}

.computer-bottom {
    position: absolute;
    width: 37.5%;
    height: 10%;
    left: 31.2%;
    top: 45%;
    background: #fff;
    -webkit-clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
    clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
}

.keyboard {
    position: absolute;
    width: 90%;
    height: 80%;
    left: 5%;
    top: 5%;
    background: #333;
    -webkit-clip-path: polygon(8% 0, 92% 0, 100% 100%, 0% 100%);
    clip-path: polygon(8% 0, 92% 0, 100% 100%, 0% 100%);
}

.bottom-box {
    position: absolute;
    width: 37.5%;
    left: 31.2%;
    height: 2%;
    top: 55%;
    background: #e2e2e2;
}

@keyframes slide {
    0% {
        top: 0%;
    }

    100% {
        top: -40%;
    }
}
</style>