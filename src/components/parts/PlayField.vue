<template>

    <div class="play-field">
        <div class="clearfix">
            <div v-for="(item,key) in arr" :key="key"  class="card" @click="rotateCard(key)" :class="{'is-flipped' : activeCard === key}">
                <div class="card__face card__face--front"></div>
                <div class="card__face card__face--back">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        data(){
            return {
                arrQty: 18,
                arr: [],
                activeCard: null
            }
        },

        methods:{
            createArray(n){
                var arr = [];
                for (var i = 0; i < n; i++) {
                    arr.push(i)
                }
                this.duplicateArray(arr);
            },
            duplicateArray(arr){
                var duplicated = arr.map(function(item) {
                    return [item, item];
                }).reduce(function(a, b) { return a.concat(b) });

                this.shuffle(duplicated);
            },
            shuffle(arr) {
                for (let i = arr.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
                this.arr = arr;

                return this.array;
            },
            rotateCard(num){
                this.activeCard = num
            }
        },

        mounted(){
            this.createArray(this.arrQty);
        }
    }
</script>


<style scoped>

</style>