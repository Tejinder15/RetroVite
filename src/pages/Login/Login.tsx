import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="max-w-sm border border-black w-1/2 p-7">
        <h2 className="text-center">Login</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border border-black"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-black"
            />
          </div>
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me on this device</label>
          </div>
          <button className="block border bg-red-500 w-full">Login</button>
          <p className="text-center">Don't Have an Account ?</p>
          <Link to="/signup" className="block w-full text-center">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
}
