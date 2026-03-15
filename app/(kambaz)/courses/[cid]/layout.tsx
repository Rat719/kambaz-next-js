"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "../../store";
import { useState, useEffect } from "react";

export default function CourseLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer,
  );
  const course = courses.find((course: any) => course._id === cid);
  const [showNav, setShowNav] = useState(true);

  const isEnrolled = enrollments.some(
    (e: any) => e.user === (currentUser as any)?._id && e.course === cid,
  );

  useEffect(() => {
    if (currentUser && !isEnrolled) {
      router.push("/dashboard");
    }
  }, [isEnrolled, currentUser, router]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setShowNav(!showNav)}
          style={{ cursor: "pointer" }}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {showNav && (
          <div style={{ minWidth: "200px", maxWidth: "200px" }}>
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill" style={{ minWidth: 0 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
