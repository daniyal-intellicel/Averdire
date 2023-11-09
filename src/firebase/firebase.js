import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCfa6y6fD6CaZeyoYne4_OWkstb_UoKa7g",
  authDomain: "app-beapp.firebaseapp.com",
  databaseURL: "https://app-beapp.firebaseio.com",
  projectId: "app-beapp",
  storageBucket: "app-beapp.appspot.com",
  messagingSenderId: "356736291648"
};

// const config = {
//   apiKey: "AIzaSyCbh5miaV1F88ZBfnlBsimI6hNRoRIxzTE",
//   authDomain: "beapp-test.firebaseapp.com",
//   databaseURL: "https://beapp-test.firebaseio.com",
//   projectId: "beapp-test",
//   storageBucket: "beapp-test.appspot.com",
//   messagingSenderId: "329446285468"
// };

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */
    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */
    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
  }

  // *** Auth API Start *** //

  // Login with email and password
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Signout
  doSignOut = () => this.auth.signOut();

  // Request to reset password
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // Send verification email
  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
    });

  // Update password
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Auth API End *** //

  // *** User API Start *** //

  //Merge Auth and DB User API
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // Get a single user's reference
  user = uid => this.db.ref(`users/${uid}`);

  // Get users reference
  users = () => this.db.ref("users");

  // Get geoFire (online users) reference
  onlineUsers = () => this.db.ref("geoFire");

  // Get reported users reference
  reportedUsers = () => this.db.ref("reportedUsers");

  // Create new User
  createUser = user => this.db.ref("users").push(user);

  // Get permanent users reference
  permanentUsers = () => this.db.ref("permanentUsers");

  // Get/Create permanent user's ref
  permanentUser = uid => this.db.ref(`permanentUsers/${uid}`);

  // Get user's location
  userLocation = uid => this.db.ref(`geoFire/${uid}`);

  userStorage = uid => this.storage.ref(`users/${uid}`);

  deleteDirectoryContent = (ref) => {
    ref.listAll()
      .then(dir => {
        dir.items.forEach(fileRef => {
          return fileRef.delete().then(() => {
            return true;
          }).catch(() => {
            return false;
          });
        });
        dir.prefixes.forEach(folderRef => {
          return this.deleteDirectoryContent(folderRef);
        })
      })
      .catch(error => {
        return false;
      });
  }

  // *** User API End *** //

  // *** Sponsor API Start *** //

  // Get a single sponsor's reference
  sponsor = sid => this.db.ref(`sponsors/${sid}`);

  // Get sponsors reference
  sponsors = () => this.db.ref("sponsors");

  // Create new sponsor
  createSponsor = sponsor => this.db.ref("sponsors").push(sponsor);

  sponsorStorage = sid => this.storage.ref(`sponsors/${sid}`);

  // *** Sponsor API End *** //

  // *** Analytics API Start *** //

  // Get analytics reference
  analytics = () => this.db.ref("analytics");

  // Get user analytics reference
  userAnalytics = () => this.db.ref("analytics/userAnalytics");

  // Get sponser analytics reference
  sponsorAnalytics = () => this.db.ref("analytics/sponsorAnalytics");

  // Get product analytics reference
  productAnalytics = () => this.db.ref("analytics/productAnalytics");

  // *** SponAnalyticssor API End *** //
}
let fb = new Firebase();
export default fb;
