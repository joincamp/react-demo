import React from "react";
import "./styles.css";
import Calendar from "./Calendar";
import Calendar2 from "./Calendar2";
import moment from "moment";

export default function App() {

  const events =
  {
    "c8ba0bb7-8a26-4646-a563-1e3f5363443e":
    {
      attendees: "Hendy, I the piglin slayer",
      end_date_time: "2020-10-28T8:03",
      name: "Minecraft party",
      notes: "fun with the bois",
      start_date_time: "2020-10-28T8:02",
      createdBy: "isaac234",
    },
    "c8653316-4850-4402-ae74-6ace0f6e634e":
    {
      attendees: "zach, aj, Spencer",
      end_date_time: "2020-07-20T8:04",
      name: "Destiny 2 Fun",
      notes: "Raids are cool",
      start_date_time: "2020-07-20T8:03",
      createdBy: "Dad",
    },
    "1000000-4850-4402-ae74-6ace0f6e634e":
    {
      attendees: "the winners",
      end_date_time: "2021-01-01T8:04",
      name: "Did I finally beat the sorting",
      notes: "Did I actually do it?",
      start_date_time: "2021-01-02T8:03",
      createdBy: "Zach",
    }
  };

  // I'd rather have an array here, so that we can sort it.
  // Additionaly, let's get these into actual date objects, not just strings
  const eventArray = Object.entries(events).map(([id, values]) => ({
    ...values, 
    id,
    start_date_time: moment(values.start_date_time, "YYYY-MM-DDTHH:mm"),
    end_date_time: moment(values.end_date_time, "YYYY-MM-DDTHH:mm"),
  }));

  return <Calendar events={eventArray} />;
}
