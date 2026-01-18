# Brew and Bean ☕

**Brew and Bean** is a modern, responsive web application designed for a premium coffee shop experience. It allows users to explore a carefully curated menu of coffee blends and delights, view detailed item information, and learn more about the coffee house's offerings and locations. Built with Next.js, it features dynamic routing, internal API handling, and a polished user interface.

## 🚀 Deployment

**Live Demo:** [https://brew-and-bean-sooty.vercel.app/](https://brew-and-bean-sooty.vercel.app/)

## 🛠️ Setup & Installation

Follow these steps to get the project running locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/amitpaul9/Brew-and-bean-client.git
    cd brew-and-bean
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📍 Route Summary

The application is structured with the following key routes:

| Route | Description |
| :--- | :--- |
| `/` | **Homepage**: Features Hero, Menu preview, Cafe info, About section, Reviews, Location, and Newsletter. |
| `/items` | **Menu Page**: A full grid listing of all available coffee items with images and prices. |
| `/item-details/[id]` | **Item Details**: A dynamic page displaying detailed descriptions and info for a specific item. |
| `/about` | **About Us**: Information about the brand and story. |
| `/login` | **Login**: User authentication page. |
| `/api/items` | **API List**: Endpoint returning the full JSON list of menu items. |
| `/api/items/[id]` | **API Detail**: Endpoint returning data for a specific item by ID. |

## ✨ Implemented Features

-   **Dynamic Menu System**: Fetches and displays real-time menu data from internal API routes.
-   **Product Details View**: Dynamic routing allows users to click on any item to view an in-depth description and dedicated page.
-   **Responsive Navigation**: A fully responsive Navbar that adapts to mobile devices with a hamburger menu and smooth animations.
-   **Authentication State**: Logic to handle user login sessions using cookies, toggling access between "Login" and "Logout" states.
-   **Modern UI/UX**: Designed with **Tailwind CSS** and **Lucide React** icons to provide a clean, aesthetic, and user-friendly interface.
-   **Component-Based Architecture**: Modular design with reusable components for Hero, Navbar, Footer, and content sections.

## 📝 Brief Feature Explanation

-   **Menu & API**: The `/items` page fetches data asynchronously from `/api/items`. This separates the frontend view from the data source, allowing for easier updates to the menu content.
-   **Dynamic Routing**: The `/item-details/[id]` route utilizes Next.js dynamic path segments. When a user selects a coffee, the app identifies the ID and fetches the specific details for that item, ensuring a fast and seamless browsing experience.
-   **Authentication**: The `Navbar` component checks for an `auth` cookie on mount. If present, it updates the UI to show a "Logout" button; otherwise, it presents a "Login" option, simulating a persistent user session.
