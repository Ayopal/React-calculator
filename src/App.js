/** @format */

import React, { useState } from "react";


function App() {
	const [input, setInput] = useState("");

	function handleClick(e) {
		e.preventDefault();
		const data = e.target.value;
		if (input.length <= 9) {
			setInput((prev) => (prev += data));
		} else {
			alert("Calculator cannot accept more than nine (9) characters");
		}
	}

	function clear(e) {
		e.preventDefault();
		setInput("");
	}

	function removeInput() {
		setInput((prev) => prev.split("").slice(0, -1).join(""));
	}

	function calc(e) {
		e.preventDefault();
		setInput(eval(input).toFixed(2));
	}
	return (
		<div className='main'>
			<div className='content-wrapper'>
				{/* DEVELOPER DESCRIPTION */}
				<div className='developerdesc'>
					<p>
						Calculator Designed <br /> By{" "}
					</p>
					<h1>Ayoola Paul</h1>
					<p className="copy"> &copy; 2022</p>
					<hr />
					<ul>
						<h4>Developed Uisng</h4>
						<li>HTML</li>
						<li>CSS</li>
						<li>JS</li>
						<li>REACT</li>
					</ul>
				</div>

				<div className='wrapper'>
					
					{/* TEXT SCREEN */}
					<input className='input' type='text' value={input} onChange={""} />

					<div className='container'>
						{/* CALCULATOR BUTTONS  */}
						<button className='circle first' onClick={clear} value='AC'>
							AC
						</button>
						<button className='circle first' onClick={removeInput} value=''>
							CE
						</button>
						<button className='circle first' onClick={handleClick} value='%'>
							%
						</button>
						<button className='circle last' onClick={handleClick} value='/'>
							/
						</button>

						<button className='circle other' onClick={handleClick} value='7'>
							7
						</button>
						<button className='circle other' onClick={handleClick} value='8'>
							8
						</button>
						<button className='circle other' onClick={handleClick} value='9'>
							9
						</button>
						<button className='circle last' onClick={handleClick} value='×'>
							x
						</button>

						<button className='circle other' onClick={handleClick} value='4'>
							4
						</button>
						<button className='circle other' onClick={handleClick} value='5'>
							5
						</button>
						<button className='circle other' onClick={handleClick} value='6'>
							6
						</button>
						<button className='circle last' onClick={handleClick} value='-'>
							-
						</button>

						<button className='circle other' onClick={handleClick} value='1'>
							1
						</button>
						<button className='circle other' onClick={handleClick} value='2'>
							2
						</button>
						<button className='circle other' onClick={handleClick} value='3'>
							3
						</button>
						<button className='circle last' onClick={handleClick} value='+'>
							+
						</button>

						<button
							className='circle other zero'
							onClick={handleClick}
							value='0'
						>
							0
						</button>
						<button
							className='circle other btn'
							onClick={handleClick}
							value='.'
						>
							.
						</button>
						<button className='btn' className='circle last' onClick={calc}>
							=
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
