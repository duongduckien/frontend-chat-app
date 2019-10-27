import * as React from 'react';
import './styles.scss';

interface IProps {
    placeholder: string;
    onChange: (event: any) => void;
}

export class InputText extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="input-text">
                <input
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.onChange(e)}
                />
            </div>
        );
    }

}
