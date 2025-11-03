# 🔗 ShrinkLink: A Modern URL Shortener with Analytics

Shrinklink is a full-stack, secure, and trackable URL shortening service built with **Spring Boot** (Backend) and **React** (Frontend). It allows users to generate concise, memorable links in seconds and gain insights into their link performance with powerful analytics.

***

## ✨ Features

Shrinklink is designed to make link sharing effortless and efficient, offering a suite of powerful features:

* **Simple URL Shortening**: Generate short, memorable URLs quickly with an intuitive interface and one-click copy.
* **User Authentication (JWT-Secured)**: Secure user registration and login using Spring Security and JSON Web Tokens (JWT).
    * **Endpoints**: `POST /api/auth/public/register` and `POST /api/auth/public/login`.
* **Link Management Dashboard**: A private dashboard for authenticated users to view and manage all their created short links.
* **Real-time Analytics**: Track total clicks over time (visualized in a bar graph) and view detailed analytics for individual short URLs.
    * The total clicks endpoint is secured with `@PreAuthorize("hasRole('USER')")`.
* **Click Tracking & Redirection**: Automatically logs click events for every access and redirects to the original URL via a dedicated endpoint (`GET /{shortUrl}`).
* **One-Click Copy**: Easily copy the generated short URL to the clipboard directly from the dashboard.

***

## 🛠️ Technologies Used

The project is split into two main components: a feature-rich backend and a modern single-page application (SPA) frontend.

### Backend (`url-shortener`)

The backend is a robust RESTful API built on the Spring Boot framework.

* **Framework:** **Spring Boot** (v3.5.6)
* **Language:** **Java 21**
* **Database:** **MySQL** (`mysql-connector-j`)
* **Security:** **Spring Security** and **JWT** (io.jsonwebtoken v0.13.0)
* **Dependencies:** Spring Web, Spring Data JPA, Lombok

### Frontend (`url-shortener-react`)

The frontend is a fast and responsive SPA for users to interact with the service.

* **Framework:** **React**
* **Tooling:** **Vite**
* **Styling:** **Tailwind CSS**
* **Routing:** `react-router-dom`
* **State/Data Fetching:** **React Query** (for data management in hooks like `useFetchMyShortUrls` and `useFetchTotalClicks`)
* **Data Visualization:** **Chart.js** via `react-chartjs-2` (for click analytics graphs)
* **API Client:** Axios

***

## ⚙️ Setup and Installation

Follow these steps to get a local copy of the project up and running.

### Prerequisites

* **Java Development Kit (JDK)**: Version 17 or higher (Java 21 is configured in `pom.xml`).
* **Maven** (optional, wrapper is included: `mvnw`/`mvnw.cmd`).
* **Node.js** (LTS recommended).
* **MySQL Database**.

### 1. Backend Setup

1.  **Clone the Repository and Navigate to the Backend Directory:**
    ```bash
    git clone <repository_url>
    cd url-shortener
    ```

2.  **Configure Environment Variables:**
    Create a file named `src/main/resources/application.properties` and add your database configuration, JWT secret/expiration, and the frontend URL.
    > 💡 *Note: This file is intentionally excluded from git via `.gitignore` for security.*

    ```properties
    # Example application.properties
    spring.datasource.url=jdbc:mysql://localhost:3306/shrinklink_db
    spring.datasource.username=root
    spring.datasource.password=your_password

    # Important: Set to 'update' for development; 'none' or 'validate' for production
    spring.jpa.hibernate.ddl-auto=update
    
    # Must match what is used in JwtUtils.java and react .env (base64 encoded secret is preferred)
    jwt.secret=YourSuperSecretKeyBase64EncodedForHmacSha256
    jwt.expiration=86400000

    # Frontend URL for CORS configuration (from WebConfig.java)
    frontend.url=http://localhost:5173 
    ```
    *The `frontend.url` value must match the URL of your running React application.*

3.  **Run the Spring Boot Application:**
    Use the Maven wrapper to build and run the application.

    ```bash
    ./mvnw spring-boot:run
    # For Windows:
    # mvnw.cmd spring-boot:run
    ```

### 2. Frontend Setup

1.  **Navigate to the Frontend Directory:**
    ```bash
    cd ../url-shortener-react
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` in the `url-shortener-react` directory and add the following variables:
    > 💡 *Note: This file is also excluded from git via `.gitignore`.*

    ```env
    # Example .env
    VITE_BACKEND_URL=http://localhost:8080 
    VITE_REACT_FRONT_END_URL=http://localhost:5173
    ```

4.  **Run the React Application:**
    ```bash
    npm run dev
    ```

The application should now be accessible at `http://localhost:5173`.


## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks!
