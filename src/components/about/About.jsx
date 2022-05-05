import "./about.css";
import me from "../../img/me.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I’ve been working on Web development for few months now,  
        </p>
        <p className="a-desc">
         while still studying at college.  I have made some projects mostly coded in Javascript. Now I am looking
         for an internship to acquire some new skills.
         Apart from coding, I enjoy Watching Movies/Shows or a nice evening out with friends.
        </p>
      </div>
    </div>
  );
};

export default About;
