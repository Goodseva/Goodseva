"use client";
import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import styles from "./LogisticsForm.module.css"; // Import CSS Module
import LogisticsFormTabs from "../Form/Form";

const { Title, Text } = Typography;

const LogisticsForm: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.bannerImage}></div>
        {/* <img src="banner.png" style={{position:"absolute",width: "2020.24px",
height: "1080.66px",
top: "-233px",
left: "-185px",
gap: "0px",
opacity:1
}}/> */}
        <Row style={{width:'100%'}}>
          <Col lg={2}></Col>
          <Col lg={9}>
            <div className={styles.leftSection}>
              <Title className={styles.title}>
                Digital Transport @ it's BEST
              </Title>
              <Text className={styles.text}>
                Improve your logistics with our quick, seamless, and economical
                dispatch service. Beyond Expectations.
              </Text>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={10}>
            <div className={styles.rightSection}>
              <LogisticsFormTabs />
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </div>
  );
};

export default LogisticsForm;
