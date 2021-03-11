import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Container, Wrapper, Form } from "./styles";
import Button from "../../components/Button";

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
        <Form>
          <Button />
          <Button />
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
