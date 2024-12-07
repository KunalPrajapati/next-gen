import { Link, useLocation } from "react-router-dom";

interface NavLink {
  index: number;
  name: string;
  url: string;
  classValue?: string;
  mobileWrapper?: (value: boolean) => void;
  onClick?: () => void;
}

const Navlinks = ({
  index,
  name,
  url,
  classValue,
  mobileWrapper,
}: NavLink) => {

  const currentPath = useLocation();

  const handleNavClick = () => {
    if (mobileWrapper) {
      mobileWrapper(false); // Closes the mobile menu
      document.body.style.overflow = "auto";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      tabIndex={index}
      to={url}
      onClick={() => handleNavClick()}
      className={`navigation-link text-white hover:text-white/80 leading-none ${currentPath.pathname === url || "/" + currentPath.pathname.split("/")[1] === url ? "" : ""} ${classValue}`}
    >
      {name}
    </Link>
  );
};

export default Navlinks;