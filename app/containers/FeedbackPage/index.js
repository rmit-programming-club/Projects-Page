/**
 *
 * FeedbackPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import A from 'components/A';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FeedbackPage extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <A href="https://docs.google.com/forms/d/e/1FAIpQLScJBAW4KRGGaNEju7b02i6OYJLuP1gQ8x5xzlUKdKJk_Zg_lg/viewform">
          Feedback
        </A>
      </div>
    );
  }
}

FeedbackPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FeedbackPage);
