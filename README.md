# Airbnb-Styled React Web App 🏠

A minimalistic Airbnb clone built using React. This project showcases various listings using the `Card` component and includes dynamic badge indications for sold out and online listings.

![Sample Screenshot](path_to_screenshot.png) 
*Note: Replace `path_to_screenshot.png` with an actual screenshot of your app for visualization.*

## Features 🌟

- **Dynamic Listings**: Display listings dynamically using the `data.js` file.
- **Interactive UI**: Listings have badges that indicate whether they're "SOLD OUT" or "ONLINE".
- **Responsive Design**: Built with mobile and desktop-friendly design.
- **Navbar**: Includes a simple navigation bar with the Airbnb logo.

## Technologies Used 🛠️

- **React.js**: For building UI components.
- **Data Mapping**: Uses data from `data.js` to populate cards.
- **Local Image Assets**: Utilizes local images for both listing covers and badges.

## How to Run 🚀

1. **Clone the repository**:
git clone [your_repository_link]


2. **Navigate to the directory**:
cd [your_repository_name]


3. **Install dependencies** (assuming you have [Node.js](https://nodejs.org/) and npm installed):
npm install

4. **Run the project**:
npm start

This should open a development server, usually at `http://localhost:3000`.

## Structure 📂

- `App.jsx`: Main application component that renders the Navbar, Hero, and list of cards.
- `Navbar.jsx`: Displays the Airbnb logo at the top.
- `Card.jsx`: Responsible for displaying individual listing. Badges are determined based on listing's properties.
- `Hero.jsx`: Assumed to be a hero section component, although it's not provided in the given code.
- `data.js`: Contains listing data (not provided in the given code).
