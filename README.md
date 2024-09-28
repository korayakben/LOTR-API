# Lord of the Rings API

## Overview

This API provides data related to various characters, races, and locations from the Lord of the Rings universe. You can query the API to get information about specific races, tools, quotes, and more.

## Endpoints

### 1. Get All Data

- **Endpoint:** `/api/v1/`
- **Method:** GET
- **Description:** Returns all data from the Lord of the Rings universe.
- **Example Response:**
  ```json
  [
      {
          "dark_beings": [...],
          "dragons": [...],
          "dwarves": [...],
          "elves": [...],
          "ents": [...],
          "hobbits": [...],
          "humans": [...],
          "locations": [...],
          "orcs": [...],
          "rings": [...],
          "trolls": [...],
          "wizards": [...]
      }
  ]
  ```

### 2. Get Data Based on Ring Bearer and/or Gender

- **Endpoint:** `/api/v1/universe`
- **Method:** GET
- **Query Parameters:**
  - `ring_bearer` (optional): `true` or `false`
  - `gender` (optional): `male` or `female`
- **Description:** Returns data filtered by ring bearer status and/or gender.
- **Example Response:**
  ```json
  [
      {
          "name": "Frodo Baggins",
          "race": "Hobbit",
          "gender": "male",
          "ring_bearer": true
      },
      ...
  ]
  ```

### 3. Get a Random Race

- **Endpoint:** `/api/v1/random`
- **Method:** GET
- **Description:** Returns data for a random race.
- **Example Response:**
  ```json
  {
      "race": "Elves",
      "data": [...]
  }
  ```

### 4. Get Quotes

- **Endpoint:** `/api/v1/quotes`
- **Method:** GET
- **Description:** Returns all quotes from the Lord of the Rings universe.
- **Example Response:**
  ```json
  [
      "My precious!",
      "Smeagol lied!",
      "Stupid, fat hobbit! He ruins it!",
      "We wants it, we needs it. Must have the precious. They stole it from us.",
      "We are alone, we want to be alone, we need to be alone.",
      "Ooh, we knows, we knowss. SHUT UP!!",
      "We likes goblinses, batses and fishes. But we hasn't tried hobbitses before. Is it soft, is it juicy?"
      ...
  ]
  ```

### 5. Get Tools

- **Endpoint:** `/api/v1/tools`
- **Method:** GET
- **Query Parameters:**
  - `name` (optional): Name of the tool
- **Description:** Returns all tools or tools matching a specific name.
- **Example Response:**
  ```json
  [
      {
          "name": "Axe of Gimli",
          "description": "A well-crafted axe used by Gimli, known for its effectiveness in battle."
      },
      ...
  ]
  ```

### 6. Get Specific Race Data

- **Endpoint:** `/api/v1/:race`
- **Method:** GET
- **Query Parameters:**
  - `name` (optional): Name of the character
  - `home` (optional): Home of the character
- **Description:** Returns data for a specific race, filtered by name and/or home.
- **Example Response:**
  ```json
  {
    "name": "Legolas",
    "race": "Elf",
    "home": "Woodland Realm"
  }
  ```

## Helper Functions

### isBearer(res)

- **Description:** Checks if the character is a ring bearer.
- **Parameters:**
  - `res` (boolean): `true` or `false`
- **Returns:** Array of ring bearers

### findGender(gender)

- **Description:** Finds characters by gender.
- **Parameters:**
  - `gender` (string): `male` or `female`
- **Returns:** Array of characters with the specified gender

### isRace(race)

- **Description:** Checks if the specified race exists in the data.
- **Parameters:**
  - `race` (string): Name of the race
- **Returns:** `true` or `false`

### isTool(tool)

- **Description:** Checks if the specified tool exists in the data.
- **Parameters:**
  - `tool` (string): Name of the tool
- **Returns:** `true` or `false`

## Error Handling

- **500 Internal Server Error:** If any internal server error occurs, the response will be:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```
- **400 Bad Request:** If invalid query parameters are provided, the response will be:
  ```json
  {
    "status": 400,
    "error": "Bad Request",
    "message": "Invalid value for 'ring_bearer'. Must be 'true' or 'false'."
  }
  ```
- **404 Not Found:** If a requested tool is not found, the response will be:

  ```json
  {
    "status": 404,
    "error": "Not Found",
    "message": "No tool found with the name '{name}'"
  }
  ```

  **409 Too many requests:** If there's more than 30 requests sent from the same IP address in 3 mins, the response will be:

  ```json
  {
    "status": 409,
    "error": "Too many requests, please try again later."
  }
  ```

## Setup and Installation

### For Frontend

1. Clone the repository.
   ```bash
   git clone https://github.com/korayakben/LOTR-API.git
   ```
2. Get in the frontend folder.
   ```bash
   cd Frontend
   ```
3. Install dependencies.
   ```bash
   npm install
   ```
4. Run the server.
   ```bash
   npm run dev
   ```

### For Backend

1. Clone the repository.
   ```bash
   git clone https://github.com/korayakben/LOTR-API.git
   ```
2. Get in the backend folder.
   ```bash
   cd Backend
   ```
3. Install dependencies.

   ```bash
   npm install
   ```

4. Get in the src folder to run the application file.

   ```bash
   cd src
   ```

5. Run the server.
   ```bash
   node --no-warnings app.js
   ```

## Technologies Used

- Node.js
- Express.js
- React.js
- CORS
- Body-parser
- Axios
- Material UI
- Bootstrap

## Data Sources

- Dark Beings
- Dragons
- Dwarves
- Elves
- Ents
- Hobbits
- Humans
- Locations
- Orcs
- Rings
- Trolls
- Wizards
