import React, { useEffect } from "react";
import { Container, Form, Footer } from "./styles";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Card, Button, Loading } from "./../../components";
import { getService } from "../../services/api.js";
import { filterData } from "../../useCase/filterData";
import { setCourseUnit } from "../Dashboard/dashBoardAction";
import { FaThLarge, FaList, FaColumns } from "react-icons/fa";

function Dashboard(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      let dataFiltered = null;

      const { data = [] } = await getService("airlines");
      dataFiltered = filterData(data);
      dispatch(setCourseUnit(dataFiltered));
    }
    loadData();
  }, []);

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
