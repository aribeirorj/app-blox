import React, { useEffect } from "react";
import Card from "../../components/Card";
import { Container, Form, Footer } from "./styles";
import Button from "../../components/Button";
import { FaThLarge, FaList, FaColumns } from "react-icons/fa";
import { connect } from "react-redux";
import { setCourseUnit } from "../Dashboard/dashBoardAction";
import { getService } from "../../services/api.js";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";

function Dashboard(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const { data } = await getService("airlines");
      data && dispatch(setCourseUnit(data.slice(0, 6)));
    }
    loadData();
  });

  const { courseUnit = [] } = props;

  return (
    <Container>
      <Footer>
        <FaThLarge color="#000000" size={15} />
        <FaList color="#b6b6b6" size={15} />
        <FaColumns color="#b6b6b6" size={15} />
      </Footer>
      {courseUnit.length > 0 ? <Card data={courseUnit} /> : <Loading />}
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
