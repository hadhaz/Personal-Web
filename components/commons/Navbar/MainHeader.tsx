import DesktopNav from "./device/DesktopNav";
import MobileNav from "./device/MobileNav";

const MainHeader: React.FC = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default MainHeader;
