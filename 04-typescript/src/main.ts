import "./style.css";
import { User } from "./modules/User";

const user = new User({
  id: 1,
  name: "Alex",
  email: "alex@example.com",
  edad: 30,
});

(async () => {
  await user.fetchUser();
  console.log(user);
})();
