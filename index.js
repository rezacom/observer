//Observer Design Pattern
class ObserverPattern {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notify(change) {
    this.observers.forEach((observer) => observer(change));
  }
}



var observerInstance = new ObserverPattern();

document.getElementById("add").addEventListener('click',() => {
  let input = document.createElement("input");
  input.type = "text";
  document.getElementById("observers").append(input);

  let observer = (value) => (input.value = value);
  observerInstance.subscribe(observer);
});

document.getElementById("observable").addEventListener('keyup',(e) => observerInstance.notify(e.target.value));
