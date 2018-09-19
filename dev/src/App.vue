<template>
    <Resize id="app" class="app-layout">
        <div class="container">
            <div class="preview-text">
                <Logo class="logo"></Logo>
                <h3></h3>
            </div>

            <menu-app></menu-app>

            <div class="center">
                <router-view></router-view>
            </div>


            <ul class="social-list">
                <li>
                    <share-link network="fb" url="http://develup.pro/" class="icon">
                        <fb></fb>
                    </share-link>
                </li>
                <li>
                    <share-link network="vk" url="http://develup.pro/" class="icon">
                        <vk></vk>
                    </share-link>
                </li>
                <li>
                    <share-link network="ok" url="http://develup.pro/" class="icon">
                        <ok></ok>
                    </share-link>
                </li>
                <li>
                    <share-link network="tw" url="http://develup.pro/" title="" class="icon">
                        <tw></tw>
                    </share-link>
                </li>
            </ul>


        </div>
    </Resize>
</template>

<script>

    import Resize from '@/components/common/Resize';
    import Menu from '@/components/common/Menu';
    import Logo from './assets/svg/develup_logo.svg';

    import icons from '@/assets/svg/social';

    import vk from '@/assets/svg/social/vk.svg';

    export default {
        name: 'app',
        components: {
            vk: icons.vk,
            fb: icons.fb,
            ok: icons.ok,
            googleplus: icons.googleplus,
            tw: icons.tw,
            Logo,
            'menu-app': Menu,
            Resize
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .logo{
        margin-top: 60px;
    }
    .social-list  {
        text-align: center;
        li{
            width: 1.5em;
            height: 1.5em;
            margin: 1em .5em;
            display: inline-block;
        }
    }
</style>
