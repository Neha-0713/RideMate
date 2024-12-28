# RideMate API Documentation

## Authentication Endpoints

### Login User
```http
POST /user/login
```

#### Request Body
| Field    | Type   | Description                |
|----------|--------|----------------------------|
| email    | string | User's email address       |
| password | string | User's password (min 6 chars) |

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Success Response
```json
{
  "token": "jwt_token_here",
  "user": {
    "email": "user@example.com",
    "firstname": "John",
    "lastname": "Doe",
    "_id": "user_id_here"
  }
}
```

#### Error Response
```json
{
  "message": "invalid email or password"
}
```

OR

```json
{
  "errors": [
    {
      "msg": "invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Status Codes
- 200: Success
- 400: Validation Error
- 401: Authentication Failed
