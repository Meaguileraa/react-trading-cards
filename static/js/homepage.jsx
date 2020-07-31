"use strict";

function Homepage() {
  return (
    <div>
      <p>Welcome to trading cards! </p>
      <a href="/cards">Click here for trading cards.</a>
      <img src="/static/img/balloonicorn.jpg"/>

    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

