import React, { useEffect, useCallback } from "react";
import { Container, Form, Footer } from "./styles";
import { FaThLarge, FaList, FaColumns } from "react-icons/fa";
import { connect } from "react-redux";
import { setCourseUnit } from "../Dashboard/dashBoardAction";
import { getService } from "../../services/api.js";
import { filterData } from "../../useCase/filterData";
import { useDispatch } from "react-redux";
import { Card, Button, Loading } from "./../../components";

function Dashboard(props) {
  const dispatch = useDispatch();

  const dispatchData = useCallback(
    (param) => {
      dispatch(setCourseUnit(param));
    },
    [dispatch]
  );

  const filteredData = useCallback(
    (param) => {
      let response = filterData(param);
      dispatchData(response);
    },
    [dispatchData]
  );

  const loadData = useCallback(
    async (param) => {
      const { data } = await getService(param);
      filteredData(data);
    },
    [filteredData]
  );

  useEffect(() => {
    loadData("airlines");
  }, [loadData]);

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
