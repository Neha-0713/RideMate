# RideMate API Documentation

## User Registration
Endpoint to register a new user in the system.

### Endpoint
```
POST /user/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",    // required, min 3 characters
    "lastname": "string"      // optional, min 3 characters if provided
  },
  "email": "string",         // required, valid email format
  "password": "string"       // required, min 6 characters
}
```

### Response

#### Success (200 OK)
```json
{
  "success": true,
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

#### Validation Error (400 Bad Request)
```json
{
  "success": false,
  "errors": [
    {
      "msg": "error message",
      "param": "field name"
    }
  ]
}
```

#### Server Error (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Internal server error"
}
```

### Validation Rules
- Email must be a valid email format
- First name must be at least 3 characters long
- Password must be at least 6 characters long
- All required fields must be provided

## User Profile
Endpoint to retrieve the authenticated user's profile.

### Endpoint
```
GET /users/profile
```

### Headers
```
Authorization: Bearer <token>
```

### Response

#### Success (200 OK)
```json
{
  "success": true,
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

#### Unauthorized (401)
```json
{
  "message": "unauthorized"
}
```

## User Logout
Endpoint to logout a user by invalidating their token.

### Endpoint
```
POST /users/logout
```

### Headers
```
Authorization: Bearer <token>
```

### Response

#### Success (200 OK)
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### Unauthorized (401)
```json
{
  "message": "unauthorized"
}
```

## Captain Registration
Endpoint to register a new captain in the system.

### Endpoint
```
POST /captain/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",    // required, min 3 characters
    "lastname": "string"      // optional
  },
  "email": "string",         // required, valid email format
  "password": "string",      // required, min 6 characters
  "vehicle": {
    "color": "string",       // required, min 3 characters
    "plate": "string",       // required, min 3 characters
    "capacity": "number",     // required, min 1
    "type": "string"         // required, one of: car, motorcycle, auto
  }
}
```

### Response

#### Success (200 OK)
```json
{
  "success": true,
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "type": "string"
    },
    "_id": "string"
  }
}
```

#### Validation Error (400 Bad Request)
```json
{
  "success": false,
  "errors": [
    {
      "msg": "error message",
      "param": "field name"
    }
  ]
}
```

#### Server Error (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Internal server error"
}
```

### Validation Rules
- Email must be a valid email format
- First name must be at least 3 characters long
- Password must be at least 6 characters long
- Vehicle color must be at least 3 characters long
- Vehicle plate must be at least 3 characters long
- Vehicle capacity must be at least 1
- Vehicle type must be one of: car, motorcycle, auto
- All required fields must be provided
