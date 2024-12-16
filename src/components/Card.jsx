import React from 'react';
import Title from './Title';

function Card({ id, title, desc, img, onDelete }) {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="card" id={`card-${id}`}>
            <div>
                <img src={img} alt={title} />
            </div>
            <div>
                <p className='t_text'>{title}</p>
                <Title>{desc}</Title>
            </div>
            <div>
                <button onClick={handleDelete}>O'chirish</button>
            </div>
        </div>
    );
}

export default Card;
