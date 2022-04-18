import React, { Component } from "react";

import CanvasDraw from "./RCD";
import uuid from 'uuid/v4'

import { API, graphqlOperation } from 'aws-amplify'
import { onUpdateCanvas } from './graphql/subscriptions'
import { updateCanvas, createCanvas } from './graphql/mutations'

render() {
    return (
      <div>
        <h1>Work in Progress</h1>
      </div>
    );
  }
export default Demo
