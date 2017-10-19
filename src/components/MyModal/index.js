import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import CommentForm from 'components/Form/comment';

class MyModal extends Component {
  render() {
    const {
      modalOpen,
      handleClose,
      modalHeader,
      onSubmit,
      onCancel,
      mainButton,
      mainIcon,
      payload = {}
    } = this.props;
    return (
      <Modal
        scrolling
        open={modalOpen}
        onClose={handleClose}
        //TODO need to handle de onclose so that when a post is submitted you close this
        closeOnEscape={false}
        closeOnRootNodeClick={false}
      >
        <Modal.Header>{modalHeader}</Modal.Header>
        <Modal.Content>
          <CommentForm
            mainButton={mainButton}
            mainIcon={mainIcon}
            onSubmit={onSubmit}
            onCancel={onCancel}
            payload={payload ? payload : {}}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

export default MyModal;
