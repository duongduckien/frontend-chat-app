import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EnterName } from './EnterName';
import * as usersActions from '../../actions/users.action';

const mapStateToProps = (state: any) => {
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            users: bindActionCreators(usersActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EnterName));