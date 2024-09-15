# Project Management System

## Setup

1. Clone the repository: `git clone https://github.com/your-username/project-management-system.git`
2. Install dependencies: `npm install`
3. Start the server: `npm run start`

## API Endpoints

### Create a new ticket

* Method: POST
* Endpoint: `/api/tickets`
* Request Body: `title`, `description`, `status`
* Response: `201 Created` with the created ticket

### Retrieve all tickets

* Method: GET
* Endpoint: `/api/tickets`
* Response: `200 OK` with an array of tickets

### Retrieve a single ticket by its unique identifier

* Method: GET
* Endpoint: `/api/tickets/:id`
* Response: `200 OK` with the retrieved ticket or `404 Not Found` if the ticket does not exist

### Update a ticket by its unique identifier

* Method: PUT
* Endpoint: `/api/tickets/:id`
* Request Body: `title`, `description`, `status`
* Response: `200 OK` with the updated ticket or `404 Not Found` if the ticket does not exist

### Delete a ticket by its unique identifier

* Method: DELETE
* Endpoint: `/api/tickets/:id`