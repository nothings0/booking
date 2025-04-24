import { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Main : React.FC<{ children: ReactNode }> = ({children}) => {
  return (
    <>
        <Header />
        <>
            {children}
        </>
        <Footer />
    </>
  );
}

export default Main;