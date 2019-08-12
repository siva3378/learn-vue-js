<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        placeholder="First Name"
        :value="firstName"
        @input="nameChanged(true, $event)"
      />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        placeholder="Last Name"
        :value="lastName"
        @input="nameChanged(false, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["value"],
  methods: {
    nameChanged(isFirst, event) {
      const value = event.target.value;
      const fullName = isFirst
        ? `${value} ${this.lastName}`
        : `${this.firstName} ${value} `;
      // changes the value in parent
      this.$emit("input", fullName);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style>
</style>