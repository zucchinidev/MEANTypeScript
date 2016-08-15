# Readme

## Synopsis

Application for management of the human resources department of a 
company using the stack mean (**Mongo + Mongoose, Express, Angular 2 and NodeJS**) + **TypeScript**

## Code Example
```
// Create Employee
    create(item: IEmployeeModel): Promise<IEmployeeModel> {
        return new Promise<IEmployeeModel>((resolve, reject) => {
            this.repository
                .create(item)
                .then(resolve)
                .catch(reject);
        });
    }
```

## Motivation

 To learn about development with **NodeJS** & **Angular 2** using **TypeScript**
 
## Installation

* Install TypeScript Compiler CLI utility.
```
npm install -g typescript
```
* Install Typings CLI utility.
```
npm install -g typings
```
* Install NPM modules.
```
npm install
```

* Install typings.
```
typings install
```
## Start
* Change constant DB_CONNECTION_STRING in Constants file and 
```
npm start
```

## API Reference
TODO

## Tests
TODO
