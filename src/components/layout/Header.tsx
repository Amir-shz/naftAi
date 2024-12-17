import Logo from "../ui/Logo";
import Nav from "../ui/Nav";

function Header() {
  return (
    <header className="flex justify-between items-center h-16 max-md:flex-row-reverse">
      <Logo />
      <Nav>
        <Logo />
      </Nav>
    </header>
  );
}

export default Header;
