import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Hide' : 'Add'} onAdd={onAdd}/>
        </header>
    )
}

// This is not needed this is just validation
Header.defaultProps = { // this is if we dont take in a param in App.js
    title: 'Task Tracker',
  }

Header.propTypes = {
    title: PropTypes.string.isRequired
}

/*
CSS in JS:
const headingStyle = {
    color: 'red',
    backgroundColor: 'black', // notice that its camel case not '-'
}
*/

export default Header
