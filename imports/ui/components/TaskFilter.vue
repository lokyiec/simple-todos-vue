<template>
  <ul id="filters" class="flex text-center font-bold">
    <li
        class="py-4 flex-grow cursor-pointer transition duration-75"
        :class="
        this.filterStatus ? '' : 'text-gray-300 filter grayscale'
      "
        @click="hideCompleted"
    >
      To do
    </li>
    <li
        class="py-4 flex-grow cursor-pointer transition duration-75"
        :class="
        this.filterStatus ? 'text-gray-300 filter grayscale' : ''
      "
        @click="showCompleted"
    >
      Show All
    </li>
  </ul>
</template>

<script>
export default {
  props: ["filterStatus"],
  methods: {
    hideCompleted() {
      this.$emit("eventHideCompleted", true);
    },
    showCompleted() {
      this.$emit("eventHideCompleted", false);
    },
  },
};
</script>
