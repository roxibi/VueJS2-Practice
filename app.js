var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "App one",
    },
    methods: {},
    computed: {
        greet: function () {
          return  "hello from app one";
        },
    },
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "app two",
    },
    methods: {
      changeTitle:function(){
        one.title='title changed'
      }
    },
    computed: {
        greet: function () {
           return "this is app 2";
        },
    },
});

two.title="changed from outside vue instance"