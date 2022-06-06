import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="landing-container">
        <div className="main-img-container">
          <img
            src="/assets/heading-img.png"
            className="landing-img"
            alt="error"
          />
          <div className="text-container-outerbox">
            <div className="text-container">
              <div className="heading-text-question">Why do we use it ?</div>
              <div className="line"></div>
              <p className="heading-text-answer">
                The Pomodoro technique is a popular way to track and improve
                your productivity. Using this method, you break your workday
                into 25 minute chunks separated by five minute breaks.
              </p>
              <button
                onClick={() => navigate("/tasks")}
                className="btn-get-started"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="middle-contianer">
          <div className="how-to-use-heading">How to use it?</div>
          <p className="how-to-usr-answer">
            The Pomodoro Technique is a time management method that can be used
            for any task.
          </p>
          <div className="task-img-container">
            <div className="task-container">
              <img src="/assets/task1.svg" className="task-imgs" alt="error" />
              <div className="custom-task-heading">Add your tasks</div>
              <p className="custom-task-para">
                Add you task to keep track of it and manage according to your
                need
              </p>
            </div>
            <div className="task-container">
              <img src="/assets/task2.svg" className="task-imgs" alt="error" />
              <div className="custom-task-heading">
                Work on tasks with timer
              </div>
              <p className="custom-task-para">
                Work on your tasks with the Pomodoro Feature
              </p>
            </div>
            <div className="task-container">
              <img src="/assets/task3.svg" className="task-imgs" alt="error" />
              <div className="custom-task-heading">
                Get your work done faster
              </div>
              <p className="custom-task-para">
                use Pomodro Timer with task to focus on one thing at a time and
                get the work done
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { LandingPage };
