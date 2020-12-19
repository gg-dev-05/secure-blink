import React from 'react'
import Card from './Card'
import '../css/CardColumn.css'
export default function CardColumn() {
    return (
        <div className="cardColumn">
            <div className="card c1">
                <Card step="Step 1" heading="Send your brief" />
            </div>
            <div className="card card-shadow c2">
                <Card step="Step 2" heading="Wait for delivery" />
            </div>
            <div className="card c3">
                <Card step="Step 3" heading="Get your files!" />
            </div>



        </div>
    )
}
