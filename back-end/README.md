# Back-end task of Code Challenge for Scoutbase

This task is for demonstrating your understanding of HTTP, GraphQL, Node.js and general API practices.

## Requirements
1. NodeJs > 10.16

## Installation
```
$ yarn
```

## Usage
Use the following command to start the development server
```
$ yarn dev
```
Then open http://localhost:4000/ in your browser to open the graphql playground

## Helper Queries
1. Add new actor
```graphql
mutation addActor($name: String!, $birthday: String!, $country: String!) {
  addActor(name: $name, birthday: $birthday, country: $country) {
    id
    name
    country
    birthday
  }
}
```

2. Add new director
```graphql
mutation addDirector($name: String!, $birthday: String!, $country: String!) {
  addDirector(name: $name, birthday: $birthday, country:$country) {
    id
    name
    country
    birthday
  }
}
```

3. Add new Movie
```graphql
mutation addMovie($title: String!, $year:Int!, $rating:Float!, $actors:[String!], $directors:[String!]){
  addMovie(title: $title, year: $year, rating: $rating, actors: $actors, directors: $directors) {
    id
    title
    year
    rating
    actors {
      name
      birthday
      country
    }
    directors {
      name
      birthday
      country
    }
  }
}
```

4. Add new user
```graphql
mutation createUser($username: String!, $password: String!, $name: String) {
  createUser(username: $username, password: $password, name: $name) {
    token
    user {
      name
    }
  }
}
```

5. Login user
```graphql
mutation login($username: String, $password: String) {
  login(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}
```

6. List all movies
```graphql
{
  movies {
    title
    year
    rating
    scoutbase_rating
    actors {
      name
      birthday
      country
    }
    directors {
      name
      birthday
      country
    }
  }
}
```
NOTE: ```Authorization``` header is required for retrieving protected fields such as ```scoutbase_rating```. Use the token which you get after creating a new user or use the following.

```
{
  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazFvdHBqNDM1ODlxMDk5MzE2dGNvdzR0IiwiaWF0IjoxNTcwOTYxMTUyfQ.Cg9o2LkcZTXxqJl9c9ThWp5-HEH6nRPIjyYBCBwqm04"
}
```


## Instructions:

1. Implement a Node.js-based server with raw `http`, Koa or Express.
2. Add a `/graphql` endpoint serving the apollo-server or any other GraphQL implementation.
3. Schema must be able to return proper response for the following public query:

```graphql
{
  movies {
    title
    year
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }
}
```

4. Add support for the following mutation:
```graphql
mutation createUser($username: String, $password: String) {
  createUser(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}
```

5. To expand on the number four, add a mutation-based authentication that accepts:
```graphql
mutation login($username: String, $password: String) {
  login(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}
```

6. Authenticated users may request additional fields for the query used earlier. New `scoutbase_rating` field must return the a random string between 5.0-9.0:

```graphql
{
  movies {
    scoutbase_rating

    title
    year
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }
}
```

7. `/graphql` must be accessible for external clients.

8. End.
