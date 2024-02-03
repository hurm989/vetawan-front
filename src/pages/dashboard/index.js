import { useEffect } from "react";
import MobAppBar from "../../components/atoms/mobAppBar";
import Header from "../../components/modules/header";
import SearchNavbar from "../../components/modules/searchNav";
import DrawerAppBar from "../../components/atoms/appBar";
import SidePannel from "../../components/molecules/sidepannel";
import Footer from "../../components/modules/footer";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="marginHeader">
        <Header />
      </div>
      <div className="mobAppBar">
        <MobAppBar />
      </div>
      <div>
        <SearchNavbar />
      </div>
      <div
        className="appbar"
        style={{ position: "sticky", top: 0, zIndex: 20 }}
      >
        <DrawerAppBar />
      </div>
      <div className="mainContainer ">
        <div className="mt-5">
          <SidePannel />
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};
export default Dashboard;
