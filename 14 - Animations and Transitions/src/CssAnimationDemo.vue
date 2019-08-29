<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>1. CSS Animations</h1>
      <hr />
      <button class="btn btn-primary" @click="show=!show">Show Alert</button>
      <br />
      <br />

      <transition name="fade">
        <div class="alert alert-info" v-show="show">This is some info alert</div>
      </transition>

      <transition name="slide" type="animation">
        <div class="alert alert-info" v-if="show">This is some info alert</div>
      </transition>

      <!-- appear: shows page load -->
      <transition name="fade" appear>
        <div class="alert alert-info" v-if="show">This is some info alert</div>
      </transition>

      <!-- We can override the default animation classes of vuejs -->
      <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
        <div class="alert alert-success" v-if="show">This is some info alert</div>
      </transition>

      <!-- transitioning multiple elements with reverse conditions -->
      <transition name="fade" mode="out-in">
        <div
          class="alert alert-warning"
          v-if="show"
          key="warning"
        >This is some warning alert {{show}}</div>
        <div class="alert alert-success" v-else key="success">This is some success alert {{show}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
