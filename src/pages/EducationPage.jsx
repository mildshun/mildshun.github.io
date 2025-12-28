export default function EducationPage() {
  return (
    <section id="education" className="section alt reveal">
      <div className="container">
        <h2>
          Education <span className="secEmoji">🎓</span>
        </h2>

        <div className="stack">
          <div className="card eduCard">
            <img
              src="/logos/ntust.png"
              alt="National Taiwan University of Science and Technology"
              className="eduLogo"
            />
            <div>
              <h3>National Taiwan University of Science and Technology</h3>
              <p className="muted">Master's degree in Computer Science and Information Engineering · Taipei, Taiwan</p>
              <p className="muted">Aug 2022 - Jul 2024</p>
              <ul className="muted">
                <li>GPA: 4.15 / 4.3</li>
                <li>Research Experience: Multimedia Vision Computing Lab — focused on computer vision</li>
                <li>
                  Relevant Courses: Machine Learning; Advanced Database Systems; Advanced Modern Networking; Big Data
                  Analytics; Social Network Analysis and Soft Computing; Artificial Intelligence
                </li>
              </ul>
            </div>
          </div>

          <div className="card eduCard">
            <img src="/logos/bangkit.png" alt="Bangkit Academy" className="eduLogo" />
            <div>
              <h3>Bangkit Academy by Google — Machine Learning Path</h3>
              <p className="muted">Indonesia</p>
              <p className="muted">Feb 2021 - Jul 2021</p>
              <ul className="muted">
                <li>
                  Completed courses: Google IT Support; Google IT Automation with Python; Mathematics for Machine Learning;
                  DeepLearning.AI TensorFlow Developer; TensorFlow: Data and Deployment
                </li>
                <li>
                  Collaborated with peers and industry experts on real-world projects — developed teamwork, problem-solving,
                  and communication skills
                </li>
                <li>Successfully completed the program and received a certification of completion</li>
              </ul>
            </div>
          </div>

          <div className="card eduCard">
            <img src="/logos/maranatha.png" alt="Maranatha Christian University" className="eduLogo" />
            <div>
              <h3>Maranatha Christian University</h3>
              <p className="muted">
                Bachelor's degree in Information Systems, Information Technology · Bandung, West Java, Indonesia
              </p>
              <p className="muted">Aug 2018 - Jul 2021</p>
              <ul className="muted">
                <li>GPA: 3.94 / 4.00</li>
                <li>On the dean's list and one of the best graduates of 2021 (Technology Information Department)</li>
                <li>Best Point Portfolio of 2021 (Technology Information Department)</li>
                <li>Internal Academic Achievement Scholarships (2019, 2020, 2021)</li>
                <li>
                  Relevant Courses: Computation Logic; Programming Algorithms; Data Structure; Business Intelligence;
                  Statistics and Data Analytics; Object-Oriented Programming; Enterprise Application Development; System
                  Information Model
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
