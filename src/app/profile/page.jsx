import styles from "./page.module.css";
import LogoutButton from "@/components/LogOut/LogoutButton";

const fetchProfileProduts = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/users/3`);
  const result = await response.json();
  return result;
};

export default async function ProfilePage() {
  const user = await fetchProfileProduts();

  return (
    <div className={styles.profileWrap}>
      <h1>Profile</h1>
      <p>
        Name: {user.name.firstname} {user.name.lastname}
      </p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Addres: {user.address.number} {user.address.street} {user.address.city},{" "}
        {user.address.zipcode}
      </p>

      <LogoutButton/>
    </div>
  );
}