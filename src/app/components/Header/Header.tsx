"use client";
import { Button, Col, Flex, GetProps, Input, Row, Typography } from "antd";
import "./Header.css";
import { MailOutlined, PhoneOutlined, SearchOutlined, VideoCameraOutlined, WhatsAppOutlined } from "@ant-design/icons";
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function Header() {
  return (
    <div style={{ width: "100%",padding:5 }}>
      <div style={{background:"black",color:"white",padding:3}}>
      <Row>
        <Col lg={2}></Col>
        <Col lg={20}>
        <div style={{display:"flex",gap:20,alignItems:"center"}}>
          <div className="navbar-icon">
        <WhatsAppOutlined />
        </div>
        <div className="navbar-icon">
        <VideoCameraOutlined/>
        </div>
          <div className="navbar-icon">
        <PhoneOutlined />
        </div>
        <Typography className="mobile-number">+91 864 6444 2222</Typography>
        <div className="navbar-mail"><MailOutlined style={{fontSize:"larger",borderLeft:"1px solid white",paddingLeft:"15px"}}/>info@suvega.com</div>
        </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
      </div>
      <div className="header-second-row">
      <Row>
        <Col lg={2} xs={1}></Col>
        <Col lg={10} xs={10}>
          <Flex className="header-column1">
            <img src="logo.png"/>
            <Typography className="post-loads">Post Loads</Typography>
            <Typography className="find-trucks">Find Trucks</Typography>
          </Flex>
        </Col>
        {/* <Col lg={2}></Col> */}
        <Col lg={10} xs={10}>
          <Flex className="header-column2">
            <Search
            className="search-header"
               onSearch={onSearch}
              // enterButton={<SearchOutlined style={{backgroundColor:"transparent"}}/>} // Adds the search icon as a button
              style={{ width: 300,padding:10}} // Customize width and height
            />
            <Button className="nav-button1">Login</Button>
            <Button className="nav-button2">Get Started</Button>
          </Flex>
        </Col>
        <Col lg={2} xs={1}></Col>
      </Row>
      </div>
    </div>
  );
}
