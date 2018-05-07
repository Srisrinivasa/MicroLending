import React from 'react';
import { Popover, Tooltip, Button, Modal,
       } from 'react-bootstrap';

const BootStrapModal = (props) => {
      return (
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {props.body}
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
                </Modal>
        );
    };

export default BootStrapModal;
