# Security Dashboard with login

A simple full-stack CRUD application built with **Go backend** and
**React frontend** using **Vite**.

---

## Tech Stack

### Backend

- Go
- Gin
- REST API

### Frontend

- React
- Vite
- Axios
- TailwindCSS

---

## Features

- Create User
- Get User by ID
- Get User by email
- JWT Auth
- RESTful API
- Frontend API integration

---

## Backend Setup

```bash
cd backend
go mod tidy
go run cmd/main.go
```

Server runs on:

```
http://localhost:8080
```

---

## Frontend Setup

```bash
cd securtiy-dashboard-ui
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

Method Endpoint Description

---

GET /users/:id Get user by ID
 POST /users Create user

---

## Example Request

```json
Create user first
POST : /user
{
    "id":1,
    "name":"kevin",
    "email":"abc@gmail.com",
    "password":"123"
}

POST: /login
{
  "email": "abc@gmail.com",
  "password":"123"
}
```

---

## Future Improvements

- Add database persistence
- Add unit tests
- Add input validation
- Add middleware for auth
- Addin protected routes for both frontend and backend
- Docker support