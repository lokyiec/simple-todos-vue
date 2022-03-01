<template>
  <div
      class="min-h-screen flex justify-center md:text-lg text-gray-700 tracking-wide md:tracking-wider"
      style="background: linear-gradient(171deg, #ffd370 54%, white 46%)"
  >
    <div class="xl:w-1/3 md:mb-20 transform scale-90 md:scale-100">
      <ListHeader title="ToDo App" :subtitle="tasksCount"/>
      <TaskForm/>
      <div class="bg-white rounded-xl overflow-hidden shadow-2xl">
        <TaskFilter
            :filterStatus="hideCompleted"
            @eventHideCompleted="toggleHideCompleted"
        />
        <ul class="font-bold">
          <Task v-for="task in tasks" :key="task._id" :task="task"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./components/Task.vue";
import TaskForm from "./components/TaskForm.vue";
import TaskFilter from "./components/TaskFilter.vue";
import ListHeader from './components/ListHeader.vue';
import Tasks from "../api/collections/Tasks";

export default {
  components: {
    Task,
    TaskForm,
    TaskFilter,
    ListHeader,
  },
  data() {
    return {
      hideCompleted: true,
    };
  },
  methods: {
    toggleHideCompleted(status) {
      this.hideCompleted = status;
    },
  },
  meteor: {
    tasks() {
      let filteredTasks = Tasks.find(
          {},
          {sort: {checked: 1, createdAt: -1}}
      ).fetch();

      if (this.hideCompleted) {
        filteredTasks = filteredTasks.filter((task) => !task.checked);
      }

      return filteredTasks;
    },
    tasksCount() {
      return Tasks.find({checked: false}).count();
    },
  },
};
</script>
