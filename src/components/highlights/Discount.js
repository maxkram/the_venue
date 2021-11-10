import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className='discount_porcentage'>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right={true}>
          <div className='discount_description'>
            <h3>Purchase tickets before it's over</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
              repellendus corporis aliquam rem eligendi dolor est incidunt id.
              Ducimus, exercitationem?
            </p>
            <MyButton
              text='Purchase tickets'
              link='https://google.com'
              iconTicket={true}
              size='small'
              style={{
                background: "#ffa800",
                color: "#ffffff",
              }}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
