# Project Name

This project is a web application built with Laravel for the backend and React for the frontend. 


## Installation

### Backend (Laravel)

1. Clone the repository:

    ```sh
    git clone https://github.com/eyasulegesse/ERP.git
    cd Inventory
    ```

2. Install dependencies:

    ```sh
    composer install
    ```

3. Copy the `.env.example` file to `.env`:

    ```sh
    cp .env.example .env
    ```

4. Generate the application key:

    ```sh
    php artisan key:generate
    ```

5. Set up your database configuration in the `.env` file:

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_user
    DB_PASSWORD=your_database_password
    ```

6. Run the database migrations:

    ```sh
    php artisan migrate
    ```

7. (Optional) Seed the database:

    ```sh
    php artisan db:seed
    ```

### Frontend (React)

1. Navigate to the `frontend` directory:

    ```sh
    cd frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```sh
    npm start
    # or
    yarn start
    ```

## Usage

1. Start the Laravel development server:

    ```sh
    php artisan serve
    ```

2. The React development server should already be running if you followed the installation steps. If not, navigate to the `frontend` directory and start it:

    ```sh
    npm start
    # or
    yarn start
    ```

3. Open your browser and navigate to `http://localhost:3000` for the React frontend. The Laravel API will be accessible at `http://localhost:8000`.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

