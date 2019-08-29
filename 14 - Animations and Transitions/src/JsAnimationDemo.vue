<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>2. JS Animations</h1>
      <hr />
      <!-- JS Event Hooks -->

      <button class="btn btn-primary" @click="load = !load">{{load?'Remove':'Add'}}</button>
      <br />
      <br />
      <!-- 
          To instruct vue not to add css classes on the transition element,
          We can specify that by using an attribute css
          As we need to suply false, as a boolean, we need to bind the css attribute
      -->
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
        <div id="green-box" v-if="load"></div>
      </transition>
    </div>
  </div>
</template>

<script>
const WIDTH = {
  INITIAL: 100,
  MAX: 300,
  MIN: 0
};

export default {
  data() {
    return {
      load: true,
      width: 100
    };
  },
  methods: {
    setWidth(el, width) {
      this.width = width;
      el.style.width = `${width}px`;
    },
    myAnimation(type, el, done) {
      let round = 1;

      const id = setInterval(()=>{
        let width =
          type === "ENTER"
            ? this.width + round * 10
            : this.width - round * 10;

        el.style.width = `${width}px`;

        round++;

        if (width <= WIDTH.MIN || width >= WIDTH.MAX) {
          clearInterval(id);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      this.setWidth(el, 0);
    },
    enter(el, done) {
      console.log("enter");
      this.myAnimation("ENTER", el, done);

      // In the css code, we have a timer which tells vue that when it is completed
      // but in JavaScript, there is no such time frame, we can call this done method when it is actually done
      // like after an async method
      // done();
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.setWidth(el, 300);
    },
    leave(el, done) {
      console.log("leave");
      this.myAnimation("LEAVE", el, done);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  }
};
</script>

<style>
#green-box {
  margin-top: 20px;
  width: 300px;
  height: 100px;
  background-color: lightgreen;
}
</style>
