<template>
    <a href="#" @click.prevent="onShareStart">
        <slot></slot>
    </a>
</template>

<script>

    const URLS = {
        "vk" : "https://vk.com/share.php?url=",
        "fb" : "https://www.facebook.com/sharer/sharer.php?u=",
        "tw" : "https://twitter.com/intent/tweet?text=&hashtags=&url=",
        "ok" : "https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st._aid=ExternalShareWidget_SharePreview&st.shareUrl=",
        "tg" : "https://telegram.me/share/url?url="
    };


    export default {
        name: 'shareLink',
        props: {
            network : {
                type: [String],
                required: true
            },
            url: {
                type: [String],
                required: true,
            },
            title: {
                type: [String],
                required: false,
                default: ''
            },
            description: {
                type: [String],
                required: false,
                default: ''
            },
            image: {
                type: [String],
                required: false,
                default: ''
            }
        },
        components: {

        },
        methods : {

            sharePopup (url, width, height) {
                //  console.log(url);
                if (!width) width = 400;
                if (!height) height = 400;

                let share_window = window.open(url, '_blank', 'height=' + height + ',width=' + width + ',menubar=no,toolbar=no,location=no');
                let watch_timer = setInterval(function () {
                    if (share_window.closed) {
                        clearInterval(watch_timer);
                        this.$emit('onShareClose')
                        return;
                    }
                }, 200);

            },

            onShareStart () {
                this.sharePopup(URLS[this.network] + encodeURIComponent(this.url), 550, 300);
            }
        }
    };
</script>

