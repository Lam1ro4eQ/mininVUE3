Vue.createApp({
    // data() {
    //     return {
    //
    //     }
    // }
    data: () => ({
        title: 'Заголовок',
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(i) {
            this.items.splice(i,1)
        },
        log(item) {
            console.log('log item:', item)
        }
    },
    computed: {
        eventItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')