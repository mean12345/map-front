import React, { useState } from 'react';
import './main-normal.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom';

import MapComponent from './MapComponent';
import ButtonSectionNormal from './ButtonSectionNormal';
import ButtonSectionFemale from './ButtonSectionFemale';
import ButtonSectionNoin from './ButtonSectionNoin';
import OverlapGroup from './OverlapGroupNormal';
import Search from '../directions/search';

import mapSpicy from '../img/mapspicy.png';
import mike from '../img/mike.svg';
import menu from '../img/menu.svg';

//메인 화면

function App() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [top, setTop] = useState('calc(100% - 50px)');
    const [height, setHeight] = useState('57px');

    const [selectedUser, setSelectedUser] = useState('male');

    const toggleHeight = () => {
        if (isOpen) {
            setHeight('57px');
            setTop('calc(100% - 50px)');
        } else {
            setHeight('371px');
            setTop('auto');
        }
        setIsOpen(!isOpen);
    };

    const handleUserChange = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="element">
            <div className="div">
                <div className="overlap">
                    <div className="frame">
                        <div style={{ width: '100%', height: '100vh' }}>
                            <MapComponent />
                        </div>
                    </div>
                    {selectedUser === 'male' && <ButtonSectionNormal />}
                    {selectedUser === 'female' && <ButtonSectionFemale />}
                    {selectedUser === 'wheelchair' && <ButtonSectionNoin />}
                    <div
                        className="overlap-wrapper"
                        style={{
                            height: height,
                            top: top,
                            transition: 'top 0.3s ease, height 0.3s ease',
                        }}
                    >
                        <OverlapGroup
                            toggleHeight={toggleHeight}
                            onUserChange={handleUserChange}
                        />
                    </div>
                </div>
                <div className="view-3">
                    <div className="map-spicy">
                        <div className="text-wrapper-11">map spicy</div>
                    </div>
                    <div className="image-wrapper">
                        <img
                            className="image-4"
                            src={mapSpicy}
                            alt="map spicy 로고"
                        />
                    </div>
                    <button
                        className="view-4"
                        onClick={() => navigate('/search')}
                    >
                        <img
                            className="image-5"
                            src={mike}
                            alt="마이크 아이콘"
                        />
                        <div className="text-wrapper-12">장소, 주소 검색</div>
                    </button>
                    <img className="menu" src={menu} alt="메뉴 아이콘" />
                </div>
            </div>
        </div>
    );
}

//Search 페이지로 이동
function path_Search() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default path_Search;