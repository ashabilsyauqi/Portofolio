import React from 'react'
import Tilt from "react-parallax-tilt";
import "../SandBoxes.css";
import gambar from '../../../Images/ashabil.jpg'

const TiltComponent = () => {
	return (
		<Tilt glareEnable={true} tiltMaxAngleX={10}
		tiltMaxAngleY={10} perspective={1000}
		glareColor={"rgb(0,0,0)"}>
			<div className='tiltComponent d-flex justify-content-center align-items-center'>
				<img src={gambar} alt='lol' className='photo-sample' />
			</div>
		</Tilt>
	)
}

export default TiltComponent;
