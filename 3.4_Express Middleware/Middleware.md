Middleware is one of the most powerful concepts in Express.

What is Middleware?
    Middleware is a function that runs before the route handler.

It can:
    check authentication
    log requests
    validate data
    modify request
    stop request

Middleware Flow

    Client Request
          ↓
    Middleware
          ↓
    Route Handler
          ↓
    Response