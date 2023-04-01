Vue.component('todo-item', {
    template: '<li>{{todo.title}}</li>',
    props: ['todo'],
    mounted() {
        console.log('Todo item mounted');
    },
    destroyed() {
        console.log('Destroyed'); // ===  cleanup function react
    },
    beforeDestroy: function () {
        console.log('BeforeDestroy');
    },
});
