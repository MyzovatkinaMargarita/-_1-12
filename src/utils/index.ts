import { num, str } from "./variables.js";
import { add } from "./utils.js";
import { user1 } from "./tuples.js";
import { getUserName } from "./user-utils.js";
import { makeTask, Status } from "./entities/task.js";
import {
  filterByStatus,
  filterByQuery,
  sortByDate
} from "./utils/task-filters.js";

console.log(num, str);
console.log(add(5, 7));
console.log(user1, getUserName({ id: user1[0], name: user1[1] }));

const task = makeTask("  Learn   TypeScript  ");
if (task) {
  console.log(task);
  const tasks = [task];
  console.log(filterByStatus(tasks, "open"));
  console.log(filterByQuery(tasks, "learn"));
  console.log(sortByDate(tasks));
}
