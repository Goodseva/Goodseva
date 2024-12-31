"use client";
import { Button, Col, Flex, Form, Input, Row, Space, Typography } from "antd";

import "../../styles/Postload.css";

import Lorryimg1 from "../../../../public/Lp3.png";
import Lorryimg2 from "../../../../public/Lp1.png";
import Lorryimg3 from "../../../../public/Lp31.png";
import Image from "next/image";

export default function PostLoad() {
  return (
    <Flex vertical gap={15}>
      <Flex vertical gap={10}>
        <Typography.Text id="main-head">Post a Load</Typography.Text>
        <Typography.Text id="upload-text">
          Upload invoice to autofill load details
        </Typography.Text>
      </Flex>
      <Row>
        <Col lg={24}>
          <Flex id="upload-block" gap={20}>
            <div id="file-upload-btn">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V30C6 30.7956 6.31607 31.5587 6.87868 32.1213C7.44129 32.6839 8.20435 33 9 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V12M21 3L30 12M21 3V12H30M24 19.5H12M24 25.5H12M15 13.5H12"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Flex vertical style={{ marginTop: 8 }}>
              <Typography.Text id="drag-text1">
                Drag and drop an word/PDF file of invoice or Upload
              </Typography.Text>
              <Typography.Text id="drag-text2">
                Max file size: 10 MB. Supported formats: jpg/PDF/png/jpeg/img.
                Please ensure that all details on the image are clearly visible.
              </Typography.Text>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Flex justify="space-between" style={{ marginTop: 20 }}>
            <Typography.Text>Load</Typography.Text>
            <Typography.Text>details</Typography.Text>
          </Flex>
        </Col>
        <Col lg={20}></Col>
      </Row>
      <Row>
        <Col lg={5}>
          <Space style={{ margin: 10 }}>
            <Flex gap={8}>
              <Flex vertical gap={30}>
                <Flex vertical gap={5}>
                  <Typography.Text>To</Typography.Text>
                  <Input
                    prefix={
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="15" cy="15" r="15" fill="#E8F9EE" />
                        <circle cx="15" cy="15" r="5" fill="#0EBC93" />
                      </svg>
                    }
                    placeholder="Vishakapatnam"
                  />
                </Flex>
                <Form>
                  <Form.Item hasFeedback validateStatus="success">
                    <Input value="Full Truck load" style={{ padding: 8 }} />
                  </Form.Item>
                </Form>
              </Flex>
            </Flex>
          </Space>
        </Col>

        <Col lg={5}>
          <Flex vertical gap={30} style={{ margin: 10 }}>
            <Flex vertical gap={5}>
              <Typography.Text>From</Typography.Text>
              <Input
                prefix={
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0"
                      width="30"
                      height="30"
                      fill="#DCE0F9"
                      fill-opacity="0.5"
                    />

                    <rect
                      x="10.5"
                      y="10"
                      width="10"
                      height="10"
                      fill="#8205AF"
                    />
                  </svg>
                }
                placeholder="Hyderabad"
              />
            </Flex>
            <Form>
              <Form.Item hasFeedback>
                <Input value="Part Truck Load" style={{ padding: 8 }} />
              </Form.Item>
            </Form>
          </Flex>
        </Col>
        <Col lg={1}></Col>
        <Col lg={13}>
          <Flex vertical gap={5}>
            <Typography.Text id="selecting-trucks-text">
              Suggestions
            </Typography.Text>
            <Flex gap={20} wrap>
              <Flex vertical gap={10}>
                <Flex vertical id="selecting-trucks1">
                  <Image src={Lorryimg1} alt="lorry" width={50} />

                  <Flex justify="center" id="open-truck-div">
                    <Typography.Text id="open-truck-text">
                      Open Truck
                    </Typography.Text>
                  </Flex>
                  <Flex justify="space-evenly">
                    <Typography.Text id="truck-properities">
                      20Ton
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      SXL
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      20*8*8
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex vertical gap={10}>
                <Flex vertical id="selecting-trucks1">
                  <Image src={Lorryimg1} alt="lorry" width={50} />

                  <Flex justify="center" id="open-truck-div">
                    <Typography.Text id="open-truck-text">
                      Box Truck
                    </Typography.Text>
                  </Flex>
                  <Flex justify="space-evenly">
                    <Typography.Text id="truck-properities">
                      20Ton
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      SXL
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      20*8*8
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex vertical gap={10}>
                <Flex vertical id="selecting-trucks1">
                  <Image src={Lorryimg1} alt="lorry" width={50} />

                  <Flex justify="center" id="open-truck-div">
                    <Typography.Text id="open-truck-text">
                      Refrigerator Truck
                    </Typography.Text>
                  </Flex>
                  <Flex justify="space-evenly">
                    <Typography.Text id="truck-properities">
                      20Ton
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      SXL
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      20*8*8
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Col>
      </Row>
      
    </Flex>
  );
}
