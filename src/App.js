import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/media/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>sneakers shop</p>
          </div>
        </div>
        <ul className="headerRigth d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/media/cart.svg" alt="logo" />
            <span>1200$</span>
          </li>
          <li>
            <img width={18} height={18} src="/media/heart.svg" alt="logo" />
          </li>
          <li>
            <img width={18} height={18} src="/media/user.svg" alt="logo" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>

        <div className="content_inner">
          <div className="card mb-40">
            <img
              width={133}
              height={112}
              src="/media/sneakers/1.jpg"
              alt="card-img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="cardBottom  d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>12000$</b>
              </div>
              <button className="btn">
                <img width={32} height={32} src="/media/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card mb-40">
            <img
              width={133}
              height={112}
              src="/media/sneakers/2.jpg"
              alt="card-img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="cardBottom  d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>12000$</b>
              </div>
              <button className="btn">
                <img width={32} height={32} src="/media/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card mb-40">
            <img
              width={133}
              height={112}
              src="/media/sneakers/3.jpg"
              alt="card-img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="cardBottom  d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>12000$</b>
              </div>
              <button className="btn">
                <img width={32} height={32} src="/media/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card mb-40">
            <img
              width={133}
              height={112}
              src="/media/sneakers/4.jpg"
              alt="card-img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="cardBottom  d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>12000$</b>
              </div>
              <button className="btn">
                <img width={32} height={32} src="/media/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
