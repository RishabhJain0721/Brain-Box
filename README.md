# Brain-Box

Brain-Box is a web application that allows students to organize and manage their study materials, including subjects, chapters, notes, and video links.

## Features

- **Authentication**: Users can sign up and log in to the Brain-Box using their email and password.
- **Subjects and Chapters**: Users can create, view, and organize subjects and their corresponding chapters.
- **Notes and Video Links**: Users can add and manage notes and video links for each chapter.
- **Real-time Updates**: Any additions or deletions made to subjects, chapters, notes, or video links are instantly updated in the application.

## Working video



https://github.com/RishabhJain0721/Brain-Box/assets/107767172/18e357bd-7bd0-415c-95c4-976206e10e5a


## Screenshots

### Home Page
![home](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/3fea689d-e25b-4939-baaa-cb32c8d3ab57)

### Sign Up page
![signup](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/83d3c407-b9f1-4367-8786-0a9ee221f8b6)

### Login page
![login](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/107eba9a-79d9-44d1-96d1-d49f52f405d7)

### Dashboard Pages :
![dashboard1](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/f2361272-865c-4ec1-a99e-58e1154df808)
![addsubmodal](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/15a0626b-7a80-424a-95c2-a7b3cf3a8862)
![dashboard2](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/0498a813-c07c-4257-bd6b-783974ec6c9e)

## Tech Stack

- **Frontend**: React, React Router, Firebase Authentication, Tailwind CSS
- **Backend**: Firebase Cloud Firestore
- **Deployment**: Vercel

## Local installation 

1. Clone the repository:  ```git clone https://github.com/RishabhJain0721/Brain-Box.git```

2. Install dependencies:
   - cd Brain-Box
   - npm install

3. Set up Firebase:

   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   - Enable Email/Password sign-in in Firebase Authentication.
   - Create a Firestore database.

4. Configure Firebase in the application:
   - Go to project settings
     
     ![1](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/c104f295-087e-4eb9-bdec-8ddf4e7d1ab2)
   - Scroll down and copy the firebaseConfig object.

     ![Screenshot 2023-12-28 001105](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/507706f1-b062-4b8d-ab26-2bc7102cf297)
 

   - In the `src/firebase.js` file, replace the Firebase configuration with your own configuration from the Firebase Console and let the other imports export remain as shown in the image here :
     ![firebasejs](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/a6c30071-dfb8-4d9b-bece-715f224e741a)





5. Start the development server: ```npm start```


The application will be accessible at [http://localhost:3000](http://localhost:3000).
You can check the new users and data collected on the application on your firebase console.

## Contributing

If you find any bugs or want to contribute to this project, feel free to open an issue or submit a pull request.

## Acknowledgements

- The application was built using [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/).
- The UI is styled using [Tailwind CSS](https://tailwindcss.com/).

## Contact

For any inquiries, you can reach us at [rishujain0721@gmail.com](rishujain0721@gmail.com).

---

