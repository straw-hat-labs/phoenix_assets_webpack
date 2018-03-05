/* eslint-disable no-console */

import "jquery/dist/jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
// import 'phoenix_html'

import "./css/app.scss";
import socket from "./socket";
import "./service-worker-register";

console.log(
  `Application "${process.env.APP_NAME} ${process.env.VERSION}" running on "${
    process.env.NODE_ENV
  }" mode`
);
