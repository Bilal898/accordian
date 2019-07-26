import React from 'react'

export default function Accordian() {
    return (
        <div className="accordian_section">
            <button className="accordian_button">
                <p>
                    {props.title}
                </p>
            </button>
        </div>
    )
}
