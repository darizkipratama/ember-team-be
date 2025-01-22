# Ember Team Backend

This is the backend for the Ember Team application, built using Loopback.

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd ember-team-be
   
2. **Install dependencies:**
Configure the database: Update the database configuration in datasources.json if necessary.

3. **Run the application:**

Access the API Explorer: Open your browser and navigate to http://localhost:3000/explorer to explore the available API endpoints.

## Usage Details
Creating Tables: To create the necessary tables in the database, run the create-table.js script:

## Initializing Data: To initialize the database with sample data, the initdata.js script will automatically run when the server starts.

## API Endpoints: The API endpoints are available under the /api path. You can use the API Explorer to interact with the endpoints.

## Approach
This project uses Loopback, a highly extensible Node.js framework, to build the backend. The main components include:

## Models:
1. Team: Represents a team with properties like teamName and teamDescription.
2. Member: Represents a member with properties like memberName and memberRole.

## Data Sources:
postgreDs: Connects to a PostgreSQL database.
testLocal: An in-memory data source for testing purposes.

## Boot Scripts:
initdata.js: Initializes the database with sample data.
root.js: Sets up a root route that returns the server status.
Middleware: Configured in middleware.json and middleware.development.json to handle various aspects like CORS, compression, and error handling.

## Configuration:
config.json: Contains the server configuration, including the API root path and port.
component-config.json: Configures the Loopback component explorer.
This setup ensures a modular and scalable backend for the Ember Team application.
