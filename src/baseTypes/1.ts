// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
let age: number;
let name: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;

age = 50;
name = 'Max';
toggle = true;
empty = null;
notInitialize;

let callback: (a: number) => number;

callback = (a) => {
  return 100 + a
};

export {};
