import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { TasksCollection } from "/imports/db/TasksCollection";
import "/imports/api/tasksMethods";

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
  });

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      "Learn a meteor js framework ",
      "Read a book",
      "Go to the gym training",
      "Remove bugs on app",
    ].forEach((taskText) => insertTask(taskText, user));
  }
});
