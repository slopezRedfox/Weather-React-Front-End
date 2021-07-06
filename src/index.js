/*
 * Copyright (C) 2021 Klooid Innovations
 * All Rights Reserved.
 *
 * The contents of this software are proprietary and confidential to Klooid.
 * No part of this program may be photocopied, reproduced or translated
 * into another programming language without prior written consent of
 * Klooid. The user is free to modify the source code after obtaining
 * a software license from Klooid.  All source code changes must be provided
 * back to Klooid without any encumbrance.
 *
 * Author: Santiago López <santiago241996@gmail.com>
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
