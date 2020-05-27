Sample for creating CRUD
use of routes

home: /api/sales/

#### router: (controllers)
  * know how to read: [req.params, req.query, req.body]  
  * send those params, query and body to [services](#services)
  * must use middleware for reading json
  get: / ?product=''    ->  req.query
  get: /:id             ->  req.params
  post: /
  delete: /:id
  put: /id

#### services:
  * business logic
  * it's the core of my application
  * receive params and query. Knows how to work with data
  * able to call other services and call external lib (for DB.  ie)


#### mongoDB: NoSQL
  ![Operador de Comparacion](./assets/images/mongodb_operadores_comparacion.png)   
  ![Operador Logicos](./assets/images/mongodb_operadores_logicos.png)   
  ![Operador Elementos](./assets/images/mongodb_operadores_elementos.png)   
  ![Operador Arreglos](./assets/images/mongodb_operadores_arreglos.png)   
  * cluster: -it's the server 
  * database: the same
  * collections: similar to tables

