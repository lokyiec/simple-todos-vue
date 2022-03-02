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
        class="mr-1 w-10 h-10 text-3xl text-white bg-gray-800 rounded-xl focus:outline-none flex justify-center items-center"
      >
        +
      </button>
    </label>
  </form>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
  data() {
    return {
      newTask: ""
    };
  },
  methods: {
    handleSubmit(event) {
      if (this.newTask.length === 0) return;
      Meteor.call("tasks.insert", this.newTask);
      this.newTask = "";
    }
  }
};
</script>
