import style from "../styles/faq.module.css";
export default function Faq() {
  return (
    <div className="container">
      <h1 className={style.header}>Frequently Ask Question</h1>

      <div style={{ marginTop: "63px", padding: 30 }}>
        <div>
          <a
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What is the date of commencement and process for Joining?
          </a>
          <hr />
          <div className="collapse" id="collapseExample">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <a
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            What is in it for you?
          </a>
          <hr />
          <div className="collapse" id="collapseExample1">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <a
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            What is the date of commencement and process for Joining?
          </a>
          <hr />
          <div className="collapse" id="collapseExample2">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <a
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            What is in it for you?
          </a>
          <div className="float-end">
            <i className="bi bi-caret-down-fill" style={{ opacity: "0.3" }}></i>
          </div>
          <hr />
          <div className="collapse" id="collapseExample3">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <a
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample4"
          >
            What is the date of commencement and process for Joining?{" "}
          </a>
          <hr />
          <div className="collapse" id="collapseExample4">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <a
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample5"
          >
            What is in it for you?
          </a>
          <hr />
          <div className="collapse" id="collapseExample5">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
