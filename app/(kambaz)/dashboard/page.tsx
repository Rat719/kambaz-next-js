/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import {
  Card, CardBody, CardTitle, CardText,
  Button, Row, Col, FormControl,
} from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { enroll, unenroll } from "../enrollments/reducer";
import { RootState } from "../store";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isFaculty = (currentUser as any)?.role === "FACULTY";

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (e: any) => e.user === (currentUser as any)?._id && e.course === courseId
    );

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((c) => isEnrolled(c._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <Button variant="primary" className="float-end"
          id="wd-enrollments-btn"
          onClick={() => setShowAllCourses(!showAllCourses)}>
          Enrollments
        </Button>
      </h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => dispatch(updateCourse(course))}>
              Update
            </button>
          </h5>
          <br />
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} as="textarea" rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c: any) => (
            <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  href={isEnrolled(c._id) ? `/courses/${c._id}/home` : "/dashboard"}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    if (!isEnrolled(c._id)) e.preventDefault();
                  }}>
                  <img src="/images/reactjs.jpg" width={300} height={160} alt={c.name} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}>
                      {c.description}
                    </CardText>

                    <Button variant="primary" className="me-2">Go</Button>

                    {isEnrolled(c._id) ? (
                      <Button variant="danger"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(unenroll({ userId: (currentUser as any)._id, courseId: c._id }));
                        }}>
                        Unenroll
                      </Button>
                    ) : (
                      <Button variant="success"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(enroll({ userId: (currentUser as any)._id, courseId: c._id }));
                        }}>
                        Enroll
                      </Button>
                    )}

                    {isFaculty && (
                      <>
                        <button id="wd-edit-course-click"
                          onClick={(e) => { e.preventDefault(); setCourse(c); }}
                          className="btn btn-warning me-2 float-end">
                          Edit
                        </button>
                        <button
                          onClick={(e) => { e.preventDefault(); dispatch(deleteCourse(c._id)); }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
