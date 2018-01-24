import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "../components/Header";
import Calculator from "../components/Calculator";

storiesOf("Example", module)
  .add("Empty", () => (
    <div>
      <Header />
      <div className="mn">
        <div className="b-c">
          <Calculator variant="empty" />
        </div>
      </div>
    </div>
  ))
  .add("Filled", () => (
    <div>
      <Header />
      <div className="mn">
        <div className="b-c">
          <Calculator variant="filled" />
        </div>
      </div>
    </div>
  ))
  .add("No beneficiary", () => (
    <div>
      <Header />
      <div className="mn">
        <div className="b-c">
          <Calculator variant="no-beneficiary" />
        </div>
      </div>
    </div>
  ))
  .add("Error", () => (
    <div>
      <Header />
      <div className="mn">
        <div className="b-c">
          <Calculator variant="error" />
        </div>
      </div>
    </div>
  ))
  .add("Close to retirement", () => (
    <div>
      <Header />
      <div className="mn">
        <div className="b-c">
          <Calculator variant="talk" />
        </div>
      </div>
    </div>
  ));

