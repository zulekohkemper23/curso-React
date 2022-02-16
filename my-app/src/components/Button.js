import { Component } from "react";

const styles = {
    Button: {
        backgroundColor:'#0C795D',
        color: 'white',
        padding: '5px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '3px',
    }
}


class Button extends Component {
    render() {
        return (
            <button style={styles.Button} {...this.props}/>
        )
    }
}

export default Button;