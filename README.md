# Brain-Box

Brain-Box is a web application that allows students to organize and manage their study materials, including subjects, chapters, notes, and video links.

## Features

- *Authentication*: Users can sign up and log in to the Brain-Box using their email and password.
- *Subjects and Chapters*: Users can create, view, and organize subjects and their corresponding chapters.
- *Notes and Video Links*: Users can add and manage notes and video links for each chapter.
- *Real-time Updates*: Any additions or deletions made to subjects, chapters, notes, or video links are instantly updated in the application.

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

- *Frontend*: React, React Router, Firebase Authentication, Tailwind CSS
- *Backend*: Firebase Cloud Firestore
- *Deployment*: Vercel

## Local installation 

1. Clone the repository:  git clone https://github.com/RishabhJain0721/Brain-Box.git

2. Install dependencies:
   - cd Brain-Box
   - npm install

3. Set up Firebase:

   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   - Click on "Build" in the window that pops up.
     
     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 04 26 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/270d0272-e7f1-44ba-ab16-4fd93d7aa423)       


   - Click on "Authentication" -> "Get started" -> "Email/Password"
     
     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 04 43 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/b1aa5e0a-e4d8-4653-b9b7-77c56a2649b8)
     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 04 56 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/05570c28-5172-4712-bf37-324af25fb635)
     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 05 27 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/733876cf-a8a6-4511-8b04-08b0ac2fcba3)



   - Enable the "Email/Password" option and save.

     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 05 37 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/7cf1f2c3-50bd-4948-b4bb-cc2a9a866d62)
     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 05 47 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/6c361614-cdfe-48f6-9a7e-e8c79f9891fe)



   - Now again click on on "Build" and select "Firestore Database".

     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 07 07 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/d74f9af3-9a6e-42ef-91f9-2807d8c3c000)



   - Click on "Create Database" -> "Next" -> "Create" to create a database.

   - Now we will update the security rules to allow read/write in DB.

   - Click on "Rules" and make the changes shown in picture and Publish the changes.

      ![BrainBoxProject – Cloud Firestore – Data – Firebase console - Brave 26-01-2024 1 08 55 AM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/4e394df3-b0b0-4849-ba8b-c021ce8acdff)
      ![BrainBoxProject – Cloud Firestore – Data – Firebase console - Brave 26-01-2024 1 09 08 AM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/41e8c0c1-7b1b-44a7-987c-d94ad5a0305d)



   - Go to project settings

     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 08 32 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/9f7c8f63-08ca-4c93-9d70-244820862447)

   - Register the webapp as shown.

     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 08 44 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/78628fdf-ba80-45bd-bfec-d43dd3691952)
     ![How to take a Screenshot in Windows 11 (4 Ways) - Microsoft Community Hub - Brave 25-01-2024 11 09 02 PM](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/05efff1e-32a0-448b-a5ad-84573d27eab1)

   - Copy the firebaseConfig object.

     ![Screenshot 2023-12-28 001105](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/507706f1-b062-4b8d-ab26-2bc7102cf297)
 

   - In the src/firebase.js file, replace the Firebase configuration with your own configuration from the Firebase Console and let the other imports export remain as shown in the image here :

     ![firebasejs](https://github.com/RishabhJain0721/Brain-Box/assets/107767172/a6c30071-dfb8-4d9b-bece-715f224e741a)





4. Start the development server: npm start


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