import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4820" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS4820 </h5>
              <p className="wd-dashboard-course-title">
                Computer Aided Reasoning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4530" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS4530 </h5>
              <p className="wd-dashboard-course-title">Software Engineering</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3800" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS3800 </h5>
              <p className="wd-dashboard-course-title">Theory of Computation</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2800" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS2800 </h5>
              <p className="wd-dashboard-course-title">Logic and Computation</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4400" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS4400 </h5>
              <p className="wd-dashboard-course-title">Programming Languages</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4410" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS4410 </h5>
              <p className="wd-dashboard-course-title">Compilers</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4100" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS4100 </h5>
              <p className="wd-dashboard-course-title">
                Artificial Intelligence
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
