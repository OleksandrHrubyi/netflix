import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllContacts } from '../../redux/Contacts/contactsSelectors'
import MainLayout from 'components/MainLayout/MainLayout'
function Main({ contacts }) {
  return (
    <>
      <MainLayout />
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
