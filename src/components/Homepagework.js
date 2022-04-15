import React from 'react';
import "./Homepagework.css";

const Homepagework = () => {
  return (
    <div>
      <div className="container ">
        <div className="row mb-5 ">
          <div className="col d-none d-lg-block ">
            <img
              src="images/yogurt.png "
              className="img-fluid "
              alt="Yogurt project preview "
            />
          </div>
          <div className="col ">
            <div className="project-desciption ">
              <h2 className="mb-5 ">Evac-Ability design</h2>
              <p className="mb-5 text-muted ">
                Evac-Ability is a web application initially developed during a
                hackathon event, and is currently being prepared for launch to
                assist disabled Ukrainian refugees.
              </p>
              <a href="/work.html " className="btn btn-branding-outline ">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-5 ">
          <div className="col ">
            <div className="project-desciption ">
              <h2 className="mb-5 ">Weather App</h2>
              <p className="mb-5 text-muted ">
                I built a Vanilla JavaScript weather app in SheCodes Plus, an
                advanced 8-week JavaScript coding workshop. Building upon my
                previously-gained knowledge, I also became skilled in Bootstrap,
                API’s, real-life development workflow, hosting, and advanced
                JavaScript. I combined all of these skills to create a
                fully-functioning weather app.
              </p>
              <a href="/work.html " className="btn btn-branding-outline ">
                Learn more
              </a>
            </div>
          </div>
          <div className="col d-none d-lg-block ">
            <img
              src="images/weather.png "
              className="img-fluid "
              alt="Weather project preview "
            />
          </div>
        </div>
        <div className="row ">
          <div className="col d-none d-lg-block ">
            <img
              src="images/dictionary.png "
              className="img-fluid "
              alt="Dictionary app preview "
            />
          </div>
          <div className="col ">
            <div className="project-desciption ">
              <h2 className="mb-5 ">Dictionary App</h2>
              <p className="mb-5 text-muted ">
                I immersed myself in React development in SheCodes React. I used
                my knowledge of this highly-demanded framework to build a
                working dictionary app incorporating coding best practices,
                along with the most popular tools and technologies.
              </p>
              <a href="/work.html " className="btn btn-branding-outline ">
                Learn more
              </a>
            </div>
          </div>
          <div className="row mb-5 ">
            <div className="col ">
              <div className="project-desciption ">
                <h2 className="mb-5 ">Weather App</h2>
                <p className="mb-5 text-muted ">
                  I built a Vanilla JavaScript weather app in SheCodes Plus, an
                  advanced 8-week JavaScript coding workshop. Building upon my
                  previously-gained knowledge, I also became skilled in
                  Bootstrap, API’s, real-life development workflow, hosting, and
                  advanced JavaScript. I combined all of these skills to create
                  a fully-functioning weather app.
                </p>
                <a href="/work.html " className="btn btn-branding-outline ">
                  Learn more
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block ">
              <img
                src="images/weather.png "
                className="img-fluid "
                alt="Weather project preview "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepagework