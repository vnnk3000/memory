import socialShare  from './socialShare'

const ShareLink  = {
    install (Vue, option) {
        Vue.component(socialShare.name, socialShare)
    }
}

export default ShareLink