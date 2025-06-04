# ShopZone Server

This is the backend for a MERN stack authentication system. It handles user registration, secure password hashing, unique shop name validation, login sessions with token-based auth, and cross-subdomain authentication support. Built with **Node.js**, **Express**, and **MongoDB**, this project implements user authentication, role-based access control, and CRUD operations.


### SERVER API -> https://shopzone-server.vercel.app

## Setup

1. clone the repo

```
git clone https://github.com/rockyhaque/shopzone-server.git
```

2. Configure environment `.env`
```
NODE_ENV=development
PORT=5000
DATABASE_URL="YOUR MongoDB URL"
JWT_SECRET="YOUR JWT SECRECT"
BCRYPT_SALT_ROUNDS=8
```

3. Install dependencies

```
npm i
```

#### API Reference

`Authentication`

POST https://shopzone-server.vercel.app/api/auth/register - Register new user

POST https://shopzone-server.vercel.app/api/auth/login - User login


`Shops`

GET https://shopzone-server.vercel.app/api/shop/my-shop/:username - Check shop name availability

