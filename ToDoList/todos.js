let input;
//optional to add dummy data inside todos
const todos = ['Collect Chicken Eggs','Clean Litter Box'];

//start with a while loop that checks for quit input
while(input !== 'q'){
    
    //if else conditions
    if (input === 'new') {
        let task = prompt('What do you want to add to Todos?');
        todos.push(task);
        console.log('Added successfully');
    } else if (input === 'list') {
        console.log('Here are all todos');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'delete') {
        let number = prompt('Which index of todos do you want to delete?');
        if (number >= todos.length || number < 0) {
            console.log('Wrong input');
        } else {
            todos.splice(number, 1);
            console.log('Deleted successfully');
        }
    } else if (input === 'q') {
        break;
    } else {
        console.log('try again');
    }

    input = prompt('What would you like to do?');
}

console.log('Bye Bye');