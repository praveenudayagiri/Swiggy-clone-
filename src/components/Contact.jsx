import { useContext } from "react";
import userContext from "../utils/userContext";

const Contact = () => {
  const { loggedinUser, setUserName } = useContext(userContext);

  return (
    <div>
      <h1>This is contact page</h1>
      <input
        className="contact-input"
        type="text"
        value={loggedinUser}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p style={{ fontSize: "14px", color: "gray", marginTop: "8px" }}>
        Change name here to update the logged-in user shown in the header.
      </p>
    </div>
  );
};

export default Contact;
