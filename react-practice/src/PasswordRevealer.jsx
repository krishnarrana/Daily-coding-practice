import React from "react";
function PasswordRevealer({ value }) {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <input
        type={shown ? "text" : "password"}
        value={value}
        onChange={() => {}}
        placeholder={"Password"}
      />
      <button onClick={() => setShown(!shown)}>
        {shown ? "Hide" : "Show"}
      </button>
    </div>
  );
}
export default PasswordRevealer;
