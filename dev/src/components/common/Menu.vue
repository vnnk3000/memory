<template>
    <menu>
        <router-link to="/">На главную</router-link> /
        <router-link to="/page2">На внутреннюю</router-link>
    </menu>
</template>

<script>
    export default {
        name: 'Menu',
    }
</script>

<style scoped>
    menu{
        margin: 1em 0 3em;
        padding: 0;
        text-align: center;
    }
    a{
        color: #1262b3;
        margin: 0 1em;
    }
    a:hover{
        color: #e20613;
    }
</style>