function Queue() {
    let items = [];  //Hold items

    //other methods goes here

    // Addign new element to queue
    this.enqueue = (ele) => {
        items.push(ele);
    }

    // remove an item from queue
    this.dequeue = () => {
        // In quesue First in First Out so reoving first element
        return items.shift();
    }

    // return first elment  form queue
    this.front = () => {
        return items[0];
    }

    // return the last element from queue
    this.rear = () => {
        return items[items.length - 1];
    }

    // checkif empty or not
    this.isEmpty = () => {
        return items.length === 0;
    }

    //Return the size of the queue
    this.size = () => {
        return items.length;
    }

    //Print the queue
    this.print = () => {
        console.log(items.toString());
    };
}

// ES 6
class Queue {
    constructor() {
        this.items = [];
    }

    //Add a new element in queue
    enqueue = (elm) => {
        this.items.push(elm);
    }

    //Remove element from the queue
    dequeue = () => {
        return this.items.shift();
    }

    //Return the first element from the queue
    front = () => {
        return this.items[0];
    }

    //Return the last element from the queue
    rear = () => {
        return this.items[this.items.length - 1];
    }

    //Check if queue is empty
    isEmpty = () => {
        return this.items.length == 0;
    }

    //Return the size of the queue
    size = () => {
        return this.items.length;
    }

    //Print the queue
    print = () => {
        console.log(this.items.toString());
    };

}