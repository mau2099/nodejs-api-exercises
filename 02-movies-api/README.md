# PROYECTO - Platzi Video


# crear un proyecto de node
	npm init -y (crea el package .json)

# seguir buenas practicas de formato de codigo con eslint
	.eslintrc.json

# instalacion de modulos
	* npm i express dotenv
	* npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier
	* npx mrm lint-staged	--lo que haces es formatear el package.json
	* npm i @hapi/boom		--manejo de codigos de HTTP (404, 200, 500, etc) de forma amigable
	* npm i @hapi/joi		--middleware para validacion de datos por medio de schema
	* npm i -D mocha supertest sinon proxyquire
		{
			mocha nos ayuda a correr los test,
			supertest nos ayuda a levantar un servidor temporal,
			sinon es una utilidad que nos ayuda a hacer mocks para test,
			proxyquire nos ayuda a inyectar los mocks cuando requiramos los paqutetes
		}

# crear un archivo de configuracion con las variables de entorno inciales en el archiv env
	config/index.js

# crear un servidor de express
	index.js