## Day III

### Focus (Day III)

- Be able to explain and implement a React Higher Order Component to conditionally render protected content to the screen.

### Daily Setup (Day III)

- To start off today, your application should still be structured like yesterday, but now it should have a working search bar, comment input, and like icon.
- Those aren't necessary, however, for what you will be doing today. You can still work on today's part of this project even if you aren't completely done with yesterday's portion.

### Description (Day III)

- Today you will be building a "Higher Order Component" (HOC)
- The HOC will not let users see the posts until they have logged in. (Our login system for this will be faked using LocalStorage).
- The job of the HOC will be to render a login page if the user is not logged in, then render the posts after the user is logged in.

#### Tasks (Day III)

- Create a `<PostsPage />` component in your `components/PostsContainer` directory. x

  - You'll have to move a lot of what is rendered in `app.js` to this new component x
  - In app.js, render the `PostsPage` component. x
  - Make sure the app working as it was before since it has been re-factored now. x
  - This is to ensure that we clean up our App component a little bit before we re-factor it to be wrapped up in an HOC x

- Building the High Order Component

  - Create a directory called `authentication` x
  - Inside that directory create a HOC called `withAuthenticate`. This is where all of the magic is going to happen. x
  - This component should be able to take in a component as an argument, and it will return a `class` component. x
  - Inside of `withAuthenticate's` render method, you'll want to return the Component that gets passed into it. x
  - Be sure to export. x
  - Head over to App.js and `import` in our new `withAuthenticate` Higher Order Component. x
  - Set a new const called `ComponentFromWithAuthenticate`, and set it's value to the HOC invoked, with `PostsPage` passed in. x
  - Inside `App`, you should now render `ComponentFromWithAuthenticate` in place of `PostsPage`. x
  - If this worked correctly, then everything should render as it used to. x
  - `withAuthenticate` will look a lot like this when you're done setting it up. x

```js
const withAuthenticate = App =>
	class extends React.Component {
		render() {
			return <App />;
		}
	};
```

- Build out the LoginPage component. You can design it how you like

  - In your `components` directory, create a directory called `Login` and add a new file called `Login.js`. x
  - There should be a `username` input, a `password` input, and a `Login` button. x
  - The component should invoke the `login` function in `Login.js` when a user logs in. x
  - This login function should set a `username` on `localStorage`. You'll need to check local storage to see if a user is logged in. x
  - Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again. x

- Extending the functionality of the HOC to conditionally render the `LoginPage` or the `App`

  - First, we need to change our `withAuthenticate` HOC to return a second function that will take in a second component (which will be the `LoginPage`). This will look like a "double arrow" function - `const withAuthenticate = PostsPage => LoginPage => {}`. x
  - In `App.js`, we can now invoke the HOC function twice (which is called currying). The first time it's invoked, pass in `PostsPage`. The second time, pass in `LoginPage` (which you'll need to import here). ie - `export default higherOrderComp(FirstComponent)(SecondComponent)` x
  - Inside of the class component that the inner function in `withAuthenticate` returns, we need to add a constructor to hold our state data. x
  - On state we need a `loggedIn` boolean flag. x
  - In `componentDidMount` we need to check `localStorage` to see if a user is logged in, and setState accordingly. x
  - Inside of the render function we will check `if a user is logged in` from the state boolean flag x
  - If a user is logged in we will return the `<PostsPage />`, else we will return the `<LoginPage>` x

#### Stretch Problems (Day III)

- Now that you have a user set in `localStorage`, go ahead and use that `username` when a user posts a comment to make it so the logged in user is the one commenting on the posts. x
- Styled-Components

  - Watch this video about [styled-components](https://youtu.be/bIK2NwoK9xk) in its entirety.
  - Head over to the [Styled-Components docs](https://www.styled-components.com/) and learn about the library.
  - Once you feel like you've got a good grasp of this concept, go ahead and start converting your components into styled-components.
  - Try and make this thing as beautiful as possible

- Deploy your Instagram clone to netlify and share it in the #show-it-off channel.
