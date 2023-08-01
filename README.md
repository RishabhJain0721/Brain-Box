# Brain-Box

Brain-Box is a web application that allows students to organize and manage their study materials, including subjects, chapters, notes, and video links.

## Features

- **Authentication**: Users can sign up and log in to the Brain-Box using their email and password.
- **Subjects and Chapters**: Users can create, view, and organize subjects and their corresponding chapters.
- **Notes and Video Links**: Users can add and manage notes and video links for each chapter.
- **Real-time Updates**: Any additions or deletions made to subjects, chapters, notes, or video links are instantly updated in the application.

## Tech Stack

- **Frontend**: React, React Router, Firebase Authentication, Tailwind CSS
- **Backend**: Firebase Cloud Firestore
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:  ```git clone https://github.com/RishabhJain0721/Brain-Box.git```

2. Install dependencies:
   - cd Brain-Box
   - npm install

3. Set up Firebase:

   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   - Enable Email/Password sign-in in Firebase Authentication.
   - Create a Firestore database and set up the required collections and documents as per the project structure.

4. Configure Firebase in the application:

   - In the `src/firebase.js` file, replace the Firebase configuration with your own configuration from the Firebase Console.

5. Start the development server: ```npm start```


The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Contributing

If you find any bugs or want to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The application was built using [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/).
- The UI is styled using [Tailwind CSS](https://tailwindcss.com/).
- Thanks to [OpenAI](https://openai.com/) for providing the GPT-3.5 language model, which was of great help during this project.

## Contact

For any inquiries, you can reach us at [rishujain0721@gmail.com](rishujain0721@gmail.com).

---

