function Hello() {
  return (
    <div>
      <form>
        <div>
          <label>
            Enter your name
            <input type="text" placeholder="Enter your name" />
          </label>
        </div>
        <div>
          <label>
            Enter your email
            <input type="email" placeholder="Enter your email" />
          </label>
        </div>
        <div>
          <label>
            Enter your password
            <input type="password" placeholder="Enter your password" />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="buttom">Buttom</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Hello;
