# TheHoyaDevs
# The Hoya Devs APP

This project is designed to build a mobile app using **React Native** that fetches articles from a WordPress site via a secure **Express server**. The Express server is hosted on **Render.com** for testing purposes and will later be migrated to **AWS** for production use.

## Project Overview

### 1. React Native App
- The app will fetch and display articles from a WordPress-powered news site.
- It integrates with a secure backend server (Express) that acts as a proxy for fetching the WordPress content.

### 2. Express Server
- The Express server will be responsible for making API requests to the WordPress REST API and delivering the content to the React Native app.
- The server is currently hosted on **Render.com** for development and testing purposes.
- In the future, the server will be migrated to **AWS** for better scalability and production-level stability.

## Plan

### 1. Set Up a Simple Express Server
- The Express server will have a **GET request** path (`/getarticles`) to serve content from the WordPress API.
- This will act as a proxy to ensure secure communication between the WordPress API and the React Native app.

### 2. Hosting
- The server will initially be hosted through **Render.com** for ease of deployment and quick testing.
- Eventually, the server will be migrated to **AWS** for production hosting, offering enhanced security, scalability, and performance.

## WordPress REST API Overview

The **WordPress REST API** allows you to interact with your WordPress site from external clients, such as mobile apps or third-party websites. We are using it to fetch article content from the WordPress database.

### Useful Resources
- [**WordPress REST API - Basic Overview**](https://jetpack.com/blog/wordpress-rest-api/)
- [**WordPress REST API Handbook**](https://developer.wordpress.org/rest-api/)
- [**Wordpress Pest API key/notes](https://docs.google.com/document/d/1kN-1DNFeeYH2-D8vLbQRtNSeF4xOQ4TTOjPAF5UeQtY/edit?pli=1)

## Deployment

### Current Hosting
The server is hosted on **Render.com** for testing. All API calls from the app are proxied through the Express server hosted at the Render-provided URL.

### Future Hosting Plan
For production, the Express server will be migrated to **AWS**, providing better scalability and security.

---

## Next Steps for App Development

Once the server setup is complete, the focus will shift to **building the React Native app**. The key features for the next phase include:

1. **Fetching Featured Articles for the Landing Page**
   - Implement an API call to fetch the most recent and featured articles from the WordPress site via the Express server.
   - Display these featured articles prominently on the app’s landing page.

2. **Organizing Articles by Category**
   - Implement API requests to fetch and display articles based on their categories (e.g., News, Opinion, Sports).
   - Create a navigational structure that allows users to filter articles by category.

3. **Implementing Search Functionality**
   - Add a search bar to allow users to search for articles by title, content, or keywords.
   - Use the WordPress REST API’s search capabilities to enable fast and relevant search results.

---

## Development Roadmap

### 1. Complete Server Setup:
- Finalize and test the Express server on Render.com.
- Ensure the server properly fetches articles from WordPress.

### 2. Start React Native App Development:
- Build out the landing page with featured articles.
- Implement category-based article organization and navigation.
- Add search functionality for articles.

### 3. Testing & Refinement:
- Test the app’s performance and fix any bugs or issues.
- Fine-tune the UX/UI for better readability and navigation.
