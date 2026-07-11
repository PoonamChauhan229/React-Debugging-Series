import { lazy, Suspense, useState } from "react";
import "./CourseCatalog.css";

// Lazy Import
const ReactCourse = lazy(() => import("./ReactCourse"));

const CourseCatalog = () => {
  const [showCourse, setShowCourse] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #37 - React.lazy Import Mistakes</h3>

        {!showCourse ? (
          <button onClick={() => setShowCourse(true)}>
            Open React Course
          </button>
        ) : (
          <Suspense fallback={<h3>Loading Course...</h3>}>
            <ReactCourse />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;