const app = new Vue({
  el: "#app",
  data() {
    return {
      value: 0,
      message: "클릭 카운터입니다.",
      count: 0,
      show: true
    };
  },

  methods: {
    calcMinus() {
      this.value -= 1;
    },

    calcPlus() {
      this.value += 1;
    }
  }
});
