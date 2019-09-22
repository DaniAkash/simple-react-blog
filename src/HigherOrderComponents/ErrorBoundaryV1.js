import React, {Component} from 'react';
import ErrorScreen from '../pages/ErrorScreen/ErrorScreen';

class ErrorBoundaryV1 extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error) {
        if(error) {
            this.setState({
                hasError: true
            });
        }
    }

    render() {
        
        const { hasError } = this.state;

        if(hasError) return <ErrorScreen/>

        const { children } = this.props;

        return children;
    }
}

export default ErrorBoundaryV1;