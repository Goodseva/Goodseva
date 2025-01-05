"use client";

import Image from "next/image";
import styles from "../../styles/LoadView.module.css";

import { Col, Flex, Row, Space, Typography } from "antd";


export default function LoadsView() {
  const trucks = [
    {
      ID: "ID 8274455",
      "Registration Number": "AP31 B 7456",
      "Shipment Number": "EV-2024001141",
      Status: "In Transit",
    },
    {
      ID: "ID 8274455",
      "Registration Number": "AP31 B 7456",
      "Shipment Number": "EV-2024001141",
      Status: "No Connection",
    },
    {
      ID: "ID 8274455",
      "Registration Number": "AP31 B 7456",
      "Shipment Number": "EV-2024001141",
      Status: "Idle Timeout",
    },
    {
      ID: "ID 8274455",
      "Registration Number": "AP31 B 7456",
      "Shipment Number": "EV-2024001141",
      Status: "In Transit",
    },
  ];
  
  
  return (
    <>
      <Row>
        <Col lg={6} md={24} sm={24}>
          <Flex vertical gap={8}>
            <Typography.Text className={styles.LoadDetails}>
              Load Details
            </Typography.Text>
            <Flex gap={8}>
              <Space>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15.5" r="15" fill="#E3E3E3" />
                  <circle cx="15" cy="15.5" r="5" fill="black" />
                </svg>
              </Space>
              <Flex vertical>
                <Typography.Text className={styles.FromLocation}>
                  530008
                </Typography.Text>
                <Typography.Text>Visakhapatnam</Typography.Text>
              </Flex>
            </Flex>
            <Flex gap={8}>
              <Space>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.673828"
                    y="0.25"
                    width="30"
                    height="30"
                    fill="#E3E3E3"
                  />

                  <rect
                    x="10.673828"
                    y="10.25"
                    width="10"
                    height="10"
                    fill="black"
                  />
                </svg>
              </Space>
              <Flex vertical>
                <Typography.Text className={styles.FromLocation}>
                  500018
                </Typography.Text>
                <Typography.Text>Hyderabad</Typography.Text>
              </Flex>
            </Flex>
            <Flex style={{ width: "100%" }}>
              <Flex style={{ width: "100%" }} vertical gap={8}>
                <Flex
                  justify="space-between"
                  style={{ width: "100%" }}
                  gap={50}
                >
                  <Flex>
                    <Typography.Text id={styles.TrucksText}>
                      Trucks
                    </Typography.Text>
                  </Flex>
                  <Flex gap={5} align="center">
                    <Typography.Text id={styles.NoofTruckstext}>
                      No of Trucks
                    </Typography.Text>
                    <Typography.Text id={styles.TrucksText}>04</Typography.Text>
                  </Flex>
                </Flex>
                <Flex style={{ width: "100%" }} vertical gap={8}>
                  {trucks.map((e, index) => {
                    return (
                      <>
                        <Flex
                          className={styles.TruckDetails}
                          vertical
                          key={index}
                        >
                          <Flex
                            justify="space-between"
                            style={{ width: "100%", padding: 8 }}
                          >
                            <Typography.Text id={styles.TruckId}>
                              {e.ID}
                            </Typography.Text>
                            <Typography.Text
                              id={styles.TruckStatus}
                              style={
                                e.Status === "In Transit"
                                  ? { backgroundColor: "#60D72A" }
                                  : e.Status === "No Connection"
                                  ? { backgroundColor: "#FCC102" }
                                  : e.Status === "Idle Timeout"
                                  ? { backgroundColor: "black" }
                                  : { backgroundColor: "none" }
                              }
                            >
                              {e.Status}
                            </Typography.Text>
                          </Flex>
                          <Flex style={{ width: "100%", padding: 8 }}>
                            <Flex vertical style={{ width: "100%" }}>
                              <Typography.Text className={styles.FromLocation}>
                                Registration Number
                              </Typography.Text>
                              <Typography.Text>
                                {e["Registration Number"]}
                              </Typography.Text>
                            </Flex>
                            <Flex vertical style={{ width: "100%" }}>
                              <Typography.Text className={styles.FromLocation}>
                                Shipment number
                              </Typography.Text>
                              <Typography.Text>
                                {e["Shipment Number"]}
                              </Typography.Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </>
                    );
                  })}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Col>

        <Col lg={18}>
         
        </Col>
      </Row>
    </>
  );
}
