import { from } from 'rxjs';
import { last } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/last
// Example 1: Last value in sequence

const source_1$ = from([1, 2, 3, 4, 5]);
const source_2$ = from([
  [1, 2],
  [3, 4],
  [9, 5],
]);

//no arguments, emit last value
const exmpl1 = source_1$.pipe(last());
const exmpl2 = source_2$.pipe(last());

//output: "Last value: 5"
const sub1 = exmpl1.subscribe((val) => console.log(`Last value: ${val}`));
const sub2 = exmpl2.subscribe((val) => console.log(`Last arr: ${val}`));
