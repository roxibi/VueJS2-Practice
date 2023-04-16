//notiz for test cases:
//row is made of test case name which receives ruleid as a  prop, and inside row is dialog component which receives test-case as prop. in each component there is a copy of the item. https://vueschool.io/lessons/reusable-components-with-props

Vue.component("greeting", {
    template:
        '<div><p>This greeting template prints the name {{name}} </p><button v-on:click="changeName">change name</button></div>',
    data: function () {
        return {
            name: "Yoshi",
        };
    },
    methods: {
        changeName: function () {
            this.name = "Mario";
        },
    },
});

var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "App one",
    },
    methods: {},
    computed: {
        greet: function () {
            return "hello from app one";
        },
    },
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "app two",
    },
    methods: {
        changeTitle: function () {
            one.title = "title changed";
        },
    },
    computed: {
        greet: function () {
            return "this is app 2";
        },
    },
});

two.title = "changed from outside vue instance";
