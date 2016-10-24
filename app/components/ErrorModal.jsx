import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Ok
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    var {title, message} = this.props;

    return (
      <div>
      </div>
    );
  }
}

ErrorModal.defaultProps = {
  title: 'Error'
};

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};

export default ErrorModal;
