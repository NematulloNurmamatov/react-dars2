import React, { Fragment, useState } from 'react';
import Card from './Card';
import dev1 from "../images/dev1.webp";
import dev2 from "../images/dev2.jpg";
import dev3 from "../images/dev3.jpeg";
import "../style/main.css";

const initialPerson = [
    {
        id: 1,
        name: "Nematullo",
        img: dev1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dignissim erat, vel consectetur tortor. Sed euismod massa et neque consectetur, vel volutpat lectus pulvinar. Integer vel justo vel ligula convallis sagittis."
    },
    {
        id: 2,
        name: "Muslihiddin",
        img: dev2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dignissim erat, vel consectetur tortor. Sed euismod massa et neque consectetur, vel volutpat lectus pulvinar. Integer vel justo vel ligula convallis sagittis."
    }
];

export default function Cards() {
    const [full_name, setFullName] = useState('');
    const [list, setList] = useState(initialPerson);

    function addUser() {
        if (!full_name.trim()) return; // Bo'sh ismni qo'shmaslik
        const newUser = {
            id: Date.now(), // Har bir foydalanuvchi uchun noyob id
            name: full_name,
            img: dev3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dignissim erat, vel consectetur tortor. Sed euismod massa et neque consectetur, vel volutpat lectus pulvinar. Integer vel justo vel ligula convallis sagittis."
        };
        setList([...list, newUser]);
        setFullName(''); // Inputni tozalash
    }

    function deleteUser(id) {
        setList(list.filter(user => user.id !== id));
    }

    return (
        <Fragment>
            <div className='container cards'>
                <div className='cards-form'>
                    <input
                        type="text"
                        value={full_name}
                        placeholder="Ism kiriting"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <button onClick={addUser}>Qo'shish</button>
                </div>
                <div className="cards-list">
                    {list.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            desc={item.desc}
                            img={item.img}
                            onDelete={deleteUser}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

