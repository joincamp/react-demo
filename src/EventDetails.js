import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: "2rem"
    }
}));


function EventDetails({ event, onClick }) {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);

    return (
        <div onClick={onClick} className={classes.root}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <h5>{event.name}</h5>
            {isShown && (
                <div>
                    {event.notes}
                </div>
            )}
        </div>
    );
}

export default EventDetails;
