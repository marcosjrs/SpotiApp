# SpotiApp

Ejercicio de uno de los módulos del curso de Angular: De cero a experto. Con Angular 6.2.3 y Bootstrap 4.


## RECORDAR: Añadir el Client_ID y el Client_Secret en environments/environment.ts y environment.prod.ts

```
export const environment = {
  production: false,
  Token:"XXXXXXXXXXXXX"
};
```

Para obtener este token, se puede realizar la petición POST:

```
https://accounts.spotify.com/api/token
```

con parametros x-www-form-urlencoded:

```
grant_type : client_credentials
client_id : El client id de la app que se creó desde https://developer.spotify.com/dashboard/applications (tras crear cuenta)
client_secret : El client secret de la app que se creó desde https://developer.spotify.com/dashboard/applications (tras crear cuenta)
```

Al hacer la petición nos devuelve el token.

En el proyecto se adjunta la colección "Get Token Spotify.postman_collection.json" para importarla al postman, donde se puede ver la petición ( hay que modificar el client_id y el client_secret en la pestaña Body de la petición)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
