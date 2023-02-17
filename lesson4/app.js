const h = Vue.h

const app = Vue.createApp({
    data() {
      return {
          title: "Это из свойства Template"
      }
    },
    // template: `
    //     <div class="card center">
    //         <h1>{{title}}</h1>
    //         <button class="btn" @click="title = 'Изменили'">Изменить</button>
    //     </div>
    // `
    methods: {
        changeTitle() {
            this.title = 'Изменили!'
        }
    },

    render() {
        return ( h('div', {
            class: 'card center'
        },
            [
                h('h1',{}, this.title),
                h('button', {
                    class: 'btn',
                    onClick: this.changeTitle
                }, 'Изменить')
            ])
        )
    }
})


app.mount('#app')

Vue.createApp({
    data() {
        return {
            title: 'Новый Title 2'
        }
    }
}).mount('#app2')

// =====

const data = {
    title: 'Vue3',
    message: 'Заголовок это: Vue3'
}

const proxy = new Proxy(data,{
    get(target, p) {
    },
    set(target, p, value) {
        if (key === 'title') {
            target.message = 'Заголовок это: ' + value
        }
        target[key] = value
    }
})


