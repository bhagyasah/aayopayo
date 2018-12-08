import React, { Component } from 'react';
import Modal from '../../../common/Modal';
import Content from './Content';

class CustomModal extends Component {
  state={ };

  render() {
    return (
      <Modal {...this.props} title="Notifications" modalShow="modalNotificationShow">
        <Content {...this.props} />
      </Modal>
    );
  }
}
export default CustomModal;
