<template>
  <li class="flex items-center group" data-id="${id}">
    <label class="px-3 py-4 cursor-pointer">
      <input
        type="checkbox"
        readonly
        :checked="this.task.checked"
        @click="toggleChecked"
        class="-mt-1"
      />
    </label>
    <div
      class="ml-1 flex-grow cursor-text border-b-2 border-gray-100 focus:outline-none overflow-x-hidden"
      :class="
        this.task.checked ? ' line-through text-gray-300 filter grayscale' : ''
      "
      style="padding: 18px 0"
    >
      {{ this.task.text }}
    </div>
    <button
      class="ml-2 px-3 py-4 text-2xl text-gray-400 lg:text-transparent lg:group-hover:text-gray-400 focus:outline-none transition duration-75"
      @click="deleteThisTask"
    >
      ✕
    </button>
  </li>
</template>

<script>
import { TasksCollection } from "../../api/collections/TasksCollection.js";

export default {
  props: ["task"],
  data() {
    return {};
  },
  computed: {
    taskClassName: function() {
      return this.task.checked ? "checked" : "";
    }
  },
  methods: {
    toggleChecked() {
      TasksCollection.update(this.task._id, {
        $set: { checked: !this.task.checked }
      });
    },
    deleteThisTask() {
      TasksCollection.remove(this.task._id);
    }
  }
};
</script>
