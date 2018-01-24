import React from "react";
import Slider, { Range } from "rc-slider";

import "./Calculator.css";

const OPTION_HEADER_STYLE = {
  fontSize: 18,
  fontWeight: "bold"
};

const OVERLAY_STYLE = {
  position: "absolute",
  top: 60,
  right: "5%",
  left: "5%",
  textAlign: "center",
  color: "white"
};

export default class Calculator extends React.Component {
  renderOption(title, text) {
    return (
      <div className="g--4 p-a300 b--g m-v100">
        <div className="t--sans tt-u m-b300" style={OPTION_HEADER_STYLE}>
          {title}
        </div>

        {text ? (
          <div className="t--intro">{text}</div>
        ) : (
          <div className="t--intro ta-c" style={{ marginTop: "40%" }}>
            …
          </div>
        )}
      </div>
    );
  }

  render() {
    const { variant } = this.props;

    return (
      <div>
        <div className="sh">
          <h2 className="sh-title">Retirement Calculator</h2>
        </div>

        <div className="t--intro m-v300">
          This calculator will help you estimate your retirement income. The
          amount you actually receive may be different, depending on your
          circumstances.
        </div>

        <div>
          <div className="g m-v500" style={{ minHeight: "18rem" }}>
            {this.renderOption(
              "Option A",
              variant === "filled" ||
              variant === "no-beneficiary" ||
              variant === "talk" ? (
                <span>
                  Anticipated benefit of <strong>$1,278</strong> a month.
                </span>
              ) : null
            )}
            {this.renderOption(
              "Option B",
              variant === "filled" ||
              variant === "no-beneficiary" ||
              variant === "talk" ? (
                <span>
                  Anticipated benefit of <strong>$1,100</strong> a month, then
                  payout of remainder.
                </span>
              ) : null
            )}
            {this.renderOption(
              "Option C",
              variant === "filled" || variant === "talk" ? (
                <span>
                  Anticipated benefit of <strong>$1,005</strong> a month, then{" "}
                  <strong>$856</strong> a month to a beneficiary.
                </span>
              ) : variant === "no-beneficiary" ? (
                <span>
                  Add a beneficiary’s year of birth to calculate this option.
                </span>
              ) : null
            )}
          </div>
        </div>

        {variant === "empty" && (
          <div className="b b--ob p-a300 m-v500">
            <div className="t--info" style={{ color: "white" }}>
              Fill out the form below and we’ll calculate your approximate
              benefits.
            </div>
          </div>
        )}

        {(variant === "filled" || variant === "no-beneficiary") && (
          <div className="b b--ob p-a300 m-v500">
            <div className="t--info" style={{ color: "white" }}>
              You’re doing great!
            </div>
          </div>
        )}

        {variant === "error" && (
          <div className="b b--r p-a300 m-v500">
            <div className="t--info" style={{ color: "white" }}>
              You need at least 5 years of service to qualify for retirement
              payments.
            </div>
          </div>
        )}

        {variant === "talk" && (
          <div
            className="b p-a300 m-v500"
            style={{ backgroundColor: "#339933", position: "relative" }}
          >
            <div className="t--info" style={{ color: "white" }}>
              <strong>You’re getting close to retirement!</strong> We need to
              talk about your benefits.
            </div>
            <button
              className="btn btn--200"
              style={{ position: "absolute", right: "1rem", top: "0.3rem" }}
            >
              Schedule a meeting
            </button>
          </div>
        )}

        <div className="g">
          <div className="g--6">
            <div className="m-b300">
              <div className="sel">
                <label htmlFor="groupNumber" className="sel-l txt-l--mt000">
                  Group Number
                </label>
                <div className="sel-c">
                  <select name="groupNumber" id="groupNumber" className="sel-f">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <span className="m-l200">
                  — <a href="#">what group am I?</a>
                </span>
              </div>
            </div>
            <div className="txt">
              <label htmlFor="startDate" className="txt-l txt-l--mt000">
                Start Date
              </label>
              <input
                id="startDate"
                type="startDate"
                placeholder="MM/DD/YYYY"
                className="txt-f"
                value={variant !== "empty" ? "05/05/1987" : ""}
              />
            </div>

            <div className="txt">
              <label htmlFor="birthYear" className="txt-l txt-l--mt000">
                Your birth year
              </label>
              <input
                id="birthYear"
                type="birthYear"
                placeholder="YYYY"
                className="txt-f"
                value={variant !== "empty" ? "1971" : ""}
              />
            </div>

            <div className="txt">
              <label
                htmlFor="beneficiaryBirthYear"
                className="txt-l txt-l--mt000"
              >
                Beneficiary’s Birth Year (For Option C)
              </label>
              <input
                id="beneficiaryBirthYear"
                type="beneficiaryBirthYear"
                placeholder="YYYY"
                className="txt-f"
                value={variant !== "empty" && variant !== "no-beneficiary" ? "1982" : ""}
              />
            </div>
          </div>

          <div className="g--6">
            <div className="txt">
              <label htmlFor="averageSalary" className="txt-l txt-l--mt000">
                Average salary in final 3 years
              </label>
              <input
                id="averageSalary"
                type="averageSalary"
                placeholder="$XX,XXX"
                className="txt-f"
                value={variant !== "empty" ? "$80,000" : ""}
              />
            </div>
            <div className="txt">
              <label htmlFor="retirementAge" className="txt-l">
                Age at retirement
              </label>

              <Slider
                min={18}
                max={80}
                value={variant !== "empty" ? 72 : 65}
                handle={({ className, value, offset }) => (
                  <div
                    className={`${className} t--sans`}
                    style={{ left: `${offset}%` }}
                  >
                    {value < 80 ? value : "80+"}
                  </div>
                )}
              />
            </div>

            <div className="txt">
              <label htmlFor="yearsOfService" className="txt-l txt-l--mt000">
                Years of Service
              </label>
              <Slider
                min={0}
                max={60}
                value={variant !== "empty" ? 25 : 20}
                handle={({ className, value, offset }) => (
                  <div
                    className={`${className} t--sans`}
                    style={{ left: `${offset}%` }}
                  >
                    {value < 60 ? value : "60+"}
                  </div>
                )}
              />
              <div className="t--subinfo m-v300">
                Your years of service will be affected by any leave taken or
                years credited.
              </div>
            </div>
          </div>
        </div>

        <div className="m-v700 p-v300">
          <div className="sh">
            <h2 className="sh-title">Learn about your options</h2>
          </div>

          <div className="g m-v500">
            <div className="g--4">
              <h3 className="t--sans tt-u" style={{ fontSize: 18 }}>
                Option A
              </h3>
            </div>
            <div className="g--8">
              <p style={{ marginTop: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ornare consequat augue at efficitur. Sed et lorem sapien.
                Vivamus sed tincidunt eros, volutpat aliquam libero. Praesent
                tempus mi orci, a tempor lacus auctor bibendum. Integer ut massa
                malesuada, dapibus nunc ut, semper urna. Integer ante ex,
                gravida eget lectus sed, tristique euismod diam. Suspendisse
                suscipit, elit quis pretium rhoncus, justo elit vulputate dui,
                vel eleifend mi mauris eu nibh. Maecenas ut arcu in turpis porta
                facilisis venenatis a elit.
              </p>
              <p>
                Quisque porta vitae nisl sed elementum. Nunc ac ante aliquet,
                blandit est ut, euismod ipsum. Mauris pulvinar sem in dignissim
                vulputate. Fusce eu porta leo. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam
                fermentum leo pharetra nibh sodales fermentum. Proin lobortis mi
                purus, at tincidunt tellus venenatis scelerisque. Praesent
                ullamcorper nec velit id mollis.
              </p>
            </div>
          </div>

          <div className="g m-v500">
            <div className="g--4">
              <h3 className="t--sans tt-u" style={{ fontSize: 18 }}>
                Option B
              </h3>
            </div>
            <div className="g--8">
              <p style={{ marginTop: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ornare consequat augue at efficitur. Sed et lorem sapien.
                Vivamus sed tincidunt eros, volutpat aliquam libero. Praesent
                tempus mi orci, a tempor lacus auctor bibendum. Integer ut massa
                malesuada, dapibus nunc ut, semper urna. Integer ante ex,
                gravida eget lectus sed, tristique euismod diam. Suspendisse
                suscipit, elit quis pretium rhoncus, justo elit vulputate dui,
                vel eleifend mi mauris eu nibh. Maecenas ut arcu in turpis porta
                facilisis venenatis a elit.
              </p>
              <p>
                Quisque porta vitae nisl sed elementum. Nunc ac ante aliquet,
                blandit est ut, euismod ipsum. Mauris pulvinar sem in dignissim
                vulputate. Fusce eu porta leo. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam
                fermentum leo pharetra nibh sodales fermentum. Proin lobortis mi
                purus, at tincidunt tellus venenatis scelerisque. Praesent
                ullamcorper nec velit id mollis.
              </p>
            </div>
          </div>

          <div className="g m-v500">
            <div className="g--4">
              <h3 className="t--sans tt-u" style={{ fontSize: 18 }}>
                Option C
              </h3>
            </div>
            <div className="g--8">
              <p style={{ marginTop: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ornare consequat augue at efficitur. Sed et lorem sapien.
                Vivamus sed tincidunt eros, volutpat aliquam libero. Praesent
                tempus mi orci, a tempor lacus auctor bibendum. Integer ut massa
                malesuada, dapibus nunc ut, semper urna. Integer ante ex,
                gravida eget lectus sed, tristique euismod diam. Suspendisse
                suscipit, elit quis pretium rhoncus, justo elit vulputate dui,
                vel eleifend mi mauris eu nibh. Maecenas ut arcu in turpis porta
                facilisis venenatis a elit.
              </p>
              <p>
                Quisque porta vitae nisl sed elementum. Nunc ac ante aliquet,
                blandit est ut, euismod ipsum. Mauris pulvinar sem in dignissim
                vulputate. Fusce eu porta leo. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam
                fermentum leo pharetra nibh sodales fermentum. Proin lobortis mi
                purus, at tincidunt tellus venenatis scelerisque. Praesent
                ullamcorper nec velit id mollis.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
