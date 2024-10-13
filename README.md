Shoppy MERN Project
Shoppy is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project is divided into three main parts: Admin Panel, Front End, and Back End.

Project Structure
The repository is organized into three branches:

admin-panel-branch: Contains the admin panel for managing products, orders, and users.
front-end-branch: Contains the customer-facing front end where users can browse and purchase products.
back-end-branch: Contains the back-end API, managing data, authentication, and business logic.
Tech Stack
MongoDB: Database
Express.js: Web framework for Node.js
React.js: Front-end library for building user interfaces
Node.js: JavaScript runtime for back-end development
Mongoose: MongoDB object modeling for Node.js
Vite: Build tool for fast development (used in front end)
JWT: For authentication and authorization
1. Admin Panel
Overview
The admin panel is used by administrators to manage the platform. It includes features for:

Adding, updating, and deleting products
Viewing and managing orders
Viewing and managing users
Setup
Clone the admin-panel branch:

bash

git checkout admin-panel-branch
Navigate to the directory:

bash

cd shoppy-admin-panel
Install dependencies:

bash

npm install
Run the admin panel:

bash

npm run dev
2. Front End
Overview
The front end is the customer-facing part of the application, where users can:

Browse products
View product details
Add products to the cart
Checkout and pay
Setup
Clone the front-end branch:

bash

git checkout front-end-branch
Navigate to the directory:

bash

cd shoppy-front-end
Install dependencies:

bash

npm install
Run the front end:

bash

npm run dev
3. Back End
Overview
The back end is the API layer that powers both the admin panel and the front end. It handles:

User authentication (JWT)
Product management
Order management
Data retrieval and storage in MongoDB
Setup
Clone the back-end branch:

bash

git checkout back-end-branch
Navigate to the directory:

bash

cd shoppy-back-end
Install dependencies:

bash

npm install
Set up environment variables:

Create a .env file in the shoppy-back-end directory with the following variables:

env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the back end:

bash

npm start
API Endpoints
Authentication:

POST /api/auth/login: Login user and return a JWT token.
POST /api/auth/register: Register a new user.
Products:

GET /api/products: Get all products.
POST /api/products: Add a new product.
PUT /api/products/:id: Update product by ID.
DELETE /api/products/:id: Delete product by ID.
Orders:

GET /api/orders: Get all orders.
POST /api/orders: Create a new order.
Features
Admin Panel: Manage users, products, and orders
User Authentication: Secure login and sign-up using JWT
Responsive Design: Optimized for desktop and mobile devices
MERN Stack: Full-stack JavaScript solution
Running the Full Project
Start the back-end server:

bash

cd shoppy-back-end
npm start
Start the admin panel:

bash

cd shoppy-admin-panel
npm run dev
Start the front end:

bash

cd shoppy-front-end
npm run dev
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new feature branch.
Commit your changes.
Push to your branch.
Open a pull request.
License
This project is licensed under the MIT License.
