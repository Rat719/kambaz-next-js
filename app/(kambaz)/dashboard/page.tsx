import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/4820/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4820
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Computer Aided Reasoning
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/4530/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4530
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Software Engineering
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/3800/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3800
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Theory of Computation
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/2800/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2800
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Logic and Computation
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/4400/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4400
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Programming Languages
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/4410/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4410
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Compilers
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/4100/home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Image src="/images/reactjs.png" width={300} height={160} alt="reactjs" />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4100
                  </CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    Artificial Intelligence
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
}