import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Layout, Avatar, Menu, Breadcrumb, Card} from 'antd';
import { Typography } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { BookOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Popover, Button } from 'antd';
import Form from 'antd/lib/form/Form';

const content = (
  <div>
    <a>Tiếng Việt</a>
    <p>English</p>
  </div>
);

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;


const App = () => (
  <div className="App">
    <Header id='header'>
      <UnorderedListOutlined style={{color:'white', float:'left', fontSize:'30px', lineHeight:'64px'}}/>
      <img src='./logo3.png'></img>    
    </Header>
    <Header style={{background:'white'}}></Header>
    <div id='banner'>
       <img src='./logo2.png'></img>
       <Popover content={content} title="Ngôn ngữ">
       <Button style={{float:'right', margin:40}} type="primary">Tiếng Việt</Button>
       </Popover>
    </div>
    <div id='slide'>
      <img src='./banner1.jpg'></img>
    </div>
    <Layout>
      <Header style={{background:'#4dd0e1', padding:10,}}>
      <Avatar size={50} src='./uneti.png' style={{float:'right'}}></Avatar>
      <Title level={2} style={{color:'#444'}}>Thực Tập Cuối Khóa</Title>
    </Header>
      <Layout>
      <Sider style={{background:'white', color:'white'}}>
        <Menu
          style={{ textAlign:'center'}}
          defaultSelectedKeys={['danhmuc']}
          mode="inline"
        >
          <Menu.Item key='danhmuc'>DANH MỤC</Menu.Item>
          <SubMenu key='tv' title=
          {
            <span>
              <UserOutlined />
              <span>Thành Viên</span>
            </span>
          }>
            <SubMenu key='lop1' title='Lớp Tin 12a1'>
              <Menu.Item key='tv1'>Bùi Thúy Quỳnh</Menu.Item>
              <Menu.Item key='tv2'>Nguyễn Tiến Đức</Menu.Item>
              <Menu.Item key='tv3'>Dương Duy Lam</Menu.Item>
            </SubMenu>
            <SubMenu key='lop2' title='Lớp Tin 12a2'>
              <Menu.Item key='tv4'>Vũ Xuân Tuấn</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key='gv' title={
            <span>
            <UserOutlined />
            <span>Giáo viên hướng dẫn</span>
          </span>
          }></SubMenu>
          <SubMenu key='nd' title=
          {
            <span>
              <BookOutlined />
              <span>Nội dung học phần</span>
            </span>
          }>
            <SubMenu key='nd1' title='Chương 1'>
              <Menu.Item key='nd11'>Nội dung</Menu.Item>
            </SubMenu>
            <SubMenu key='nd2' title='Chương 2'>
              <Menu.Item key='nd21'>Nội dung</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key='ctk' title=
          {
            <span>
              <BookOutlined />
              <span>Chương trình khung</span>
            </span>
          }>
            <SubMenu key='ctk1' title='Chương 1'>
              <Menu.Item key='ndctk1'>Nội dung</Menu.Item>
            </SubMenu>
            <SubMenu key='ctk2' title='Chương 2'>
              <Menu.Item key='ndctk2'>Nội dung</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>TIN 12A2</Breadcrumb.Item>
        <Breadcrumb.Item>TIN 12A1</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background:'#fff', height:'auto', minHeight:650, padding:20}}>
      <Card
        style={{ width: 300, float:'left', padding:20, margin:15 }}
        cover={
          
          <Image
            alt="example"
            src="./lam1.jpg"
          />
    }       
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="./ic1.png" />}
      title="DƯƠNG DUY LAM"
      description="Tin 12a1"
    />
    </Card>
    <Card
        style={{ width: 300, float:'left', padding:20, margin:15 }}
        cover={
          <Image
            alt="example"
            src="./D3.png"
          />
    }       
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="./ic3.png" />}
      title="NGUYỄN TIẾN ĐỨC"
      description="Tin 12a1"
    />
    </Card>
    <Card
        style={{ width: 300, float:'left', padding:20, margin:15 }}
        cover={
          <Image
            alt="example"
            src="./Q3.png"
          />
    }       
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="./ic2.png" />}
      title="BÙI THÚY QUỲNH"
      description="Tin 12a1"
    />
    </Card>
    <div id='content'>
      <div id='title1'></div>
      <div className='search'>
      </div>
      <div className='tintuc'></div>
    </div>
      </div>
    </Content>

        <Footer style={{textAlign:'center', color:'gray'}}>React Ant Design Test by Duong Duy Lam</Footer>
      </Layout>
      </Layout>
    </Layout>
  </div>
);

// function Tieude(props){
//   return(
//     <div className='Tieude'>
//     <h2 style={{color:'darkred', fontSize:25}}>{props.h2}</h2>
//     <p style={{color:'#444', fontSize:15, fontWeight:'normal'}}>{props.p}</p>
//     <a>Xem thêm...</a>
//     </div>
//   )
// }

var app1=(
  <div className='Tieude'>
    <h2>HỌC TẬP ĐỂ KIẾN TẠO TƯƠNG LAI</h2>
    <p>Trường Đại học Kinh tế – Kỹ thuật Công nghiệp đã thực hiện tự đánh giá và đăng ký kiểm định chất lượng cơ sở giáo dục và đã được công nhận đạt tiêu chuẩn kiểm định chất lượng giáo dục vào năm 2018. Nối tiếp từ thành công đó, năm học 2019 – 2020 Nhà trường đã thực hiện đánh giá ngoài 9/15 chương trình đào tạo, trong đó có 6 chương trình đào tạo đã đủ điều kiện được cấp giấy chứng nhận kiểm định chất lượng.</p>
  </div>
)

ReactDOM.render(app1, document.querySelector('#title1'));
export default App;