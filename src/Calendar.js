import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EventDetails from './EventDetails';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "2rem"
  }
}));


function Calendar({ events }) {
  const classes = useStyles();
  const [currentEvent, setCurrentEvent] = useState();
  // now we can sort the events by simply comparing the times
  events.sort((a, b) => a.start_date_time - b.start_date_time);
  return (
    <div className={classes.root} onClick={() => setCurrentEvent(null)}>
      <Grid container spacing={3}>
        <Grid item xs={8}>

          {events.map((event, index) => (
            <div key={event.id}>
              {/* Only show heading if it's different from the prior event */}
              {(index === 0 || events[index - 1].start_date_time.year() !== event.start_date_time.year()) && (
                <h2>{event.start_date_time.format('YYYY')}</h2>
              )}
              {(index === 0 || events[index - 1].start_date_time.format("YYYY-MM") !== event.start_date_time.format("YYYY-MM")) && (
                <h3>{event.start_date_time.format('MMMM')}</h3>
              )}
              {(index === 0 || events[index - 1].start_date_time.format("YYYY-MM-DD") !== event.start_date_time.format("YYYY-MM-DD")) && (
                <h4>{event.start_date_time.format('D')}</h4>
              )}
              <EventDetails event={event} onClick={(e) => {
                e.stopPropagation();
                setCurrentEvent(event);
              }}></EventDetails>
            </div>
          ))}
        </Grid>
        <Grid item xs={4}>
          <p>
            {currentEvent && (
              <p>{currentEvent.name}</p>
            )}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Calendar;
