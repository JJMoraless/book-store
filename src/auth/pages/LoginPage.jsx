export const LoginPage = () => {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form className="form h-75">
        <div className="title">
          Welcome,
          <br />
          <span>sign up to continue</span>
        </div>

        <input
          className="input"
          name="email"
          placeholder="Email"
          type="email"
        />

        <input
          className="input"
          name="password"
          placeholder="Password"
          type="password"
        />

        <button className="button-confirm">Let`s go →</button>
      </form>
    </div>
  );
};
