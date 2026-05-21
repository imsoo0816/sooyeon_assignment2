import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">전체</NavLink>

      <NavLink to="/active">
        미완료
      </NavLink>

      <NavLink to="/api">
        API
      </NavLink>
    </nav>
  );
}

export default Navigation;