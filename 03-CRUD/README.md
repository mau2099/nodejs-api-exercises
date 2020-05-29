Sample for creating CRUD
use of routes

home: /api/sales/

#### 0 -> index.js in root
-> it's the creation of server with express. The begining of API  

##### middlewares
* errorHandler : for catching errors in console and exponsing them in API
  * @hapi/joi -> for validating data
  
* validaDataHandler : used for validating schemas data. Such as products, users, accounts, etc 
  * @hapi/boom : for better code status validation handler

* morgan: logger for http routes  
  ["common", "dev", "combined", "short", "tiny"]
* cors: for enabling share content only for whitelist
#### 1 -> router: (controllers)
  * know how to read: [req.params, req.query, req.body]  
  * send those params, query and body to [services](#services)
  * must use middleware for reading json
  get: / ?product=''    ->  req.query
  get: /:id             ->  req.params
  post: /
  delete: /:id
  put: /id

#### 2 -> services:
  * business logic
  * it's the core of my application
  * receive params and query. Knows how to work with data
  * able to call other services and call external lib (for DB.  ie)


#### 3 -> libs / mongoDB: NoSQL
  ![Operador de Comparacion](./assets/images/mongodb_operadores_comparacion.png)   
  ![Operador Logicos](./assets/images/mongodb_operadores_logicos.png)   
  ![Operador Elementos](./assets/images/mongodb_operadores_elementos.png)   
  ![Operador Arreglos](./assets/images/mongodb_operadores_arreglos.png)   
  * cluster: -it's the server 
  * database: the same
  * collections: similar to tables

### Testing
``` npm i -D mocha supertest sinon proxyquire ```  
`` npm run test ``   
  * mocha: for running test
  * supertest: util for temp server
  * sinon: mocks for test
  * proxyquire: inject mocks in test