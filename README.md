# Cek Gudang

A simple inventory management system built with Next.js and HeroUI.

## Features

- Inventory tracking across multiple warehouses
- Stock level monitoring with alerts
- CRUD operations for inventory items
- Responsive design

## Tech Stack

- Next.js
- HeroUI
- Tailwind CSS
- appbackend.io API.

## Setup Instructions

1. Clone the repository

````bash
git clone https://github.com/yourusername/stockopname.git
````

2. Install dependencies
```bash
npm install
````

3. Run the development server

```bash
npm run dev
```

This will start the development server at http://localhost:3000.

## API Endpoints

The appbackend.io API is used for data storage and retrieval. The following endpoints are used:

- GET Get all inventory items
- POST Create a new inventory item
- PUT Update an existing inventory item
- DELETE Delete an inventory item

## Known Bugs

- By default minimum stock is set to static value of 20
- No error handling for API requests
- Warehouse yet predefined
- Same items can be added to the inventory multiple times
- Same items on low stock appended to the low stock list because of not calculating the total stock
- Pagination shown not functioning

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
