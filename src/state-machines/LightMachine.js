import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  id: 'changeLight',
  initial: 'red',
  states: {
    red: { on: { changeLight: 'green'} },
    green: { on: { changeLight: 'yellow'} },
    yellow: { on: { changeLIght: 'red'} }
  }
});

// This ... works with xstate
// const lightMachine = Machine({
//   id: 'changeLight',
//   initial: 'red',
//   states: {
//     red: { on: { changeLight: 'green'} },
//     green: { on: { changeLight: 'yellow'} },
//     yellow: { on: { changeLIght: 'red'} }
//   }
// });


const service = interpret(lightMachine);

export { lightMachine, service };