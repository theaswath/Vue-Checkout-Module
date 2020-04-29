<template>
  <div class="OrderConfirmed">
    <el-row :gutter="20 " type="flex">
      <!-- Checkout Bag Begin-->
      <el-col :span="16" class="items">
        <el-card shadow="never" class="items-card">
          <h1>Order Confirmed</h1>
          <p
            v-show="$store.address.city.length != 0"
          >{{$store.address.city[Math.floor(Math.random() * $store.address.city.length)]+$store.address.city[Math.floor(Math.random() * $store.address.city.length)]}}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "OrderConfirmed",
  components: {},
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss">
body {
  background: rgb(243, 243, 243);
}

//Animations
.nextStep-enter-active {
  animation: next-step 0.5s ease-out;
  animation-delay: 0.5s;
  opacity: 0;
}

.nextStep-leave-active {
  animation: prev-step 0.5s ease-out;
  animation-delay: 0.5s;
}

@keyframes next-step {
  from {
    transform: translateX(15em);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes prev-step {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-15em);
    opacity: 0;
  }
}
</style>
