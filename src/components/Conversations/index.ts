import { Conversations } from './Conversations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);