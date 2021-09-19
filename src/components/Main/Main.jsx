import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import PhonebookForm from '../PhonebookForm/PhonebookForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'
import filterStyles from './main.module.css'
import { getAllContacts } from '../../redux/Contacts/contactsSelectors'
import styles from './main.module.css'

function Main({ contacts }) {
  return (
    <>
      <PhonebookForm />
      <CSSTransition
        in={contacts.length > 0}
        classNames={filterStyles}
        timeout={250}
        unmountOnExit
      >
        <div className="mainBg">
          {' '}
          <p className={styles.contactTitle}>Contacts</p>
          <Filter />
        </div>
      </CSSTransition>
      <ContactList />
    </>
  )
}

Main.propTypes = {
  contacts: PropTypes.array,
}

const mapStateToProps = (state) => ({
  contacts: getAllContacts(state),
})

export default connect(mapStateToProps, null)(Main)
