### This project is based on Egghead course [GraphQL Data in React with Apollo Client](https://egghead.io/courses/graphql-data-in-react-with-apollo-client). Here I am learning & practicing material from that course + materials from these as well:

- [GraphQL Query Language](https://egghead.io/courses/graphql-query-language)
- [Build a GraphQL Server](https://egghead.io/courses/build-a-graphql-server)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[<img src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/231/full/EGH_Apollo-GraphQL-React_Final.png" alt="Course Logo" width="374" height="374"/>](https://egghead.io/courses/graphql-data-in-react-with-apollo-client)

In order to run the client you need to seed the DB and run the server beforehand.

```
cd server
npm install
npm run seed
npm run start:slow
```

or when using yarn

```
cd server
yarn
yarn seed
yarn start:slow
```

You can find the server located here: https://github.com/nikgraf/graphql-apollo-client-course/tree/master/server

The db stores two JSON files stored in `/tmp/recipes.json` and `/tmp/ingedients.json`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn server`

Runs GraphQL server.<br />
Open [http://localhost:4000](http://localhost:4000) to view playground.
