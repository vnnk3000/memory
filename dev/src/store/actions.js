import Vue from 'vue'

const URL_ROOT = '/api';

export const GET_SOCIAL_URL = ({commit, state}) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(URL_ROOT + '/auth/social-url').then(
            (response) => {
                resolve();
            },
            () => {
                reject();
            }
        )
    })
}

export const LOGOUT = ({commit, state}) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(URL_ROOT + '/auth/logout').then(
            () => {
                resolve();
            },
            () => {
                reject()
            })
    })
}

export const SOCIAL_LOGIN = ({commit, state}, sn) => {
    let url = state.url[sn];

    let screenX = (typeof window.screenX !== 'undefined') ? window.screenX : window.screenLeft;
    let screenY = (typeof window.screenY !== 'undefined') ? window.screenY : window.screenTop;
    let outerWidth = (typeof window.outerWidth !== 'undefined') ? window.outerWidth : document.body.clientWidth;
    let outerHeight = (typeof window.outerHeight !== 'undefined') ? window.outerHeight : (document.body.clientHeight - 22);
    let width = 800;
    let height = 600;
    let left = parseInt(screenX + ((outerWidth - width) / 2), 10);
    let top = parseInt(screenY + ((outerHeight - height) / 2.5), 10);
    let features = ( 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top );

    return new Promise((resolve, reject) => {
        let win = window.open(url, "_blank", features);

        let watch_timer = setInterval(() => {
            try {
                if (win.closed) {
                    clearInterval(watch_timer);
                    GET_USER().then(
                        (response) => {
                            resolve();
                        },
                        () => {
                            reject();
                        }
                    )
                }
            } catch (e) {
                reject();
            }
        }, 200);
    });
}

export const GET_USER = ({commit, state}) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(URL_ROOT + '/user').then(
            (response) => {
                resolve();
            },
            () => {
                reject();
            })
    })
}
