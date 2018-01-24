import React from "react";

export default function Header() {
  return (
    <div>
      <input type="checkbox" id="s-tr" className="s-tr" aria-hidden="true" />
      <header className="h" role="header">
        <input type="checkbox" id="brg-tr" className="brg-tr a11y--h" />

        <label htmlFor="brg-tr" className="brg-b" type="button">
          <div className="brg">
            <span className="brg-c">
              <span className="brg-c-i" />
            </span>
            <span className="brg-t">
              <span className="a11y--h">Toggle </span>Menu
            </span>
          </div>
        </label>
        <div className="lo">
          <a href="#" className="lo-l">
            <img
              src="https://patterns.boston.gov/images/public/logo.svg"
              alt="City of Boston"
              className="lo-i"
            />
            <span className="lo-t">Mayor Martin J. Walsh</span>
          </a>
        </div>
        <a href="#" className="s">
          <img
            src="https://patterns.boston.gov/images/public/seal.svg"
            alt="City of Boston"
            className="s-i"
          />
        </a>
        <nav className="nv-h">
          <ul className="nv-h-l">
            <li className="nv-h-l-i">
              <a
                href="https://boston.gov/public-notices"
                title="Public Notices"
                className="nv-h-l-a"
              >
                Public Notices
              </a>
            </li>
            <li className="nv-h-l-i">
              <a
                href="https://boston.gov/pay-and-apply"
                title="Pay and Apply"
                className="nv-h-l-a"
              >
                Pay and Apply
              </a>
            </li>
            <li className="nv-h-l-i">
              <a
                href="https://boston.gov/feedback"
                title="Feedback"
                className="nv-h-l-a"
              >
                Feedback
              </a>
            </li>
            <li className="tr nv-h-l-i">
              <a
                href="#translate"
                title="Translate"
                className="nv-h-l-a nv-h-l-a--k--s tr-link"
              >
                Translate
              </a>
              <ul className="tr-dd">
                <li>
                  <span className="notranslate tr-dd-link tr-dd-link--message">
                    Loading...
                  </span>
                </li>
                <li>
                  <a href="#" className="notranslate tr-dd-link" data-ln="ht">
                    Kreyòl Ayisyen
                  </a>
                </li>
                <li>
                  <a href="#" className="notranslate tr-dd-link" data-ln="pt">
                    Portugese
                  </a>
                </li>
                <li>
                  <a href="#" className="notranslate tr-dd-link" data-ln="es">
                    Español
                  </a>
                </li>
                <li>
                  <a href="#" className="notranslate tr-dd-link" data-ln="vi">
                    Tiếng Việt
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="notranslate tr-dd-link tr-dd-link--hidden"
                    data-ln="en"
                  >
                    English
                  </a>
                </li>
              </ul>
            </li>
            <li className="nv-h-l-i">
              <label
                htmlFor="s-tr"
                title="Search"
                className="nv-h-l-a nv-h-l-a--k nv-h-l-a-ic"
              >
                <svg
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 41"
                >
                  <title>Search</title>
                  <path
                    className="nv-h-l-a-i"
                    d="M24.2.6C15.8.6 9 7.4 9 15.8c0 3.7 1.4 7.2 3.6 9.8L1.2 37c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l11.5-11.5C18 30 21 31 24.2 31c8.4 0 15.2-6.8 15.2-15.2C39.4 7.4 32.6.6 24.2.6zm0 26.5c-6.2 0-11.2-5-11.2-11.2S18 4.6 24.2 4.6s11.2 5 11.2 11.2-5 11.3-11.2 11.3z"
                  />
                </svg>
              </label>
            </li>
          </ul>
        </nav>
        <div className="h-s">
          <form className="sf" acceptCharset="UTF-8" method="get">
            <input name="utf8" type="hidden" value="✓" />
            <div className="sf-i">
              <input
                type="text"
                name="q"
                id="q"
                value=""
                placeholder="Search…"
                className="sf-i-f"
                autocomplete="off"
              />
              <button className="sf-i-b">Search</button>
            </div>
          </form>
        </div>
      </header>{" "}
    </div>
  );
}
