import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Card from "./Card";

function EventList(props) {
  return (
    <section className="event-list__main">
      <Outlet />
      <ul className="event-list__list">
        <Card title="123" description="evento teste" id="1"></Card>
        <Card title="123" description="evento teste" id="1"></Card>
        <Card title="123" description="evento teste" id="1"></Card>
        <Card title="123" description="evento teste" id="1"></Card>
        <Card title="123" description="evento teste" id="1"></Card>
        <Card title="123" description="evento teste" id="1"></Card>
        <Card title="123" description="evento teste" id="1"></Card>
        <Card title="123" description="evento teste" id="1"></Card>
      </ul>
    </section>
  );
}

export default EventList;
