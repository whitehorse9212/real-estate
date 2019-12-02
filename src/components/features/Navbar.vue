<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <!-- <a class="navbar-brand mr-auto text-uppercase order-1" href="#">
            
            <img class="img-fluid unpinned" v-bind:src="logo" alt="">
	    </a> -->
        <div class="navbar-brand navbar-start">
            <a class="navbar-item image " href="#">
                <img v-bind:src="logo">
            </a>

            <a role="button" class="navbar-burger burger" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu navbar-end" v-bind:class="{ 'is-active' : showNav }">
            <div class="navbar-end is-size-7">
                <a class="navbar-item">
                    <span>OUR PROPERTIES</span>
                </a>
                <a class="navbar-item">
                    <span>CONTACT</span>
                </a>
                <a class="navbar-item">
                    <span>MENU</span>
                </a>
            </div>
        </div>    
    </nav>
</template>

<script>



export default {
    name: 'Navbar',
    props: [''],
    data() {
        return {
            showNav: false,
            logo: './static/solvilla-sm.svg',
            navLogin: true
        }
    },
    components: {
 
    },
    mounted() {


    },
    methods: {

    }
}
</script>
<style scoped>

    .navbar {
        background-color: transparent;
    }
    .navbar-item, .navbar-link {
        color: #fff
    }
    .navbar-item img {
        max-height: 3rem;
    }
</style>