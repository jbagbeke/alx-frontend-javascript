export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  
  if (trueOrFalse) { /* eslint no-unused-vars: 0 */
    let task = true;
    let task2 = false;
  }
  
  return [task, task2];
}