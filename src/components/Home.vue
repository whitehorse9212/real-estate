<template>
<div>

    <div class="container is-fluid">
        <div v-bind:style="{position: 'absolute', top: '30px', right: '1%', width: '96%'}">
            <navbar></navbar>
        </div>
        <b-embed type="video" autoplay loop aspect="4by3" id="videoTag" v-bind:poster="videoImgUrl">
            <source v-bind:src="videofile" type="video/mp4">
        </b-embed>

        <div class="hero-body center_part">
            <div class="container has-text-centered">
                <h2 class="subtitle is-4 has-text-white">
                    QUALITY HOMES IN PRIME LOCATIONS
                </h2>
                <h1 class="title is-1 has-text-white">
                    PROPERTY
                </h1>
                <h2 class="subtitle is-4 has-text-white">
                    DEVELOPERS & ADVISORS
                </h2>
                <br>
                <p><a class="button">SEARCH PROPERTIES</a></p> <br>
                <p></p>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Navbar from "./features/Navbar"

export default {
    name: 'Dashboard',
    data: {

    },
    data() {
        return {
            videoImgUrl: './static/video.jpg',
            videofile: './static/video.mp4',

        }

    },
    components: {
        Navbar,
    },
    mounted() {
    },
    methods: {
    },
}
</script>

<style scoped>
.container.is-fluid {
    margin: 15px;
}
.center_part{
    position: absolute;
    top: 30%;
    width: 100%;
    color: #fff;
}
#videoTag:after {

    background: rgba(0, 0, 0, .2);
}

</style>
