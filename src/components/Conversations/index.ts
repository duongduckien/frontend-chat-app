import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Conversations } from './Conversations';
import * as conversationsActions from '../../actions/conversations.action';

const mapStateToProps = (state: any) => {
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            conversations: bindActionCreators(conversationsActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Conversations));