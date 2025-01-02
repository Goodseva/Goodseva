"use client";
import Image from "next/image";

import { Col, Divider, Flex, List, Rate, Row, Typography } from "antd";
import happy from "../../../../public/happyness.png";
import Title from "antd/es/typography/Title";

export default function Lp2() {
  return (
    <Row
      style={{
        width: "100%",
        margin: 0,
      }}
      gutter={[16, 16]}
    >
      <Col xs={0} sm={2}></Col>

      <Col
        xs={24}
        sm={10}
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Title id="main-title-Lp2">
            Why We&apos;re Your Top Choice for Loads Transport
          </Title>

          <div>
            <List>
              <Title
                level={5}
                style={{ fontSize: 24, fontWeight: 400, gap: 20 }}
              >
                Experienced Professionals
                <sup style={{ color: "#98A393" }}>01</sup>
              </Title>
              <List.Item className="L2-P" style={{ color: " #808380" }}>
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget donec erat ipsum a leo. Maecenas elementum consectetur ac
                blandit tortor.
              </List.Item>
              <Divider variant="solid" style={{ borderColor: "#98A393" }} />
            </List>

            <List>
              <Title
                level={5}
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                }}
              >
                Tailored Solutions
                <sup style={{ color: "#98A393" }}>02</sup>
              </Title>
              <List.Item className="L2-P" style={{ color: " #808380" }}>
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget donec erat ipsum a leo. Maecenas elementum consectetur ac
                blandit tortor.
              </List.Item>
              <Divider variant="solid" style={{ borderColor: "#98A393" }} />
            </List>

            <List>
              <Title level={5} style={{ fontSize: 24, fontWeight: 400 }}>
                Efficiency and Timeliness
                <sup style={{ color: "#98A393" }}>03</sup>
              </Title>
              <List.Item className="L2-P" style={{ color: " #808380" }}>
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget donec erat ipsum a leo. Maecenas elementum consectetur ac
                blandit tortor.
              </List.Item>
              <Divider variant="solid" style={{ borderColor: "#98A393" }} />
            </List>
          </div>
        </div>
      </Col>

      <Col xs={0} sm={2}></Col>
      <Col
        xs={24}
        sm={7}
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Image src={happy} alt="Happy person" className="Lp2-right" />

          <Flex className="Lp2-ratings" vertical justify="center">
            <Rate value={5} id="rating-stars" />
            <Title level={5} id="rating-text">
              4.8/5 Ratings From customers
            </Title>
            <Typography.Text id="rating-desc">
              Lorem morbi et amet suscipit
            </Typography.Text>
          </Flex>
        </div>
      </Col>
      <Col xs={0} sm={2}></Col>
    </Row>
  );
}
