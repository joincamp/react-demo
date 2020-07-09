import React from 'react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import EventDetails from '../EventDetails';

export default {
  title: 'EventDetails',
  component: EventDetails,
};

const event = {
    attendees: "the winners",
    end_date_time: moment("2021-01-01T8:04", "YYYY-MM-DDTHH:mm"),
    name: "Did I finally beat the sorting",
    notes: "Did I actually do it?",
    start_date_time: moment("2021-01-02T8:03", "YYYY-MM-DDTHH:mm"),
    createdBy: "Zach",
}
export const BasicEvent = () => <EventDetails event={event}/>;
