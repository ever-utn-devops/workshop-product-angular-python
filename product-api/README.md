# How to run the api locally?

1. Install Visual Code and nodejs
2. Clone the project in your computer.
3. Open the project in visual Code.
4. Open the terminar (menu View--> terminal)
5. On the terminal type the following command: **npm install** it for installing app dependencies.
6. For running the app, type in the terminar the following command: **npm start**
7. No close the terminar, neither the Visual Code, and access the api using the product endpoint by the following url: [http://localhost:3007/products](http://localhost:3007/products)
## Endpoints de los apis
| Endpoint | Method | Description | Input | Output | Example | Exceptions |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| GetAllProducts | GET | Return all products |  | [{"productId": 2,"productName": "Garden Cart","productCode": "GDN-0023", "releaseDate": "March 18, 2019","price": 32.99,"description": "15 gallon capacity rolling garden cart","starRating": 5,"imageUrl": "assets/images/garden.jpg"}, {"productId": 5,"productName": "Hammer","productCode": "TBX-0048","releaseDate": "May 21, 2019","price": 8.9,"description": "Curved claw steel hammer","starRating": 4.6,"imageUrl": "assets/images/hammer.jpg"},{"productId": 7,"productName": "Drill","productCode": "PRX-095","releaseDate": "Sept 2nd, 2019","price": 32.9,"description": "","starRating": 3.2,"imageUrl": "assets/images/drill.jpg"} | http://localhost:3007/products | If not returns products the response is a [] | 
| GetAProduct | GET | Return a specific product information | productId | [{"productId": 5,"productName": "Hammer","productCode": "TBX-0048","releaseDate": "May 21, 2019","price": 8.9,"description": "Curved claw steel hammer","starRating": 4.6,"imageUrl": "assets/images/hammer.jpg"}] | http://localhost:3007/products/5 | If the product is not found, it responses: {"success": "false", "message": "Product not found"} |
| DeleteProduct | DELETE | Delete a product | productId | [{"productId": 5,"productName": "Hammer","productCode": "TBX-0048","releaseDate": "May 21, 2019","price": 8.9,"description": "Curved claw steel hammer","starRating": 4.6,"imageUrl": "assets/images/hammer.jpg"}] | http://localhost:3007/products/5 | If the product is not found, the response is: {"success": "false","message": "The product does not exist. Specify a product that is already stored."} |
| InsertProduct | POST | Add a new product | {"productId": 11,"productName": "Big Hammer","productCode": "GDN-0030","releaseDate": "March 18, 2019","price": 60,"description":"Curved steel hammer","starRating": 3,"imageUrl": "assets/images/hammer.jpg"} | {"productId": 11,"productName": "Big Hammer","productCode": "GDN-0030","releaseDate": "March 18, 2019","price": 60,"description":"Curved steel hammer","starRating": 3,"imageUrl": "assets/images/hammer.jpg"} | http://localhost:3007/products/ |  |
| UpdateProduct | PUT | Update a product | {"productId": 11,"productName": "Big YELLOW Hammer","productCode": "GDN-0030","releaseDate": "March 20, 2022","price": 70,"description":"Steel hammer","starRating": 4,"imageUrl": "assets/images/hammer.jpg"} | {"productId": 11,"productName": "Big YELLOW Hammer","productCode": "GDN-0030","releaseDate": "March 20, 2022","price": 70,"description":"Steel hammer","starRating": 4,"imageUrl": "assets/images/hammer.jpg"} | http://localhost:3007/products/ | If the product is not found, it reponses: {"success": "false","message": "The product does not exist. Specify a product that is already stored."} |

