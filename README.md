# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` listener:  improper unsubscription leading to memory leaks and unpredictable behavior.  The `authBug.js` file showcases the problem, while `authBugSolution.js` provides the corrected implementation.

## Problem
The original code fails to properly unsubscribe from the `onAuthStateChanged` listener, resulting in the listener remaining active even after the component or function that initiated it has completed its lifecycle. This can lead to multiple listeners running simultaneously, causing unnecessary database calls and potential memory issues. 

## Solution
The solution involves using a cleanup function to unsubscribe from the listener. This ensures that the listener is properly detached, preventing resource leaks and ensuring predictable behavior. 

## How to Reproduce
1. Clone this repository.
2. Install Firebase and necessary dependencies (`npm install firebase`).
3. Configure your Firebase project and initialize the `auth` object in `authBug.js` and `authBugSolution.js`. 
4. Run the code in both files to observe the differences in behavior.
