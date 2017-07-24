import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import gift from '../../image/gigift-mobile.png'
import Header from '../header'
import Footer from '../footer'
import Slider from 'react-slick'
import FlexyPlanBox from './flexy-plan-box'
import CongrateImage from '../../image/asset-1.png'
import ConfirmModal from './confirm-modal'
import DeadlineBox from './deadline-box'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Container,
  Table,
  Icon,
} from 'semantic-ui-react'
const MediaQuery = require('react-responsive')

class FlexyPlan extends Component {
  constructor() {
    super()
    this.state = {
      openModal: false,
    }
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
  }

  handleOpenModal = () => {
    this.setState({ openModal: true })
  }

  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="flexyPlan">
        <Header />
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="deadline-flexy-plan">
              <img src={CongrateImage} />
              <div className="congrate-text">ยินดีด้วย!</div>
              <div className="congrate-text">
                มีสิทธิประโยชน์มากมายรอคุณอยู่
              </div>
              <div className="deadline-box">
                <p>กรุณาเลือกแผนของคุณภายในวันที่ 12 เม.ย. 60</p>
                <DeadlineBox />
              </div>
            </div>
            <div className="box-space">
              <div className="header-text-select-flexy-plan">
                คุณกำลังเลือก : แผน 1
              </div>
            </div>
            <div className="slider">
              <Slider {...settings}>
                <div>
                  <FlexyPlanBox />
                </div>
                <div>
                  <FlexyPlanBox />
                </div>
              </Slider>
            </div>
            <button
              className="button-submit-flexy-plan"
              onClick={() => this.handleOpenModal()}
            >
              ยืนยัน
            </button>
          </div>
          <Footer />
          <ConfirmModal
            openModal={this.state.openModal}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
      </div>
    )
  }
}

FlexyPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FlexyPlan)