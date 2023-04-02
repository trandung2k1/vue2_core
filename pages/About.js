import Header from '../components/Header.js';
const About = Vue.component('Home', {
    data() {
        return {
            title: 'About Page',
        };
    },
    template: `<div>
                    <h1>{{title}}</h1>
                    <Header/>
                </div>`,
});

export default About;
