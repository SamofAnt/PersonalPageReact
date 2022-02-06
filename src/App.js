import './App.css';
import React from 'react';
import photo from "./new-user.jpg"
import Skills from "./Components/Skills/Skills"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Portfolio from "./Components/Portfolio/Portfolio";

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="App">
            <Header/>
            <section className="hero-image">
                <div className="container">
                    <h1 className="heading">Персональная страница</h1>
                    <p className="heading">Информация о себе</p>
                </div>
            </section>
            <section className="intro">
                <div className="container">
                    <h2 className="subheading">Давайте познакомимся</h2>
                    <p >Здравствуйте, меня зовут Самофалов Антон, я обучаюсь в компьютерной академии ШАГ, не имею опыта работы, проживаю в городе Одинцово, Московская область</p>
                    <figure className="user-image">
                        <img src={photo} width="640" height="640" alt=""/>
                            <figcaption>Это я</figcaption>
                    </figure>
                    <Skills/>
                </div>
            </section>
            <Portfolio/>
            <Footer/>
        </div>);
  }
}

export default App;
