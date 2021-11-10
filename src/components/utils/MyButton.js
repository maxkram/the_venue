import React from "react";
import Button from "@material-ui/core/Button";

import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant='contained'
      size={"large"}
      style={{
        background: "#ffa800",
        color: "#ffffff",
      }}
    >
      {props.iconTicket ? (
        <img src={TicketIcon} className='iconImage' alt='icon_button' />
      ) : null}
      {props.text}
    </Button>
  );
};

export default MyButton;
