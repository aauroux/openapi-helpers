# Openapi Helpers

> This an early prototype :)

This package contains some helper functions to handle openapi 3 json file.

**[WIP]**

## Installation

```bash
npm install openapi-helpers
```

## Project Structure
    .
    ├── ...
    ├── src
    │   ├── docs                # Your *.md files
    │   ├── routes              # Endpoints goes here
    │   └── specs               # Openapi specification
    │   │   ├── components      # Components goes here
    │   │   └── info.js         # Base json file
    │   └── ...
    └── ...

## Examples

### Basic Usage

```js
import { uuid, email, object, string } from 'openapi-helpers'

const user = object({
    id: uuid(),
    name: string('Full Name'),
    email: email(),
})
```

Will generate:

```json
{
    "type": "object",
    "properties": {
         "id": {
            "type": "string",
            "format": "uuid"
        },
        "name": {
            "type": "string",
            "example": "Full Name"
        },
        "email": {
            "type": "string",
            "format": "email"
        }
    }
}
```

### Component Usage

Example of `/src/specs/components/schemas/users.js`:

```js
import { array, datetime, email, list, object, ref, string, uuid } from 'openapi-helpers'

/**
 * User Collection
 * --------------------------------------------------------------------------------- */
export const UserCollection = object({
    data: array(ref('#/components/schemas/User')),
    meta: object({
        currentPage: integer(1),
        lastPage: integer(1),
        perPage: integer(10),
        total: integer(1),
        count: integer(1),
    })
})

/**
 * User List
 * --------------------------------------------------------------------------------- */
export const UserList = array(ref('#/components/schemas/User'))

/**
 * User
 * --------------------------------------------------------------------------------- */
export const User = object({
    id: uuid(),
    namespace: string('users'),
    name: string('John Doe'),
    firstName: string('John'),
    lastName: string('Doe'),
    email: email(),
    role: list(['admin', 'user'], 'user'),
    createdAt: datetime(),
    updatedAt: datetime(),
    links: object({
        self: string('/users/3fa85f64-5717-4562-b3fc-2c963f66afa6'),
    }),
})
```

## Create the json specs file

```js
import { writeFileSync } from 'fs'
import { compile } from 'openapi-helpers'

const json = compile('./src') // Compile 'src' folder

// Optionaly save json file
writeFileSync('./api.json', JSON.stringify(json), 'utf8')
```

## License

[MIT](http://vjpr.mit-license.org)
