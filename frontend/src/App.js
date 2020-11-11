import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Carousel} from "antd";

import MovieComponent from "./components/MovieComponent";

export default class App extends React.Component {


  render() {
    return (
        <div className="App">{
            <Carousel dotPosition="top"  >
                <div key="1">
                <h3>Avengers</h3>
                    <div display="inline-block">
                     <MovieComponent poster={1}/>
                    </div>
                </div>
                <div key="2">
                <h3>Frozen</h3>
                    <MovieComponent poster={2}/>
                </div>
                <div key="3">
                <h3>XXX</h3>
                    <MovieComponent poster={3}/>
                </div>

                <div key="4">
                    <h3>Descargas</h3>
                </div>

            </Carousel>

          }
        </div>
    );
  }

}