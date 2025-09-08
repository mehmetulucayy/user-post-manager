# User & Post Manager (Frontend)

This project is a Single Page Application (SPA) built with modern technologies to manage user and post data. It fulfills the requirements of the first phase of a "Web Development Assignment."

## Project Objective and Scope

The main objective is to showcase fundamental frontend skills and the ability to create a clean user interface with modern tools. The application fetches data from a mock API (JSONPlaceholder) to implement the following core functionalities:

* **User Management:** Displays a list of users and allows for creating, reading, updating, and deleting (CRUD) operations.
* **Post Management:** Displays a list of posts and allows for creating, reading, updating, and deleting (CRUD) operations.
* **Data Relationship:** Establishes a relationship between posts and users through the `userId` field.

The project fully meets all requirements of the **first phase**, operating independently with its own mock data source.

## Technologies Used

The following technologies form the foundation of this project, along with the reasoning behind their selection:

* **React:** Used for its component-based architecture, which enhances code reusability and readability.
* **Vite:** Chosen for its fast build times and Instant Hot Module Replacement (HMR) during development, which significantly improves the developer experience.
* **TypeScript:** Utilized for static type-checking, making the project more scalable and reducing the risk of errors by ensuring data structures are handled safely.
* **ESLint:** Implemented to maintain code quality and consistency across the project, which is critical for collaborative development.
* **CSS Modules:** Used for component-scoped styling to prevent style conflicts and make maintenance easier.

---

## Design and Styling Approach

The project's styling is implemented using CSS Modules to create a clean and minimalist interface. **While I typically prefer using a utility-first framework like Tailwind CSS in my projects**, I opted for vanilla CSS here to focus on the core requirements of the assignment and demonstrate a foundational understanding of CSS. This approach was a conscious decision to fulfill the "basic yet clean UI/UX" requirement specified in the assignment.

---

## Installation Instructions

Follow these steps to get the project up and running on your local machine.

1.  **Clone the Repository:**
    ```bash
    git clone [repository-link]
    ```

2.  **Navigate to the Frontend Directory:**
    ```bash
    cd frontend
    ```

3.  **Install Dependencies:**
    Install all the necessary Node.js modules for the project to run correctly:
    ```bash
    npm install
    ```

## Running the Project

Once the installation is complete, you can start the development server using the following command:

```bash
npm run dev