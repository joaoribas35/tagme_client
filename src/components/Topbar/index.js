import logo from "../../assets/img/logo-coco-bambu-mini.png";
import { GiCook } from "react-icons/gi";
import { FaUserCircle, FaFileAlt } from "react-icons/fa";
import { Container, RightSide, Icons } from "./styles";

const Topbar = ({ setSearch }) => {
  const handleSearch = (e) => {
    if (setSearch) {
      setSearch(e.target.value);
    }
  };

  return (
    <Container>
      <img src={logo} alt="coco bambu" />;
      <RightSide>
        <input
          type="text"
          placeholder="Buscar receita..."
          onChange={handleSearch}
        />
        <Icons to="/pedidos">
          <GiCook />
          <p>Pedidos</p>
        </Icons>
        <Icons to="/receitas">
          <FaFileAlt />
          <p>Receitas</p>
        </Icons>
        <Icons to="/">
          <FaUserCircle />
          <p>Sair</p>
        </Icons>
      </RightSide>
    </Container>
  );
};

export default Topbar;
