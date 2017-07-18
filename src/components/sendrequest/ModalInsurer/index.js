import React, { Component } from 'react'
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Input,
  Icon,
} from 'semantic-ui-react'
import {
  ModalHeader,
  ModalContent,
  ButtonNew,
  CancleButton,
  ConfirmButton,
  Edit,
} from './styled'
import PropTypes from 'prop-types'
import styled from 'react-sc'
import { connect } from 'react-redux'
import ChooseInsurer from '../../ChooseInsurer'

const ModalContents = styled(Modal.Content)`
  &&&{

    margin: 0 auto;
    padding-left: 4%;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin-top: -120px;
  }
`

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`

class ModalInsurer extends Component {
  constructor() {
    super()
    this.state = { modalOpen: false }
  }

  handleClose = e =>
    this.setState({
      modalOpen: false,
    })

  handleOpen = e =>
    this.setState({
      modalOpen: true,
    })
  render() {
    return (
      <Modals
        trigger={
          <Edit onClick={this.handleOpen}>
            <Icon name="write" />แก้ไข
          </Edit>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >

        <ModalContents>

          <ChooseInsurer />

        </ModalContents>

      </Modals>
    )
  }
}

ModalInsurer.propTypes = {
  handlePost: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(ModalInsurer)
