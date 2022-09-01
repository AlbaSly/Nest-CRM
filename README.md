# NEST CRM API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Tech Stack Used
* Nest
* MongoDB
* Docker

## How to run this
1. Clone the repo

2. Exec with ```yarn install```

3. You must need already have CLI installed: ```npm i -g @nestjs/cli```

4. Up Database with ```docker-compose up-d```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


---


# Endpoints
```
{{API_URL}} = http://localhost:{your_port}/api/v1/
```
---
## Clients Endpoint

### Get Clients

as GET method:
```javascript
{{API_URL}}/clients/
//This will return all clients
```

### Get Single Client

as GET method
```javascript
{{API_URL}}/clients/:id

//id must be a valid mongo id
```

### Create Client

as POST method:
```javascript
{{API_URL}}/clients/

//data
{
  name: "Bob",                          //string, required
  email: "bob@email.com",               //string, required
  company: "Microhard",                 //string, required
  phone: "123456",                      //string, optional
  notes: "Is my most important client"  //string, optional
}
```

### Update Client

as PATCH method
```javascript
{{API_URL}}/clients/:id

//id must be a valid mongo id

//new data
{
  //ALL VALUES CAN BE optional
  name: "Bob update",                          //string, required
  email: "bob@email.com",               //string, required
  company: "Microsoft",                 //string, required
  phone: "123456",                      //string, optional
  notes: "Hello World"  //string, optional
}
```

### Delete Client

as DELETE method
```javascript
{{API_URL}}/clients/:id
//id must be a valid mongo id
```