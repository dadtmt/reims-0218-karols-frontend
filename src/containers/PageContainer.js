import React, { Component } from "react"
import { connect } from "react-redux"

import {
  showServices,
  showSex,
  showFemalePrestation,
  showMalePrestation
} from "../display"

import ServiceContainer from "./ServiceContainer"
import ShopContainer from "./ShopContainer"
import PrestationFemaleContainer from "./PrestationFemaleContainer"
import PrestationMaleContainer from "./PrestationMaleContainer"
import GenderContainer from "./GenderContainer"

import { makeShopsPrestationsReceived } from "../actions/actions"

import { fetchShopsPrestations } from "../api"

const mapStateToProps = state => ({
  showServices: showServices(state),
  showSex: showSex(state),
  showFemalePrestation: showFemalePrestation(state),
  showMalePrestation: showMalePrestation(state)
})

const mapDispatchToProps = dispatch => ({
  onShopsPrestationsReceived: response =>
    dispatch(makeShopsPrestationsReceived(response))
})

class Page extends Component {
  render() {
    return (
      <div>
        <ShopContainer />
        <hr />
        {this.props.showServices && <ServiceContainer />}
        <hr />
        {this.props.showSex && <GenderContainer />}
        <hr />
        {this.props.showFemalePrestation && <PrestationFemaleContainer />}
        <hr />
        {this.props.showMalePrestation && <PrestationMaleContainer />}
      </div>
    )
  }
  componentDidMount() {
    //TODO fetch shopsandprestations
    fetchShopsPrestations().then(response => {
      this.props.onShopsPrestationsReceived(response)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
