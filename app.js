const app = new Vue({
    el: '#app',
    data: {
        message: 'This is my message',
        name: 'Dung',
        todos: [
            {
                id: 1,
                title: 'Clean room',
            },
            {
                id: 2,
                title: 'Read book',
            },
        ],
        isDisplay: true,
        counter: 10,
        rawHtml: "<span style='color: red'>Xin chao</span>",
        isDisabled: true,
        isStyled: true,
        age: '',
    },
    methods: {
        handleClick: function () {
            // console.log(this.message);
            alert(this.message);
        },
        handleToggle: function () {
            this.isDisplay = !this.isDisplay;
        },
        handleName() {
            this.name = 'Haha';
        },
        // handleSubmit() {
        //     console.log('Handle Submit');
        // },
        handleSubmit(e) {
            e.preventDefault();
            console.log('Handle Submit');
        },
    },
    created: function () {
        //Call api
        //Access data
        //The created hook runs before the templates and Virtual DOM have been mounted or rendered - you are able to access reactive data and events that are active
        console.log('Created');
        setInterval(() => {
            if (this.counter > 0) this.counter--;
        }, 1000);
    },
    beforeUpdate() {
        console.log('BeforeUpdated');
        console.log(this.counter);
    },
    updated() {
        console.log('Updated');
        if (this.counter > 0) {
            +this.$refs['count'].textContent === this.counter;
        } else {
            this.counter === 0;
        }
    },
    mounted() {
        //work with DOM: get element
        // Change DOM
        console.log('Mounted');
        // this.$refs.input.focus();
    },
    beforeCreate() {
        //data has not been made reactive, and events have not been set up yet
        console.log(this.message); // undefined
    },
    beforeMount() {
        //The beforeMount hook runs right before the initial render happens and after the template or render functions have been compiled
        console.log(this.$refs.input); //undefined
        // document.title = 'App';
    },
    computed: {
        doubleAge() {
            return this.age;
        },
    },
    watch: {
        name(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        },
        doubleAge(newValue) {
            alert(`yes, computed property changed: ${newValue}`);
        },
    },
});

app.$el === document.getElementById('root');
console.log(app);

//Shorthand
//v-bind:href="url" => :href="url"
//v-on:click="handleClick" => :click="handleClick"
//computed(get, set): execute when variables dependent changed, using data, using cached => performance
//method: execute when called
// watch: variables, prop, computed
//v-show: change display css, DOM still exists