import { Observable, of } from 'rxjs';

// Example 1: 'of' creation function and how does creation functions work
//  The 'of' creation function allows us to create an Observable, which emits a set of values and completes. So, when we subscribe to such Observable, all values that we have provided as arguments will be emitted immediately as next notifications, and then, the Observable will complete, ending the Subscription.

// Output:
// Chenchu Lakshmi
// Mahathi
// Mahi Chenchith
// of('Chenchu Lakshmi', 'Mahathi', 'Mahi Chenchith').subscribe((value) =>
//   console.log(value)
// );

// Example 2: 'of' creation function with observer complete notication handler
// We also expect this(returned by 'of' creation function) Observable to emit a complete notification directly after emitting the last value.
// Output:
// Chenchu Lakshmi
// Mahathi
// Mahi Chenchith
// Completed!
// of('Chenchu Lakshmi', 'Mahathi', 'Mahi Chenchith').subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed!'),
// });

// Example 3: Custom or Polyfill for 'of' creation function
// Now, let's try to implement an Observable, which will have the same logic as the one created using the 'of' function. So, we would get the idea what happens inside.

// Output:
// Chenchu Lakshmi
// Mahathi
// Mahi Chenchith
// Completed!

// And we can see that it indeed works the same as the 'of' creation function from RxJS.
// Note: As a side note, the 'of' creation function in the RxJS library has a few more features and performance tweaks, however, the general idea is the same.
// In this example, we could see that the 'of' creation function creates an Observable which emits a set of provided values and completes.
// We also saw how Creation Functions work in general. They simply create a new Observable for us, so we can use these already existing building blocks, instead of implementing every Observable on our own.
function ourOwnOf<T>(...args: T[]): Observable<T> {
  return new Observable<T>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}

ourOwnOf<string>('Chenchu lakshmi', 'Mahathi', 'Mahi Chenchith').subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});
