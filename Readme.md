# Inventory Management System

A backend system for managing products, suppliers, inventory batches, and transactions. Built with **Node.js**, **Express.js**, and **MongoDB**, designed for modularity, clean architecture, and future scalability.

## Features

- **Product Management**: CRUD operations with SKU, category, pricing, and supplier validation.
- **Supplier Management**: CRUD for suppliers with contact details.
- **Inventory Management**: Track stock with batches, FEFO (First Expire First Out) rules, and transaction history.
- **Authentication**: Admin login with JWT-based authentication.
- **Validation**: Request validation for all routes.
- **Error Handling**: Centralized error handler with custom `AppError` class.
- **Logging**: Structured logging for debugging and monitoring.
- **Modular Architecture**: Feature-based folder structure for maintainability.
- **Scalable Design**: Ready for caching, microservices, and cloud deployment.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (Access Token, Refresh Token optional for v2)
- **Validation**: Custom middleware + express-validator
- **Logging**: Winston / Custom Logger
- **Testing**: Jest / Supertest (optional for future phases)
- **Dev Tools**: Nodemon, ESLint, Prettier

## Folder Structure

```
src/
 ├── config/
 ├── database/
 ├── modules/
 │    ├── auth/
 │    ├── product/
 │    ├── supplier/
 │    ├── inventory-batch/
 │    └── inventory-transaction/
 ├── middlewares/
 ├── shared/
 │    ├── errors/
 │    ├── logger/
 │    └── repositories/
 ├── routes/
 ├── app.js
 └── server.js
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repo-url>
cd inventory-management
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file based on `.env.example`:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/inventory
JWT_SECRET=your_jwt_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Health check:
```
GET http://localhost:3000/health
Response:
{
  "status": "ok",
  "message": "Inventory API is running"
}
```

## Project Phases

- **Phase 1**: Project setup, MongoDB connection, health check -->(Working...)
- **Phase 2**: Product CRUD
- **Phase 3**: Supplier CRUD & relationships
- **Phase 4**: InventoryBatch & InventoryTransaction
- **Phase 5**: Authentication & Authorization
- **Phase 6**: Advanced features (pagination, filtering, soft delete)
- **Phase 7**: Testing & CI/CD
- **Phase 8**: Production enhancements (Docker, caching, cloud deployment, refresh tokens)

## Future Enhancements

- Multi-device refresh token management
- Role-based access control (staff, admin)
- Redis caching for inventory queries
- Async message queues for stock alerts
- Cloud deployment (AWS / Docker)

## Contributing

1. Fork the repository  
2. Create a new feature branch  
3. Write code, commit, and push  
4. Open a pull request  