import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Container, Wrapper, Form, Footer } from "./styles";
import Button from "../../components/Button";
import { FaSearch, FaThLarge, FaList, FaColumns } from "react-icons/fa";

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
        <Footer>
          <FaThLarge color="#000000" size={15} />
          <FaList color="#b6b6b6" size={15} />
          <FaColumns color="#b6b6b6" size={15} />
        </Footer>
        <Card />
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
