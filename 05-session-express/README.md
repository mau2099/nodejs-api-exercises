### Cookies vs Session Storage vs Local Storage
* El Local Storage tiene un almacenamiento máximo de 5MB y la información no se va con cada request al servidor, *la información va a persistir aunque cerremos el navegador.*
* El Session Storage es similar al Local Storage solo que la información está disponible por pestaña o por la ventana del navegador. La información estará disponible solo en esa pestaña.
* Las Cookies tienen solo un almacenamiento de 4KB, se les puede establecer un tiempo de expiración, la desventaja de usarlo es que al hacer request de imágenes o datos las cookies van junto con la petición.

Si la información no es sensible, podemos almacenarla en Local Storage o en Session Storage.
