const countButton = document.getElementById("btn");

// in throttle function pass function which need to be called after 'n' number of times

function throttle(func, count) {
    var counter = 0;
    return function (...args) {
        if (++counter !== count) {
            console.log(`We have to call onClick after ${count} times but current count is ${counter}`);
            return;
        }
        counter = 0;
        func.apply(tjis, ...args);
    }

}

const onClick = () => {
    console.log("clicked");
}
const callerfunc = throttle(onClick, 4);
countButton.addEventListener("click", callerfunc);

/*  ----...args --- */
// ...args is used because you want to create a generic throttle function that can be used with
// different functions that might accept different numbers of arguments. By using ...args,
// you can capture and pass those arguments dynamically without knowing their exact count or values.


/*  ----apply() --- */
// apply is used to call the original func function and pass the captured args as arguments.
// This allows you to maintain flexibility in terms of how func is defined and invoked,
// as it can accept any number of arguments.

/*  ----'this' --- */
// this is used to maintain the same context for the func function as it had when callerFunc was created.
// This ensures that any references to this inside func will behave consistently and as expected.

