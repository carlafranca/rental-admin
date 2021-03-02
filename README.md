# Rental Admin App

## Firebase Setup

- Create two firebase application one for production and another for dev
- In Firebase Authentication > Sign-in method choose Email/Password
- For the production remove the localhost (in the Authorized domain)

- Go to Project Overview > and choose add "WEB" app "</>"
- Add a name (any) and "Register App" and get the firebaseConfig to the local application

## VScode Project Setup

- Use npx react-create-app <anyname>
- Create a .env.local file to add the firebase configuration
- Setup the variables in the .env file (in react the variables should start with REACT*APP* ....)
- Install Firebase $yarn add firebase
