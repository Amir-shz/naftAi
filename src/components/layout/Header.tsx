import Logo from "../ui/Logo";
import Nav from "../ui/Nav";

function Header() {
  return (
    <header className="flex justify-between items-center h-16 max-md:flex-row-reverse backdrop-blur-sm rounded-b-md -mx-4 px-4">
      <Logo />
      <Nav>
        <Logo />
      </Nav>
    </header>
  );
}

export default Header;
