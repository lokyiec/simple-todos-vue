<template>
  <form @submit.prevent="handleSubmit">
    <label
        class="mb-3 flex items-center bg-white rounded-xl overflow-hidden shadow-2xl"
    >
      <input
          type="text"
          class="pl-7 pr-4 py-3 flex-grow md:text-lg tracking-wide md:tracking-wider border-none outline-none placeholder-gray-400"
          placeholder="Type to add new tasks..."
          v-model="newTask"
      />
      <button
          type="submit"
          class="mr-1 w-11 h-11 text-3xl text-white bg-gray-800 rounded-xl focus:outline-none"
      >
        +
      </button>
    </label>
  </form>
</template>

<script>
import Tasks from "../../api/collections/Tasks";

export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    handleSubmit(event) {
      Tasks.insert({
        title: this.newTask,
        createdAt: new Date(),
      });
      this.newTask = "";
    },
  },
};
</script>
