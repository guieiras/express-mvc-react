# Express MVC Boilerplate

Basic MVC application using Express, Sequelize and ReactJS.

## Features

- Convention

Create a `Controller.js` file on "controllers" folder and it is ready to be used on a route.
Create a `.js` Sequelize file on "models" folder and it is ready to be used on the application.
Set routes using object notation and get time and readability during development.

- Simple configuration

Don't worry about configuration. Just get a coffee and start creating Sequelize models, Controller classes and React components as ever. Everything is autoloaded on server startup.

Use `IndexController.js` and `Index.jsx` as examples of how you should write your Controllers and Views.

- Controllers

They are simple ES6 classes inheriting from `controllers/BaseController.js`. Each mathod is an action. You will point them on routes. Every controller *MUST* be saved on `src/controllers` root folder to be autoloaded.

*Controller* sample

```javascript
import BaseController from './BaseController'

export default class EntitiesController extends BaseController {
  index() {
    let entities = EntityFetcher.all()
    this.setVar('entities', entities)
    this.render('entities/Index.jsx')
  }

  show() {
    let entity = EntityFetcher.find(this.params.id)
    this.setVar('entity', entity)
    this.render('entities/Show.jsx')
  }

  create() {
    let entity = EntityFetcher.create(this.parametrize(['id', 'name']))
    this.setVar('entity', entity)
    this.render('entities/Show.jsx')
  }

  update() {
    let entity = EntityFetcher.update(this.params.id, this.parametrize(['id', 'name']))
    this.setVar('entity', entity)
    this.render('entities/Show.jsx')
  }

  destroy() {
    EntityFetcher.delete(this.params.id)
    this.setVar('entities', EntityFetcher.all())
    this.render('entities/Index.jsx')
  }
}
```

- Routes

Don't get lost on your app routes. There is just one file to declare them.

*routes.js* sample

```javascript
module.exports = {
  '/' : {
    controller: 'IndexController',
    children: [{ method: 'get', path: '/', action: 'index' }]
  },
  '/entities' : {
    controller: 'EntitiesController',
    children: [
      { method: 'get', path: '/', action: 'index' },
      { method: 'get', path: '/:id', action: 'show' },
      { method: 'post', path: '/', action: 'create' },
      { method: 'put', path: '/:id', action: 'update' },
      { method: 'delete', path: '/:id', action: 'destroy' }
    ]
  }
}
```

## Setting Application

- Set .env variables

`APP_SECRET`: Encryptation key

`PORT`: HTTP port

`DB_HOST`: PostgreSQL host

`DB_USER`: PostgreSQL username

`DB_PASSWORD`: PostgreSQL password

`DB_DATABASE`: PostgreSQL database name

## Commands

- `npm start`: Launch application on `PORT`
- `npm test`: Run Mocha specs
- `npm run lint`: Lint Application using ESLint
