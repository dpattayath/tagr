## Project

### Technology

- Backend (API) is powered by Laravel ^8 on PHP
- Frontend (SPA) is powered by React
- Database: mysql ^8

### Endpoints

#### SPA
- Merchant: http://localhost:85/merchant
- Shopper: http://localhost:85/shopper
#### API - Merchant
- POST http://localhost:85/api/merchants/products
- GET http://localhost:85/api/merchants/products
#### API - Shopper
- POST http://localhost:85/api/shoppers/product/lookup

### Setup

Clone the repo to a directory and `cd` into it.

#### Install dependencies

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs
```
#### Pull images and build containers

```
cp .env.example .env
./vendor/bin/sail up -d
```

#### Run migrations & seeders
```
./vendor/bin/sail artisan migrate
```

#### Build Run front-end app
```
./vendor/bin/sail npm run dev
```
