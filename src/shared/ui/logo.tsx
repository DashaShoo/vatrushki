import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const Logo = () => {
  return (
    <Link
      to={ROUTES.HOME}
      className="flex items-center gap-2 w-fit flex-shrink-0 "
    >
      <img src="/logo.png" alt="Vatrushki Logo" className="w-[90px] h-[50px]" />
      <p className="font-lobster text-2xl text-main-dark w-fit">Ватрушки</p>
    </Link>
  );
};
