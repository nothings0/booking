import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";

const User : React.FC = () => {
  return (
    <>
      <Header />
      {/* sidebar */}
        <Outlet />
      <Footer />
    </>
  );
}

export default User;