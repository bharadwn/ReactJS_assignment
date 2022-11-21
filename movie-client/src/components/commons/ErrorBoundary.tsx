import React, { Component, ReactNode } from 'react';

import './hide-overlay.css';

type Props = {
    children: ReactNode
};

type State = {
    error: Error | null
};

class ErrorBoundary extends Component<Props, State> {
    state : State = {
        error: null
    };

    componentDidCatch( error : Error ) {
        this.setState({
            error
        });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;

        return error ? <div>{error?.message}</div> : children;
    }
}

export default ErrorBoundary;