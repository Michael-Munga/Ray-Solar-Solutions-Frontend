import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout({ user, signOut, handleSignIn }) {
  return (
    <>
      <Navbar user={user} signOut={signOut} handleSignIn={handleSignIn} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
