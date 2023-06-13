# Resource management application
***
Using a **Vuex store management** system and a **node.js express backend**, this application will allow authenticated to log in
and manage resources using a simple interface.

While the project is unfinished, below I will attempt to detail the working aspects as well as the intended features.

### 1. Working aspects

Once the backend and the frontend are both running on their respective servers, the following endponts will be
accessible via web browser:

| localhost:8080      | Description |
| ----------- | ----------- |
| `/`      | Dashboard page.       |
| `/login`   | Login page.        |
| **localhost:3000** | **Description** |
| `/auth/get-users` | Returns existing users. |
| `/auth/get-user/:id` | Returns specific user. |

In addition to the above accessible endpoints, several pieces of functionality are designed and built out in the backend.

**Backend Clients**

A base client for making calls to the reqres.in API lives in `/server/clients/reqres-client.js`. This class is extended for
mock clients `/server/clients/auth-client.js` and `/server/clients/resources-client.js`.

`auth-client.js` is intended to work as a mock authenticator. As a mock function, it simply checks the existing users found
in the reqres database and returns true if one is found by email. A real authenticator would use a JWT or make an Oauth request.

`resources-client.js` is a mock data retrieval interface. It has CRUD methods that access the reqres API for use by this
application's service methods.

**Backend Services**

Two services - `/server/services/auth/auth-service.js` and `/server/services/auth/resources-service.js` - act as a primary
functionality layer that utilizes the low-level clients defined in `/clients/` and is accessed by the high-level
controllers found in `/controllers/`. As of now, it does very little, but most actual logic would reside here.

**Backend Controllers**

Two controllers are accessed by the express router - `/server/controllers/auth-controller.js` and
`/server/controllers/resources-controller.js`. This is a thin layer whose functions are called by the router.

**Backend Router**
`/server/routes.js` defines two sub-routers, both residing in their respective service layers - `auth-routes.js` and
`resources-routes.js`. These define endpoints that are proxied through the Vue frontend and accessed by the Vue router.

