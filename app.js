var one = new Vue({
    el: "#vue-app",
    data: {
        title: "App one",
    },
    methods: {
        readRefs: function () {
            console.log(this.$refs.input.value);
        },
    },
    computed: {},
});
