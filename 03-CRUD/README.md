Sample for creating CRUD
use of routes

home: /api/sales/

router: (controllers)
  * know how to read: [req.params, req.query, req.body]  
  * send those params, query and body to services
  get: / ?product=''    ->  req.query
  get: /:id             ->  req.params
  post: /
  delete: /:id
  put: /id

services:
  * business logic
  * receive params and query. Knows how to work with data
  * able to call other services and call external lib (for DB.  ie)

