
# Cypress 10 with allure report + parallel execution



## How to run cypress in headed mode + allure report
```http
  npm run cy:run
```

## How to run cypress parallel in headed mode + allure report
```http
  npm run cy:parallel
```


## Number of browser in parallel mode

#### Parameter

```http
 "cypress-parallel -s cy:run -t 2 -d 'cypress/e2e/*.js'"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` -t 2 -d` | `number` | **Required**. pass number of browser you want , example - ` -t 2 -d`  |


## How to generate allure report affter exeution

```http
allure generate allure-results --clean -o allure-report

```

## Important

```http
 cypress.config.js is the cypress.json file, here you can define cypress configuraion.
```


## Authors

- [Rohit Saini](https://www.github.com/rindia)
- [Linked profile](https://www.linkedin.com/in/rohit-saini-92a198160/)

