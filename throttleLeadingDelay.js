const btnValue = document.getElementById('btn');

function onClick() {
    console.log("Clicked");
}

function throttle(func, delay) {
    let lastRan;
    let timepassId;
    return function (...args) {
        if (!lastRan) {
            // means lastran is never triggered
            func.apply(this, args);
            lastRan = Date.now();
            console.log("inside if(!lastRan)");
        }
        else {
            clearTimeout(timepassId);
            timepassId = setTimeout(() => {
                if (Date.now() - lastRan >= delay) {
                    func.apply(this, args);
                    lastRan = Date.now();
                    console.log("inside if statement of setTimeOut");
                }
            }, Date.now() - (lastRan - delay))

        }
    }
}

const answer = throttle(onClick, 1000);
btnValue.addEventListener('click', answer);

// Here instead of count delay is passed and in throttle function
// if click event never triggered then call the function else it is triggered previously note that time when previously triggered
// and use setTimeOut to set timer where use the condition that, if time is more than given delat then call the function
// and after given time clear the timeout