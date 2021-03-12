import React, { useEffect } from "react";
import Card from "../../components/Card";
import { Container, Wrapper, Form, Footer } from "./styles";
import Button from "../../components/Button";
import { FaThLarge, FaList, FaColumns } from "react-icons/fa";
import { connect } from "react-redux";
import { setCourseUnit } from "../../actions/";
import api from "../../services/api";
import { useDispatch } from "react-redux";

function Dashboard(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = api
      .get("airlines")
      .then((resp) => {
        return resp.data;
      })
      .then((data) => dispatch(setCourseUnit(data.slice(0, 6))));
  });

  const { courseUnit = [] } = props;

  return (
    <Container>
      <Footer>
        <FaThLarge color="#000000" size={15} />
        <FaList color="#b6b6b6" size={15} />
        <FaColumns color="#b6b6b6" size={15} />
      </Footer>
      <Card data={courseUnit} />
      <Form>
        <Button label="ANTERIOR" />
        <Button label="PRÓXIMO" />
      </Form>
    </Container>
  );
}

const mapStateToProps = function (state) {
  return {
    courseUnit: state.courseState.courseUnit,
  };
};

const mapDispatchToProps = {
  setCourseUnit: setCourseUnit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
