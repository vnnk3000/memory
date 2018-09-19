<template>
    <div :style="{fontSize:fSize+'px'}">
        <slot></slot>
    </div>
</template>

<script>

    let defaultWidth = 1600,
        defaultFont = 16,
        minWidth = 768,
        minHeight = 600,
        defaultHeight = 800;

    export default {
        name: 'Resize',
        mounted () {
            window.addEventListener('resize',this.onResize.bind(this))
        },
        data () {
            return {
                vW:  window.innerWidth,
                vH:  window.innerHeight
            }
        },
        computed: {
            fSize () {
                return 16*Math.min(Math.max(minWidth,this.vW)/defaultWidth,Math.max(minHeight,this.vH)/defaultHeight);
            }
        },
        methods: {
            onResize () {
                this.vW = window.innerWidth;
                this.vH = window.innerHeight;
            }
        }

    }
</script>

