import { AddIcon, NotificationIcon } from "../../../assets/icons";
import { Avatar } from "../avatar/avatar";
import { Logo } from "../logo";
import { SearchBar } from "../search-bar/search-bar";

const Header = () => {
  return (
    <header className="bg-basic-light sticky top-0 z-50 w-full shadow-sm flex items-center justify-between gap-10 bg-bg-primary px-4 py-3">
      <Logo />

      <SearchBar />

      <div className="flex items-center">
        <button className="p-2 rounded-full hover:bg-bg-secondary transition-colors relative group">
          <AddIcon className="w-7 h-7 text-main-dark" />
        </button>

        <button className="p-2 rounded-full hover:bg-bg-secondary transition-colors relative">
          <NotificationIcon className="w-7 h-7 text-main-dark" />
        </button>

        <Avatar />
      </div>
    </header>
  );
};

export default Header;
