import React, { useState } from "react";
import Top from './Top';
import Bottom from './Bottom';
import Sock from './Sock';
import Face from './Face';
import IMAGE_COUNTS from "./IMAGE_COUNTS";
import styles from './styles.module.css';

function App() {
	
	const [images, setImages] = useState({
		top: Math.floor(Math.random() * IMAGE_COUNTS.tops),
		bottom: Math.floor(Math.random() * IMAGE_COUNTS.bottoms),
		sock: Math.floor(Math.random() * IMAGE_COUNTS.socks),
		face: Math.floor(Math.random() * IMAGE_COUNTS.faces),
	})

	const newTop = () => {
		if (IMAGE_COUNTS.tops < 2) return;
		let top = Math.floor(Math.random() * IMAGE_COUNTS.tops);
		while (top === images.top) {
			top = Math.floor(Math.random() * IMAGE_COUNTS.tops);
		}
		setImages({ ...images, top: top });
	}

	const newBottom = () => {
		if (IMAGE_COUNTS.bottoms < 2) return;
		let bottom = Math.floor(Math.random() * IMAGE_COUNTS.bottoms);
		while (bottom === images.bottom) {
			bottom = Math.floor(Math.random() * IMAGE_COUNTS.bottoms);
		}
		setImages({ ...images, bottom: bottom });
	}

	const newSock = () => {
		if (IMAGE_COUNTS.socks < 2) return;
		let sock = Math.floor(Math.random() * IMAGE_COUNTS.socks);
		while (sock === images.sock) {
			sock = Math.floor(Math.random() * IMAGE_COUNTS.socks);
		}
		setImages({ ...images, sock: sock });
	}

	const newFace = () => {
		if (IMAGE_COUNTS.faces < 2) return;
		let face = Math.floor(Math.random() * IMAGE_COUNTS.faces);
		while (face === images.face) {
			face = Math.floor(Math.random() * IMAGE_COUNTS.faces);
		}
		setImages({ ...images, face: face });
	}

	const newEverything = () => {
		let top = images.top;
		let bottom = images.bottom;
		let sock = images.sock;
		let face = images.face;
		if (IMAGE_COUNTS.tops >= 2) {
			top = Math.floor(Math.random() * IMAGE_COUNTS.tops);
			while (top === images.top) {
				top = Math.floor(Math.random() * IMAGE_COUNTS.tops);
			}
		}
		if (IMAGE_COUNTS.bottoms >= 2) {
			bottom = Math.floor(Math.random() * IMAGE_COUNTS.bottoms);
			while (bottom === images.bottom) {
				bottom = Math.floor(Math.random() * IMAGE_COUNTS.bottoms);
			}
		}
		if (IMAGE_COUNTS.socks >= 2) {
			sock = Math.floor(Math.random() * IMAGE_COUNTS.socks);
			while (sock === images.sock) {
				sock = Math.floor(Math.random() * IMAGE_COUNTS.socks);
			}
		}
		if (IMAGE_COUNTS.faces >= 2) {
			face = Math.floor(Math.random() * IMAGE_COUNTS.faces);
			while (face === images.face) {
				face = Math.floor(Math.random() * IMAGE_COUNTS.faces);
			}
		}
		setImages({
			top: top,
			bottom: bottom,
			sock: sock,
			face: face
		})
	}

	return (
		<div className={styles.container} onClick={newEverything}>
			<div className={styles.body}>
				<Top image={images.top} changeTop={newTop} />
				<Bottom image={images.bottom} changeBottom={newBottom} />
				<Sock image={images.sock} changeSock={newSock} />
				<Face image={images.face} changeFace={newFace} />
			</div>
		</div>
	);
}

export default App;
