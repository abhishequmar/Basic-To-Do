# Todo List API

A basic RESTful API to manage todo items using Express.js.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

    The server will run at `http://localhost:5000`.

## Endpoints

- **Get all todos:**

    ```http
    GET /todos
    ```

- **Get a todo by ID:**

    ```http
    GET /todos/:id
    ```

- **Create a new todo:**

    ```http
    POST /todos
    ```

    **Body:**

    ```json
    {
      "task": "Your task",
      "completed": false
    }
    ```

- **Update a todo by ID:**

    ```http
    PUT /todos/:id
    ```

    **Body:**

    ```json
    {
      "task": "Updated task",
      "completed": true
    }
    ```

- **Delete a todo by ID:**

    ```http
    DELETE /todos/:id
    ```


