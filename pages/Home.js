const Home = Vue.component('Home', {
    data() {
        return {
            name: 'Tran Van Dung',
        };
    },
    template: `<div>
                    <h1>{{name}}</h1>
                </div>`,
});

export default Home;
