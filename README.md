<div align="center">
  <h3 align="center">Daily News</h3>

  <p align="center">
    A modern, visually stunning news application with real-time updates and country-specific filtering.
    <br />
    <a href="https://newsapp82.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/shashankmahaseth/NewsApps/issues">Report Bug</a>
    ·
    <a href="https://github.com/shashankmahaseth/NewsApps/issues">Request Feature</a>
  </p>
</div>
**Daily News** is a cutting-edge news aggregator built with React and Vite, designed to deliver a premium user experience. It features a sleek, gradient-themed interface that allows users to seamlessly browse top headlines from around the world.

 #WEBSITE = https://newsapp82.netlify.app/
### ✨ Key Features

*   **Dynamic Country Filtering**: Instantly switch news context between 14+ countries (USA, India, UK, Japan, etc.) without page reloads.
*   **Robust Error Handling**: User-friendly empty states and error messages when API requests fail or return no results.
*   **Performance Optimized**: 
    *   Lazy loading for country flags to reduce initial bundle size.
    *   Efficient state management with `useEffect` dependency tracking.
*   **Responsive News Cards**: 
    *   Auto-hiding broken images via `onError` handlers.
    *   Truncated descriptions for consistent UI layout.
    *   Direct links to original sources.
*   **Modern UI/UX**: 
    *   Glassmorphism header effects.
    *   Linear gradient themes (`#3a1c71` → `#ffaf7b` style).
    *   Smooth hover transitions on cards and buttons.

### 🛠️ Tech Stack & Dependencies

*   **Frontend**: React 19, Vite 7
*   **Styling**: Plain CSS (Modern Features: Variables, Flexbox, Grid) & `lucide-react` for icons
*   **Networking**: Axios 1.x (Async/Await)
*   **API**: NewsData.io (or similar JSON-based News API)

## 📂 Project Structure

```bash
news-gradient/
├── src/
│   ├── components/
│   │   ├── CountrySelector.jsx  # Handles country switching logic
│   │   ├── Header.jsx           # Application navigation/branding
│   │   └── NewsCard.jsx         # Reusable display component for articles
│   ├── services/
│   │   └── newsApi.js           # Centralized API configuration
│   ├── assets/                  # Static images (logo, banners)
│   ├── App.jsx                  # Main application state & layout
│   └── main.jsx                 # Entry point
└── public/
```

## 🧠 Technical Decisions & Challenges

### 1. Handling API Inconsistencies
*   **Challenge**: The News API often returns articles with missing images or truncated content.
*   **Solution**: Implemented a defense mechanism in `NewsCard.jsx` that gracefully hides broken images using `onError` and renders fallback UI for missing data.

### 2. State Management
*   **Decision**: Used local state (`useState`) over Redux for this scale to keep the application lightweight.
*   **Optimization**: `useEffect` dependencies are carefully tuned to trigger API calls only when `selectedCountry` changes, preventing unnecessary network requests.

### 3. Modular Architecture
*   **Approach**: Separated concerns by isolating API logic in `services/newsApi.js`. This allows for easy swapping of the backend provider (e.g., switching to Guardian API or NYT API) without rewriting the UI components.

<!-- GETTING STARTED -->
## 🚀 Getting Started

Follow these simple steps to get a local copy up and running.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/shashankmahaseth/NewsApps.git
    ```
2.  Navigate to the project directory
    ```sh
    cd news-gradient
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Start the development server
    ```sh
    npm run dev
    ```

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: assets/banner.png
