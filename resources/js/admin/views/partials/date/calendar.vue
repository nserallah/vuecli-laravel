<template>
  <div class="demo-app">
    <FullCalendar
      class="demo-app-calendar"
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      @dateClick="handleDateClick"
    />
  </div>
</template>

<script>
import swal from 'sweetalert'
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", start: new Date() }
      ]
    };
  },
  methods: {
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends; // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
      calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
    },
    handleDateClick(arg) {

        swal({text: "Would you like to add an event to " + arg.dateStr + " ?"})
        .then(() => {
          this.calendarEvents.push({
          // add new event data
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        });
       
      })

    //   if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
    //     this.calendarEvents.push({
    //       // add new event data
    //       title: "New Event",
    //       start: arg.date,
    //       allDay: arg.allDay
    //     });
    //   }
    }
  }
};
</script>

<style>
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-top {
  margin: 0 0 3em;
}

.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
}

.fc-unthemed .fc-toolbar .fc-button{
    background: #2c3e50;
       
}
.fc-unthemed .fc-toolbar .fc-button:hover{
    background: #6167E0;
    color: #fff;
}
.btn.m-btn--custom {
    padding: 5px 20px
}
</style>
