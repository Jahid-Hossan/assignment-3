### How to run the project locally

Here are the steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Jahid-Hossan/assignment-3
   ```

2. Navigate to the project directory:

   ```bash
   cd Apollo-Level2-assignment-2
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

Your project will run on port 5000.

## Important Note:

You have to make one ".env" file on root folder.

Here is an example of how to create a `.env` file in a Node.js project, ensuring the `.env` file is placed in the root directory where the `package.json` file is located.

1. **Create a `.env` file**: In the root directory of your project (where the `package.json` is located), create a file named `.env`.

2. **Edit the `.env` file**: Add the following environment variables. Replace the placeholders with your actual port number and MongoDB URL.

```dotenv
# Server configuration
PORT=5000

# Database configuration
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

By following these steps, You are ready to run this project locally.
