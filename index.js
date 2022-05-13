// Arrays to keep track of each task's state
//const taskTitles = [];
//const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete




function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  };

  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the shit out of the litter box");
const task2 = newTask("Do Laundry", "MINDBLOWN");
const task = [task1, task2];




task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask(); // Clean Cat Litter has not been completed
task1.logState(); // Clean Cat Litter has not been completed
// Clean Cat Litter has been completed


