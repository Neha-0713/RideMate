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
