import { useState } from 'react'

const Content = () => {
    const [text, setText] = useState<string>('')
    const [size, setSize] = useState<string>('50')
    return (
        <main>
            <div>
                <img src="pasmal.jpg" alt="pour ajouter du texte" />

                <p id="pas" className="pas-mal">
                    Pas
                </p>
                <p id="mal" className="pas-mal">
                    Mal
                </p>
                <p
                    id="insert-text"
                    className="pas-mal"
                    style={{ fontSize: `${size}px` }}
                >
                    {text}
                </p>
            </div>
            <div id="inputs">
                <label id="input-text-desc" htmlFor="input-text">
                    C'est quoi ?
                </label>
                <input
                    id="input-text"
                    aria-describedby="input-text-desc"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <label id="input-size-desc" htmlFor="input-size">
                    Size
                </label>
                <input
                    id="input-size"
                    aria-describedby="input-size-desc"
                    type="range"
                    min="30"
                    max="120"
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                />
                {size}
            </div>
        </main>
    )
}

export default Content
