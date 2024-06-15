# meditrack-app

Create a bare-bones application that I can modify and build on. Below are Epics, Features, Tasks and User stories to help you build

Epics and Features
Epic 1: User Authentication and Profile Management

    Feature 1.1: User Authentication
        Task 1.1.1: Implement User Signup
            User Story 1.1.1.1: As a user, I want to sign up using my email and password so that I can create an account.
            User Story 1.1.1.2: As a user, I want to receive a confirmation email after signing up so that I can verify my account.
        Task 1.1.2: Implement User Login
            User Story 1.1.2.1: As a user, I want to log in using my email and password so that I can access my account.
        Task 1.1.3: Implement Forgot Password
            User Story 1.1.3.1: As a user, I want to reset my password if I forget it so that I can regain access to my account.
        Task 1.1.4: Implement Logout Functionality
            User Story 1.1.4.1: As a user, I want to log out from my account so that I can ensure my data is secure.

    Feature 1.2: User Profile Management
        Task 1.2.1: Create User Profile Page
            User Story 1.2.1.1: As a user, I want to view and edit my profile information so that I can keep my details up to date.
        Task 1.2.2: Profile Picture Upload
            User Story 1.2.2.1: As a user, I want to upload a profile picture so that my account can be personalized.

Epic 2: Medicine Management

    Feature 2.1: Add New Medicine
        Task 2.1.1: Design Add Medicine Form
            User Story 2.1.1.1: As a user, I want to add a new medicine with details like name, category, quantity, expiry date, and manufacturer so that I can keep track of my medicines.
        Task 2.1.2: Implement Photo Upload for Prescription
            User Story 2.1.2.1: As a user, I want to upload a photo of my prescription so that I can have a digital copy stored.

    Feature 2.2: Dashboard and Medicine Display
        Task 2.2.1: Create Dashboard Layout
            User Story 2.2.1.1: As a user, I want to see a dashboard with all my medicines displayed in a card view so that I can quickly check my medicine details.
        Task 2.2.2: Implement Search Functionality
            User Story 2.2.2.1: As a user, I want to search for medicines by name so that I can find specific medications quickly.
        Task 2.2.3: Implement Filter Functionality
            User Story 2.2.3.1: As a user, I want to filter my medicines by category and expiry date so that I can organize my medicines better.

    Feature 2.3: Medicine Detail View
        Task 2.3.1: Create Medicine Detail Page
            User Story 2.3.1.1: As a user, I want to view detailed information about a medicine by tapping on its card so that I can see all relevant details like warnings, dosage, and precautions.
        Task 2.3.2: Color Code Expiry Dates
            User Story 2.3.2.1: As a user, I want to see the expiry dates of my medicines color-coded (green, yellow, orange, red) so that I can easily identify which medicines are expiring soon.

Epic 3: Medication Tracker and Reminders

    Feature 3.1: Medication Tracker
        Task 3.1.1: Implement Medication Tracker Interface
            User Story 3.1.1.1: As a user, I want to track my medication usage with details like time, dosage, and frequency so that I can manage my medication schedule.
        Task 3.1.2: Separate Active and Paused/Stopped Medications
            User Story 3.1.2.1: As a user, I want to see my active and paused/stopped medications separately so that I can manage my current medication regimen effectively.

    Feature 3.2: Reminders and Notifications
        Task 3.2.1: Set Up Reminder Functionality
            User Story 3.2.1.1: As a user, I want to set reminders for my medications so that I do not forget to take them on time.
        Task 3.2.2: Implement Notification System
            User Story 3.2.2.1: As a user, I want to receive notifications for my medication reminders so that I am alerted when it is time to take my medication.

Epic 4: Information and Resources

    Feature 4.1: Pull Medication Information from External Sources
        Task 4.1.1: Integrate with Open Source Datasets
            User Story 4.1.1.1: As a user, I want the app to pull information about medications from reliable sources so that I can have accurate details about my medicines.
        Task 4.1.2: Integrate AI Platform for Medication Information
            User Story 4.1.2.1: As a user, I want the app to use AI to provide detailed information about medications so that I can understand their uses, side effects, and precautions.

    Feature 4.2: Legal and Informational Pages
        Task 4.2.1: Create FAQ Page
            User Story 4.2.1.1: As a user, I want to view an FAQ page so that I can get answers to common questions about the app.
        Task 4.2.2: Create Terms and Conditions Page
            User Story 4.2.2.1: As a user, I want to view the terms and conditions of the app so that I understand the rules and regulations.
        Task 4.2.3: Create Privacy Policy Page
            User Story 4.2.3.1: As a user, I want to view the privacy policy so that I understand how my data is being used and protected.

Additional Tasks for Security and Compliance

    Task: Implement Data Encryption
        User Story: As a user, I want my data to be encrypted so that it is secure from unauthorized access.

    Task: Implement Secure Authentication Protocols
        User Story: As a user, I want the authentication process to be secure so that my account is protected from hacking.

    Task: Ensure Compliance with Security Standards
        User Story: As a product manager, I want the app to comply with the latest security standards (e.g., GDPR, HIPAA) so that user data is protected and legal requirements are met.

Navigation and Design

    Feature: Implement Navigation Bar
        Task: Design and Implement Navigation Bar
            User Story: As a user, I want an easy-to-use navigation bar with options for user profile, sub-menu, filters, and search so that I can easily navigate the app.

    Feature: UI/UX Design
        Task: Create Modern, Clean Design
            User Story: As a user, I want the app to have a clean, modern design so that it is visually appealing and easy to use.



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with Daisy UI and Tailwind CSS.

- Vite
- React
- Daisy UI
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/meditrack-app.git
cd meditrack-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
