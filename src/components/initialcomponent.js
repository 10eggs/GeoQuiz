import React, { useState } from "react";

const MyComponent = () => {
  const [readMore, setReadMore] = useState(false);

  useState(() => {
    console.log("Initial component rendered");
  });

  return (
    <>
      <div className="quiz-categories">
        <h1> Welcome to the quiz!</h1>
        <div className="block">
          <h5>Poland</h5>
          <p style={{ paddingBottom: 50 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            eligendi nisi minima delectus omnis, obcaecati quisquam totam
            deleniti natus nihil corrupti fugit incidunt? Harum voluptas, eius
            quis optio officia deleniti?
          </p>
          <button className="button">Start quiz</button>
        </div>
        <div className="block">
          <h5>Europe</h5>
          <p style={{ paddingBottom: 50 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            voluptatem itaque! Amet laboriosam ab consectetur eius, aperiam nam
            iusto. Aliquid quisquam a ducimus. Pariatur quibusdam soluta ipsa
            obcaecati distinctio est!
          </p>
          <button className="button">Start quiz</button>
        </div>
        <div className="block">
          <h5>World</h5>
          <p style={{ paddingBottom: 50 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint illo
            harum, consectetur, ipsa dolores blanditiis consequuntur debitis
            beatae reiciendis tenetur labore expedita odit velit alias dolorem
            odio magni mollitia! Dolore?{" "}
          </p>
          <button className="button">Start quiz</button>
        </div>
      </div>
      <div className="clr">Outside</div>
      <button className="fixed-button">Fixed btn</button>
    </>
  );
};

export default MyComponent;
