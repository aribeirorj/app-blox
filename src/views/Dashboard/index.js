import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Container, Wrapper, Form, Footer } from "./styles";
import Button from "../../components/Button";
import { FaThLarge, FaList, FaColumns } from "react-icons/fa";
import { connect } from "react-redux";
import { getCourseUnit } from "../../actions/";

function Dashboard(props) {
  // const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    debugger;
    props.getCourseUnit();
    // getCourseUnit();
    // async function loadCourseUnit() {
    //   debugger;
    //   await getCourseUnit();
    // }
  });

  const { courseUnit } = props;

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
          <Button label="ANTERIOR" />
          <Button label="PRÓXIMO" />
        </Form>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = function (state) {
  return {
    courseUnit: state.courseState.courseUnit,
  };
};

const mapDispatchToProps = {
  getCourseUnit: getCourseUnit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
