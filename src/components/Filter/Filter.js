import PropTypes from "prop-types";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";

import styles from "../Filter/filter.module.css";
import { filterContact } from "../../redux/Contacts/contactAction";
import { getFilterState } from "../../redux/Contacts/contactsSelectors";

const Filter = ({ value, onChange }) => {
  return (
    <Form className={styles.form}>
      <Form.Group controlId="formBasicFilter">
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="Enter name"
        />
      </Form.Group>
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: getFilterState(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
