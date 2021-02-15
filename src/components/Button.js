import PropTypes from 'prop-types'

const Button = ({color, text, onAdd}) => {
    return (
        <button 
        onClick={onAdd} 
        className='btn' 
        style={{background: color}}
        >{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    test: PropTypes.string,
    color: PropTypes.string,
}

export default Button
