## Test Back-end Synvia

### Description
API that returns test results with a sample of toxins based on cutoff scores.

#### Run Application
Please, make sure you already have docker installed, [or see this link to install](https://www.docker.com/products/docker-desktop/)

To run the application just run the command:
```bash
 docker-compose --build
```
To check if containers are running use:
```bash
    docker ps
```

And access the application via browser or postman/insomina via `http://localhost:3333`

#### Swagger
To access the swagger documentation, just access the address `http://localhost:3333/api-docs`

#### Infos
Developed with Node.js, TypeScript, SQLite
