# E-Commerce Web Application

## Project Description

This is a full-stack E-Commerce Web Application developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

The project allows users to browse products, add items to cart, and place orders. It also includes backend APIs for managing products and orders with database integration.

---

# Features

- Product Catalog
- Add to Cart Functionality
- Checkout System
- User Authentication (Basic Structure)
- Role-Based Access (Admin/User)
- Backend REST APIs
- MySQL Database Integration
- Order Management

---

# Technologies Used

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MySQL

---

# Project Structure

```plaintext
ecommerce-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── routes/
│
├── database/
│   └── ecommerce.sql
│
└── README.md
```

---

# Installation and Setup

## Step 1: Clone Repository

```bash
git clone <repository-link>
```

---

## Step 2: Open Project Folder

```bash
cd ecommerce-app
```

---

# Backend Setup

## Step 3: Open Terminal in Backend Folder

```bash
cd backend
```

---

## Step 4: Install Required Packages

```bash
npm install
```

---

## Step 5: Configure MySQL Database

Open:

```plaintext
backend/db.js
```

Replace:

```javascript
password: "YOUR_PASSWORD"
```

with your MySQL password.

---

# Database Setup

## Step 6: Create Database

Open MySQL Workbench or MySQL Command Line.

Run the SQL file:

```plaintext
database/ecommerce.sql
```

OR copy-paste the SQL code manually.

---

# Run the Application

## Step 7: Start Backend Server

Inside backend folder run:

```bash
node server.js
```

If successful, output will be:

```plaintext
Server running on port 5000
MySQL Connected
```

---

## Step 8: Run Frontend

Open:

```plaintext
frontend/index.html
```

in your browser.

---

# API Endpoints

## Get Products

```http
GET /products
```

---

## Place Order

```http
POST /orders
```

Example Request Body:

```json
{
  "product_name": "Product 1"
}
```

---

# Screenshots

Add project screenshots here.

Example:

- Home Page
- Product Catalog
- Cart Section
- Order Page

---

# Future Improvements

- JWT Authentication
- Admin Dashboard
- Payment Gateway Integration
- Product Search & Filters
- Responsive Mobile Design
- Product Images Upload
- User Order History

---

# GitHub Upload Instructions

## Upload These Files

```plaintext
frontend/
backend/
database/
README.md
package.json
package-lock.json
```

---

## Do NOT Upload

```plaintext
node_modules/
```

Create a `.gitignore` file and add:

```plaintext
node_modules
```

---

# Learning Outcome

This project helps in understanding:

- Full-Stack Development
- REST API Development
- Database Integration
- Backend & Frontend Communication
- CRUD Operations
- Project Structure Management

---

# Author

Nidhish Soni