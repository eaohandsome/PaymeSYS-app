import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import bedRecord from '../image/icons-8-single-bed-record.png'
import bedActive from '../image/icons-8-single-bed.jpg'
import bed from '../image/icons-8-single-bed1.jpg'
import stethoscopeRecord from '../image/icons-8-stethoscope-record.png'
import stethoscope from '../image/icons-8-stethoscope1.jpg'
import stethoscopeActive from '../image/icons-8-stethoscope.jpg'
import toothRecord from '../image/icons-8-tooth-record.png'
import toothActive from '../image/icons-8-tooth.jpg'
import tooth from '../image/icons-8-toot1.jpg'
import heartRecord from '../image/icons-8-like-record.png'
import heart from '../image/icons-8-like1.jpg'
import heartActive from '../image/icons-8-like.jpg'
import erase from '../image/icons-8-erase.png'
import IPD from './IPD/ipd'
import Life from './Life/life'
import OPD from './OPD/opd'
import Dental from './Dental/dental'

class AllsetPlan extends Component {
  static propTypes = {
    activePlan: PropTypes.number.isRequired,
    nextPage: PropTypes.bool.isRequired,
    handleNextPage: PropTypes.func.isRequired,
    handleSetGoToNextPage: PropTypes.func.isRequired,
    handleWarningModal: PropTypes.func.isRequired,
    handleMoveToNextPage: PropTypes.func.isRequired,
    newPlan: PropTypes.func.isRequired,
    handleBuildNewPlan: PropTypes.func.isRequired,
    handleUnBuildNewPlan: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    handleToggleIpdCoPlay: PropTypes.func.isRequired,
    handleToggleOpdCoPlay: PropTypes.func.isRequired,
    handleResetPlan: PropTypes.func.isRequired,
    handleResetDental: PropTypes.func.isRequired,
    handleResetLife: PropTypes.func.isRequired,
    handleResetOPD: PropTypes.func.isRequired,
    handleResetIPD: PropTypes.func.isRequired,
    opdCoPlay: PropTypes.bool.isRequired,
    opdPerYear: PropTypes.string.isRequired,
    opdPerTime: PropTypes.string.isRequired,
    opdTimeNotExceedPerYear: PropTypes.string.isRequired,
    opdCoPlayQuota: PropTypes.string.isRequired,
    opdCoPlayDeductable: PropTypes.string.isRequired,
    opdCoPlayMixPercentage: PropTypes.string.isRequired,
    opdCoPlayMixNotExceed: PropTypes.string.isRequired,
    opdCoPlayMixYear: PropTypes.string.isRequired,
    dentalPerYear: PropTypes.string.isRequired,
    lifePerYear: PropTypes.string.isRequired,
    lifeTimeOfSalary: PropTypes.string.isRequired,
    lifeNotExceed: PropTypes.string.isRequired,
    ipdType: PropTypes.string.isRequired,
    ipdLumsumPerYear: PropTypes.string.isRequired,
    ipdLumsumPerTime: PropTypes.string.isRequired,
    ipdLumsumTimeNotExceedPerYear: PropTypes.string.isRequired,
    rbLumsumRoomPerNight: PropTypes.string.isRequired,
    rbLumsumNigthNotExceedPerYear: PropTypes.string.isRequired,
    rbLumsumPayNotExceedPerNight: PropTypes.string.isRequired,
    rbLumsumPayNotExceedPerYear: PropTypes.string.isRequired,
    rbSchedulePatient: PropTypes.string.isRequired,
    rbScheduleIntensiveCarePatient: PropTypes.string.isRequired,
    rbScheduleDoctor: PropTypes.string.isRequired,
    rbScheduleSurgerySchedule: PropTypes.string.isRequired,
    rbScheduleSurgeryNonSchedule: PropTypes.string.isRequired,
    rbScheduleService: PropTypes.string.isRequired,
    rbScheduleSmallSurgery: PropTypes.string.isRequired,
    rbScheduleAdviser: PropTypes.string.isRequired,
    rbScheduleAmbulance: PropTypes.string.isRequired,
    rbScheduleAccident: PropTypes.string.isRequired,
    rbScheduleTreatment: PropTypes.string.isRequired,
    rbScheduleTransplant: PropTypes.string.isRequired,
    ipdCoPlay: PropTypes.string.isRequired,
    ipdCoPlayQuota: PropTypes.string.isRequired,
    ipdCoPlayDeductable: PropTypes.string.isRequired,
    ipdCoPlayMixPercentage: PropTypes.string.isRequired,
    ipdCoPlayMixNotExceed: PropTypes.string.isRequired,
    ipdCoPlayMixYear: PropTypes.string.isRequired,
  }

  constructor() {
    super()
    this.state = {
      value: '',
      setPlan: 'IPD',
      verifyState: true,
      openModal: false,
      reset: false,
      nextPlan: '',
      ipdRecord: false,
      opdRecord: false,
      dentalRecord: false,
      lifeRecord: false,
      checkInput: false,
      textOpd: 'text-menu',
      textOpdActive: 'text-menu-active',
      textIpd: 'text-menu',
      textIpdActive: 'text-menu-active',
      textDental: 'text-menu',
      textDentalActive: 'text-menu-active',
      textLife: 'text-menu',
      textLifeActive: 'text-menu-active',
      isChange: false,
      changeToRecord: false,
    }
  }

  componentWillReceiveProps(newProps) {
    this.handleUpdate(newProps)
  }

  componentDidUpdate() {
    this.handleDidUpdate()
  }

  handleDidUpdate = () => {
    if (this.state.isChange) {
      if (this.state.changeToRecord) {
        if (this.state.ipdRecord && this.state.checkInput) {
          this.setState({ textIpd: 'text-menu-record' })
          this.setState({ textIpdActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        } else if (this.state.opdRecord && this.state.checkInput) {
          this.setState({ textOpd: 'text-menu-record' })
          this.setState({ textOpdActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        } else if (this.state.dentalRecord && this.state.checkInput) {
          this.setState({ textDental: 'text-menu-record' })
          this.setState({ textDentalActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        } else {
          this.setState({ textLife: 'text-menu-record' })
          this.setState({ textLifeActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        }
      }
    }

    if (this.props.nextPage && this.state.verifyState === false) {
      this.handleOpenModalNextPage()
      this.props.handleNextPage()
    }

    if (this.props.newPlan && this.state.verifyState === false) {
      this.handleOpenModal()
      this.props.handleResetPlan()
    }
  }

  handleUpdate = newProps => {
    if (newProps.activePlan !== this.props.activePlan) {
      this.setState({
        setPlan: 'IPD',
        ipdRecord: false,
        opdRecord: false,
        dentalRecord: false,
        lifeRecord: false,
        checkInput: false,
        textOpd: 'text-menu',
        textOpdActive: 'text-menu-active',
        textIpd: 'text-menu',
        textIpdActive: 'text-menu-active',
        textDental: 'text-menu',
        textDentalActive: 'text-menu-active',
        textLife: 'text-menu',
        textLifeActive: 'text-menu-active',
      })
    }
  }

  handleOpenModal = () => {
    this.setState({ openModal: true })
  }

  handleOpenModalNextPage = () => {
    this.setState({ openModal: true })
    this.props.handleWarningModal()
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
  }

  handleVerifyState = name => {
    this.setState({ verifyState: false })
    this.setState({ checkInput: true })
    this.setState({ changeToRecord: false })
    this.setState({ isChange: true })
    this.setState({ [name]: false })
    this.props.handleSetGoToNextPage()
    this.handleText(name)
    this.props.handleUnBuildNewPlan()
  }

  handleRecordVerifyState = name => {
    this.setState({ verifyState: true })
    this.setState({ isChange: true })
    this.setState({ changeToRecord: true })
    this.setState({ [name]: true })
    this.props.handleMoveToNextPage()
    this.props.handleBuildNewPlan()
  }

  handleText = value => {
    if (value === 'ipdRecord') {
      this.setState({ textIpd: 'text-menu' })
      this.setState({ textIpdActive: 'text-menu-active' })
    } else if (value === 'opdRecord') {
      this.setState({ textOpd: 'text-menu' })
      this.setState({ textOpdActive: 'text-menu-active' })
    } else if (value === 'dentalRecord') {
      this.setState({ textDental: 'text-menu' })
      this.setState({ textDentalActive: 'text-menu-active' })
    } else {
      this.setState({ textLife: 'text-menu' })
      this.setState({ textLifeActive: 'text-menu-active' })
    }
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
  }

  handleClick = value => {
    if (this.state.verifyState === false) {
      this.handleOpenModal()
      this.setState({ nextPlan: value })
    } else {
      this.setState({ setPlan: value })
      this.setState({ nextPlan: value })
    }
  }

  handleImageActive = value => {
    if (value === 'IPD') {
      if (this.state.ipdRecord) return bedRecord
      return bedActive
    }
    if (value === 'OPD') {
      if (this.state.opdRecord) return stethoscopeRecord
      return stethoscopeActive
    }
    if (value === 'Dental') {
      if (this.state.dentalRecord) return toothRecord
      return toothActive
    }
    if (this.lifeRecord) {
      return heartRecord
    }
    return heartActive
  }

  handleImage = value => {
    if (value === 'IPD') {
      if (this.state.ipdRecord) return bedRecord
      return bed
    }
    if (value === 'OPD') {
      if (this.state.opdRecord) return stethoscopeRecord
      return stethoscope
    }
    if (value === 'Dental') {
      if (this.state.dentalRecord) return toothRecord
      return tooth
    }
    if (this.lifeRecord) {
      return heartRecord
    }
    return heart
  }

  handleNextPlan = () => {
    this.setState({ setPlan: this.state.nextPlan })
  }

  handleReset = () => {
    this.setState({ reset: true })
    this.setState({ verifyState: true })
    this.setState({ checkInput: false })
    this.props.handleMoveToNextPage()
    this.props.handleBuildNewPlan()
  }

  handleNewReset = () => {
    this.setState({ reset: false })
  }

  render() {
    return (
      <div>
        <div className="fillBox">
          <div className="headBox">
            <span className="headLogo">ขั้นตอนที่ 2 : กรอกรายละเอียดแพลน</span>
            <div
              className="box-in-head-box"
              onClick={() => this.handleReset()}
              role="button"
              aria-hidden
            >
              <img src={erase} className="image-erase" alt="erase" />
              <span className="headLogo">Reset</span>
            </div>
          </div>
          <div className="row">
            {this.state.setPlan === 'IPD'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('IPD')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImageActive('IPD')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textIpdActive}>IPD</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('IPD')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImage('IPD')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textIpd}>IPD</span>
                  </div>
                </div>}
            {this.state.setPlan === 'OPD'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('OPD')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImageActive('OPD')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textOpdActive}>OPD</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('OPD')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImage('OPD')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textOpd}>OPD</span>
                  </div>
                </div>}
            {this.state.setPlan === 'Dental'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('Dental')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImageActive('Dental')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textDentalActive}>Dental</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('Dental')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImage('Dental')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textDental}>Dental</span>
                  </div>
                </div>}
            {this.state.setPlan === 'Life'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('Life')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImageActive('Life')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textLifeActive}>Life</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('Life')}
                    role="button"
                    aria-hidden
                  >
                    <img
                      src={this.handleImage('Life')}
                      className="imageMenu"
                      alt="Menu"
                    />
                    <span className={this.state.textLife}>Life</span>
                  </div>
                </div>}
          </div>
          <div className="paragraph">
            {this.state.setPlan === 'OPD'
              ? <OPD
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  handleReset={this.handleReset}
                  handleResetOPD={this.props.handleResetOPD}
                  handleToggle={this.props.handleToggleOpdCoPlay}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  activePlan={this.props.activePlan}
                  handleChange={this.props.handleChange}
                  handleChangeToNull={this.props.handleChangeToNull}
                  opdCoPlay={this.props.opdCoPlay}
                  opdPerYear={this.props.opdPerYear}
                  opdPerTime={this.props.opdPerTime}
                  opdTimeNotExceedPerYear={this.props.opdTimeNotExceedPerYear}
                  opdCoPlayQuota={this.props.opdCoPlayQuota}
                  opdCoPlayDeductable={this.props.opdCoPlayDeductable}
                  opdCoPlayMixPercentage={this.props.opdCoPlayMixPercentage}
                  opdCoPlayMixNotExceed={this.props.opdCoPlayMixNotExceed}
                  opdCoPlayMixYear={this.props.opdCoPlayMixYear}
                />
              : null}
            {this.state.setPlan === 'IPD'
              ? <IPD
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  handleChange={this.props.handleChange}
                  handleChangeToNull={this.props.handleChangeToNull}
                  handleReset={this.handleReset}
                  handleResetIPD={this.props.handleResetIPD}
                  handleToggle={this.props.handleToggleIpdCoPlay}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  activePlan={this.props.activePlan}
                  lifePerYear={this.props.lifePerYear}
                  lifeTimeOfSalary={this.props.lifeTimeOfSalary}
                  lifeNotExceed={this.props.lifeNotExceed}
                  ipdType={this.props.ipdType}
                  ipdLumsumPerYear={this.props.ipdLumsumPerYear}
                  ipdLumsumPerTime={this.props.ipdLumsumPerTime}
                  ipdLumsumTimeNotExceedPerYear={
                    this.props.ipdLumsumTimeNotExceedPerYear
                  }
                  rbLumsumRoomPerNight={this.props.rbLumsumRoomPerNight}
                  rbLumsumNigthNotExceedPerYear={
                    this.props.rbLumsumNigthNotExceedPerYear
                  }
                  rbLumsumPayNotExceedPerNight={
                    this.props.rbLumsumPayNotExceedPerNight
                  }
                  rbLumsumPayNotExceedPerYear={
                    this.props.rbLumsumPayNotExceedPerYear
                  }
                  rbSchedulePatient={this.props.rbSchedulePatient}
                  rbScheduleIntensiveCarePatient={
                    this.props.rbScheduleIntensiveCarePatient
                  }
                  rbScheduleDoctor={this.props.rbScheduleDoctor}
                  rbScheduleSurgerySchedule={
                    this.props.rbScheduleSurgerySchedule
                  }
                  rbScheduleSurgeryNonSchedule={
                    this.props.rbScheduleSurgeryNonSchedule
                  }
                  rbScheduleService={this.props.rbScheduleService}
                  rbScheduleSmallSurgery={this.props.rbScheduleSmallSurgery}
                  rbScheduleAdviser={this.props.rbScheduleAdviser}
                  rbScheduleAmbulance={this.props.rbScheduleAmbulance}
                  rbScheduleAccident={this.props.rbScheduleAccident}
                  rbScheduleTreatment={this.props.rbScheduleTreatment}
                  rbScheduleTransplant={this.props.rbScheduleTransplant}
                  ipdCoPlay={this.props.ipdCoPlay}
                  ipdCoPlayQuota={this.props.ipdCoPlayQuota}
                  ipdCoPlayDeductable={this.props.ipdCoPlayDeductable}
                  ipdCoPlayMixPercentage={this.props.ipdCoPlayMixPercentage}
                  ipdCoPlayMixNotExceed={this.props.ipdCoPlayMixNotExceed}
                  ipdCoPlayMixYear={this.props.ipdCoPlayMixYear}
                />
              : null}
            {this.state.setPlan === 'Dental'
              ? <Dental
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  handleReset={this.handleReset}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  activePlan={this.props.activePlan}
                  dentalPerYear={this.props.dentalPerYear}
                  handleChange={this.props.handleChange}
                  handleResetDental={this.props.handleResetDental}
                />
              : null}
            {this.state.setPlan === 'Life'
              ? <Life
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  handleReset={this.handleReset}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  activePlan={this.props.activePlan}
                  handleChange={this.props.handleChange}
                  lifePerYear={this.props.lifePerYear}
                  lifeTimeOfSalary={this.props.lifeTimeOfSalary}
                  lifeNotExceed={this.props.lifeNotExceed}
                  handleResetLife={this.props.handleResetLife}
                />
              : null}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(AllsetPlan)
