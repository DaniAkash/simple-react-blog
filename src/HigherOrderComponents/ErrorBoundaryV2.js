import React, {Component} from 'react';
import ErrorScreen from '../pages/ErrorScreen/ErrorScreen';

const ErrorBoundaryV2 = ChildComponent => {

    return class extends Component {

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

                const { props } = this;
                const { hasError } = this.state;

                if(hasError) return <ErrorScreen/>

                return <ChildComponent {...props}/>;
            }
    }
};

export default ErrorBoundaryV2;