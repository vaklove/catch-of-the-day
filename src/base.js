import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCd33SCPxsYmS8d9Rhn0PPct9B-uFCJVBw",
  authDomain: "catch-of-the-day-react-project.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-react-project.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a name export
export { firebaseApp };
// this is a default export

export default base;
