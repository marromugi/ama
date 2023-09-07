import { UserMenu } from "../_components/UserMenu";

export const LoginPage = () => {
  return (
    <form action="/auth/login" method="post">
      <UserMenu />
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign In</button>
      <button formAction="/auth/signup">Sign Up</button>
      <button formAction="/auth/logout">Logout</button>
    </form>
  );
};
