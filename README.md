# **TransactFlow Frontend**

**TransactFlow Frontend** is the user interface created by Ana Molina Romero for the **TransactFlow*** project, developed with technologies such as **React***, **Redux***, **CSS***, **HTML**, **React-Router** and **Vite**. Allows users to interact with the backend in a simple and visual way, managing their profile, transactions and more.

## Technologies used

- **React**: JavaScript library to build interactive user interfaces.
- **Redux**: Centrally manages the status of the application.
- **React-Router**: Router to manage routes within the application.
- **CSS**: Responsive visual styles for a good user experience on mobile and desktop devices.
- **HTML**: Basic structure of the user interface.
- **Vite**: Quick build tool for front-end applications.


## Application Structure

The application is structured in various sections and components, with a **responsive** design and a clear separation between pages and reusable components.

### **Key Files and Folders**

- **Services**: Folder containing the files responsible for making calls to the backend.
- **Pages**: Folder with the main pages of the application.
- **Components**: Contains reusable components on different pages 
- ***Layout**: Where the layout of the pages, such as **Header**, **Footer**, and the general structure of the application is handled.

## Sessions

### **Home**
- **Logo and Company Name**: Both with direct links to the home page.
- **Sign In**: Link that redirects to the login page for user access.
- **Footer**: Link to the **Contact** information.

### **Login and Registration**
- Allows the user to register, login or change their password.
- **Login form**: The user can login with his registered account.
- **Registration form**: The user can create a new account.
- **Password change**: If the user has forgotten his password, you can reset it from this section.

### **User Profile**
- **Welcome**: A personalized welcome message to the user.
- **Balance**: Shows the available balance in the user’s balance.
- **Create New Transaction**: Allows the user to create a transaction. This is reflected in the user’s transaction history.
- ***Modify Profile**: The user can edit their personal details, change their profile picture (image in **jpeg***, **jpg** or **png**) format and add balance to their account.
- **Unsubscribe**: Link to delete the user’s account. This action is irreversible.

### **Transaction History**
- **View Transaction Details**: Once a transaction has been completed, the user can see the details of it on the +Info button, including:
  - Transaction number.
  - Transmitter and receiver.
  - Amount of the transaction.
  - Date of the transaction.
  - Transaction status.

## Application Routes

- **Home page**: ‘/’
- **Login page**: ‘/login’
- **User profile**: ‘/profile’
- **User detail**: ‘/details’
- **Transaction detail**: ‘/transaction’
- **New transaction**: ‘/transactions’
- **Change password**: ‘/password’
- **Contact**: ‘/contact’


## Email Notifications

The system sends emails in the following situations:

- **Upon registration**: When a user registers successfully, they receive a welcome email confirming their account.
- **When changing the password**: If a user changes their password, an email is sent notifying them of the change.
- **Upon receiving a transaction**: Users receive an email when they receive a transaction to their account.
- **When performing a transaction**: When a user sends a transaction, he receives an email confirming that the transaction has been successfully completed.

## Application Flow

1. The user accesses the home page (**Home**) and has the option to register or log in.
2. Once authenticated, the user is redirected to his **profile**, where he can view his balance, transaction history and has the option to modify his personal data or delete his account.
3. The user can add balance and create new transactions, which will be reflected in their history.
4. The **Footer** on the page includes links to contact information.

## Installation

1. **Clone the repository**

   `bash
   git clone https://github.com/Ana83-ui/final-project-blockchain-frontend.git


## Install dependencies

cd blockchain-frontend
npm install


##Implement the application 

npm run dev

##License

This project is under the MIT License. See the LICENSE file for details.



