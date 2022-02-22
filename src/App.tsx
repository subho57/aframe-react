import React from 'react';
import 'aframe';
// @ts-ignore
import { Entity, Scene } from "aframe-react";
// import back from './assets/back.svg';
import pano from './assets/final_panoramic_render_0001.jpg';
import './App.css';

function App() {
	return (
		<div className="App">
			<button><img alt='back' src="https://cdn-icons-png.flaticon.com/512/0/340.png" height="36px" style={{ zIndex: 9999, position: "absolute", left: 20 }} /></button>
			<h1>VR</h1>
			<Scene primitive="a-scene" vr-mode-ui="enabled: true">
				<Entity primitive="a-sky" src={pano} rotation="0 0 0"></Entity>
				<Entity primitive="a-camera">
					<Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
				</Entity>
			</Scene>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
