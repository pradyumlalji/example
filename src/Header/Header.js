import HeaderLeft from "../HeaderLeft/HeaderLeft";

import HeaderRight from "../HeaderRight/HeaderRight";

import './Header.css'

function Header() {
  return (
    <div>
      <header className="HeaderContainer">
        <HeaderLeft />

        <HeaderRight />
      </header>
    </div>
  );
}

export default Header;
