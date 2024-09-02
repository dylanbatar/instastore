### InstaStore
InstaStore is a microservice responsible for selecting the nearest "convenience" store to deliver a grocery order to our B2B clients.

- **Where should the data be stored (SQL, NoSQL)?**
  - We don't have any preferred technology, so we leave it to your discretion.

- **What parameters would the client send us?**
  - The parameters are defined by the design you decide to implement. The most crucial aspect for solving this challenge is the client's geolocation point.

- **Should the project have any specific architecture?**
  - No, it's not a requirement. You can choose the one that makes the most sense and best fits the needs.

- **Should there be unit tests?**
  - We leave this decision up to you; however, we would like to see as many best practices as you can implement.

- **Should the documentation be in Swagger or another documentation library?**
  - We don't have a preference, so please choose the one that makes the most sense to you.

- **Should the API have some kind of security?**
  - It's not mandatory; it purely depends on the decisions you make and what you prioritize within the scope of this delivery.

## Architecture

![Architecture](<Architecture.png>)

## How it works
1. **B2B Client:** A B2B (Business-to-Business) client makes a request to the "InstaStore" service. This client can be a web or mobile application that requires specific data or functionalities provided by "InstaStore."

2. **Load Balancers:** The client's request first passes through the load balancers. These are responsible for distributing incoming requests among the instances of the "InstaStore" service to ensure that no instance is overloaded, thereby improving the availability and performance of the service.

3. **InstaStore Service:** Once the request has been redirected by the load balancers, it reaches the "InstaStore" service. This service is the main component that processes the client's requests and selects the nearest "convenience" store to deliver the order according to the records in the database or cache.

4. **Cache:** To improve response speed and reduce the load on the database, the "InstaStore" service can cache frequently requested data. This allows subsequent requests for similar data to be handled more quickly, without needing to access the database.

5. **Database:** If the requested data is not in the cache or an operation involving data persistence is required, the "InstaStore" service interacts with the database. This is where the necessary data is stored and retrieved to fulfill the client's requests.

## Improvements and trade-offs
1. **What would you improve in your code? Why?**
  - adding testing, documentation, a cache layer for incoming requests and error handling, Basic authentication, and security
2. **What trade-offs would you make to accomplish this on time? What would you do next time to deliver more and sacrifice less?**
  - The cache layer 
3. **Do you think your service is secure? Why?**
  - CUrrently the service is not secured, but we will add it in the next iteration
4. **What would you do to measure the behavior of your product in a production environment?**
 - Adding a monitoring system to track the performance of the service like ELK stack 

## How run the project
- Clone the project
- Install the dependencies
- Create a .env file with the following content
```
PORT=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
```
- Run the project
```
npm run dev
```

### Docker
1. Clone the project
2. Run docker-compose up