import React from "react";

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.284115084745!2d114.41808691466882!3d30.513004281714256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x342ea4a4f8a230e9%3A0xf42f097ec953d0b1!2sHuazhong%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sca!4v1636570341707!5m2!1sen!2sca'
        width='100%'
        height='500'
        frameBorder='0'
        allowfullscreen=''
        title='ggmaps'
      ></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
