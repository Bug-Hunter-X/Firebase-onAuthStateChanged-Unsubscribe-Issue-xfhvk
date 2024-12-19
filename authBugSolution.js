const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in:", uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log("User is signed out");
  }
});

// Cleanup function to unsubscribe when no longer needed
const cleanup = () => {
  unsubscribe();
  console.log('Successfully unsubscribed');
};

//Call cleanup function when component or relevant process ends
export { cleanup };