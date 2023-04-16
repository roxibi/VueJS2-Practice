//how to access a value from an input and store it with refs

var one = new Vue({
    el: "#vue-app",
    data: {
        title: "App one",
        output: "Your fav food"
    },
    methods: {
        readRefs: function () {
          console.log(this.$refs.test.innerText)
            this.output=this.$refs.input.value;
        },
    },
    computed: {},
});
