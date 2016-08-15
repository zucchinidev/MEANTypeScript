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

## License

MIT License

Copyright (c) 2016 zucchinidev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.