import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import styles from "../ContactList/contactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { deleteContactOperation } from "../../redux/Contacts/contactsOperations";
import { getVisibleContacts } from "../../redux/Contacts/contactsSelectors";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

function Card({ arr, onDel }) {
  return (
    <div className={styles.container}>
      <TransitionGroup component="ul">
        {arr.map(({ id, name, number }) => {
          return (
            <CSSTransition key={id} timeout={3000} classNames={styles}>
              <li className={styles.item}>
                <div className={styles.callContainer}>
                  <div>
                    <a
                      href="tel:{number}"
                      className={styles.callIcon}
                      title="Сall up"
                    >
                      <IconContext.Provider
                        value={{
                          size: "1.5em",
                          color: "rgb(104, 177, 132)",
                          className: styles.iconPhone,
                        }}
                      >
                        <FiPhoneCall />
                      </IconContext.Provider>
                    </a>
                  </div>
                  <div>
                    <h3 className={styles.name}>{name} </h3>
                    <p className={styles.phoneTitle}>{number}</p>
                  </div>
                </div>
                <div className={styles.iconDelBox}>
                  <IconContext.Provider value={{ size: "1.3em" }}>
                    <button
                      title="Delete contact"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        onDel(id);
                      }}
                      type="button"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </IconContext.Provider>
                </div>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

Card.propTypes = {
  arr: PropTypes.array.isRequired,
  onDel: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  arr: getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDel: (id) => dispatch(deleteContactOperation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
