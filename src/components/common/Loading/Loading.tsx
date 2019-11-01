import React from 'react';
import ReactLoading from 'react-loading';

export class Loading extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ReactLoading type='balls' color='#ffffff' height={667} width={375} />
        );
    }

}