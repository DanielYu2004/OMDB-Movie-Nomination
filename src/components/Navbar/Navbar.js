import { Layout, Menu } from 'antd';

const { Header } = Layout;


const Navbar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Nominate</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
