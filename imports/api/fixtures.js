import { Meteor } from 'meteor/meteor';
import Tasks from './collections/Tasks.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Tasks.find().count() === 0) {
    const data = [
      {
        title: 'Read a book',
        createdAt: new Date(),
      },
      {
        title: 'Learn the meteor framework',
        createdAt: new Date(),
      },
      {
        title: 'Go to the gym',
        createdAt: new Date(),
      },
      {
        title: 'Check your e-mail',
        createdAt: new Date(),
      },
    ];

    data.forEach(task => Tasks.insert(task));
  }
});
