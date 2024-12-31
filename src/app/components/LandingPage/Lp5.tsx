import { Button, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { url } from "inspector";

export default function Lp5() {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url('../../trafficls.png')`,
        backgroundColor: " rgba(0,0,0,0.5)",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: 50,
      }}
      className="banner-main"
    >
      <Row className="banner">
        <Col span={2}></Col>
        <Col span={20}>
          <Title style={{ color: "yellow" }}>Mega Savings On Loads</Title>
          <Title level={2} style={{ color: "white" }}>
            {" "}
            Streamline Your Move, Save Big, and Enjoy
          </Title>
          <Title level={2} style={{ color: "white" }}>
            {" "}
            a Stress-Free Relocation!
          </Title>
          <Button
            style={{
              backgroundColor: "yellow",
              paddingLeft: 50,
              paddingRight: 50,
              paddingTop: 25,
              paddingBottom: 25,
              borderRadius: 10,
            }}
          >
            Get Started
          </Button>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
}
