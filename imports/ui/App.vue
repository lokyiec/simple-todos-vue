<template>
  <div
    class="min-h-screen flex justify-center md:text-lg text-gray-700 tracking-wide md:tracking-wider"
    style="background: linear-gradient(171deg, #ffd370 54%, white 46%)"
  >
    <div class="w-10/12 md:w-1/2 xl:w-1/3 md:mb-20 transform scale-90 md:scale-100">
      <template v-if="currentUser">
        <ListHeader title="ToDo App" :subtitle="incompleteCount" />
        <div class="flex justify-between mb-4">
          <span>Hi <strong>{{ currentUser.username }}!</strong></span>
           <button v-on:click="logout">Logout</button>
        </div>
        <div class="shadow-2xl">
          <TaskForm />
        </div>
        <div class="bg-white rounded-xl overflow-hidden shadow-2xl">
          <TaskFilter
            :filterStatus="hideCompleted"
            @eventHideCompleted="toggleHideCompleted"
          />

          <div class="loading" v-if="!$subReady.tasks">Loading...</div>

          <ul class="font-bold">
            <Task v-for="task in tasks" :key="task._id" :task="task" />
          </ul>
        </div>
      </template>
      <template v-else>
        <LoginForm />
      </template>
    </div>
  </div>
</template>

<script>
import Task from "./components/Task.vue";
import TaskForm from "./components/TaskForm.vue";
import TaskFilter from "./components/TaskFilter.vue";
import ListHeader from "./components/ListHeader.vue";
import LoginForm from "./components/LoginForm";
import { TasksCollection } from "../db/TasksCollection";

export default {
  components: {
    Task,
    TaskForm,
    TaskFilter,
    ListHeader,
    LoginForm
  },
  data() {
    return {
      hideCompleted: true
    };
  },
  methods: {
    toggleHideCompleted(status) {
      this.hideCompleted = status;
    },
    logout() {
      Meteor.logout();
    }
  },
  meteor: {
    $subscribe: {
      'tasks': []
    },
    tasks() {
      if (!this.currentUser) {
        return [];
      }

      const hideCompletedFilter = { isChecked: { $ne: true } };

      const userFilter = this.currentUser ? { userId: this.currentUser._id } : {};

      const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

      let filteredTasks = TasksCollection.find(
        this.hideCompleted ? pendingOnlyFilter : userFilter,
        { sort: { checked: 1, createdAt: -1 } }
      ).fetch();
      if (this.hideCompleted) {
        filteredTasks = filteredTasks.filter((task) => !task.checked);
      }
      return filteredTasks;
    },
    incompleteCount() {
      return TasksCollection.find({ checked: { $ne: true }, userId: this.currentUser._id }).count();
    },
    currentUser() {
      return Meteor.user();
    }
  }
};
</script>
