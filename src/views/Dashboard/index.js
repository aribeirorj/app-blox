import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Container, Wrapper } from "./styles";

function Dashboard() {
  const [notifications, setNotifications] = useState([]);

  // useEffect(() => {
  //   async function loadNotifications() {
  //     const response = await api.get('notifications');

  //     // const data = response.data.map(notification => ({
  //     //   ...notification,
  //     //   timeDistance: formatDistance(
  //     //     parseISO(notification.createdAt),
  //     //     new Date(),
  //     //     { addSuffix: true, locale: pt }
  //     //   ),
  //     // }));

  //     // setNotifications(data);
  //   }

  return (
    <Container>
      <Wrapper>
        <Card />
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
