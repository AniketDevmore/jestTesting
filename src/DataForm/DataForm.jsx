import { useState } from "react";

const DataForm = () => {
    const [email, setEmail] = useState('ani@yopmail.com');

    return (
        <form>
            <h3>Enter Data</h3>
            <div data-testid='image wrapper'>
                <img alt="data" src="data.jpg" />
            </div>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                value={email}
                onchange={e => setEmail(e.target.value)}
            />

            <label htmlFor="color">Color</label>
            <input
                id="color"
                placeholder="Red"
            />

            <button title="Click when ready to submit">
                Submit
            </button>
        </form>
    )
}

export default DataForm;