//도보 따라가기 페이지
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../cssdesign/startingbutton_style.css";
import Startingbuttonfinish from '../startingbutton/startingbutonfinish.jsx';

// 이미지 import
import vectorImg from "../img/x.svg";
import arrowLeft from "../img/longarrow-right.png";
import image35 from "../img/mapspicy.png";
import menuIcon from "../img/menu.svg";
import Warning from "./warning"; // 경고 컴포넌트 import

function Startingbutton() {
  const navigate = useNavigate();
  // 입력창의 값을 상태로 관리
  const [input1, setInput1] = useState("다이소 대구 신당점");
  const [input2, setInput2] = useState("대구 달서구 신당동 183");

  // 경고 표시 여부 상태
  const [isWarningVisible, setWarningVisible] = useState(false);

  // 경고 표시 함수
  const showWarning = () => {
    setWarningVisible(true);
  };

  // 경고 숨기기 함수
  const hideWarning = () => {
    setWarningVisible(false);
  };

  // 예시로 페이지 로드 시 경고 표시
  useEffect(() => {
    // 페이지가 로드될 때 자동으로 경고 팝업 표시
    showWarning();
  }, []); // 빈 배열을 넣으면 컴포넌트가 처음 로드될 때만 실행됨

  return (
    <div className="startingbutton_div-wrapper">
      <div className="startingbutton_div">
        <div className="startingbutton_overlap">
          {/* 첫 번째 섹션 */}
          <div className="startingbutton_frame">
            <div className="startingbutton_overlap-group-wrapper">
              <div className="startingbutton_overlap-group">
                {/* 내용 없음 */}
              </div>
            </div>
          </div>
          {/* 두 번째 섹션 */}
          <div className="startingbutton_view">
            <div className="startingbutton_overlap-2">
              <div className="startingbutton_frame-2">
                <input
                  type="text"
                  className="startingbutton_text-wrapper"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  placeholder="출발지를 입력해주세요"
                />
              </div>
              <div className="startingbutton_frame-3">
                <input
                  type="text"
                  className="startingbutton_text-wrapper-2"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  placeholder="도착지를 입력해주세요"
                />
              </div>
              <img className="startingbutton_arrow-left" src={arrowLeft} alt="Arrow Left" />
            </div>
            <img
              className="startingbutton_vector"
              src={vectorImg}
              alt="Vector"
              onClick={() => navigate("/Main_normal")} // 클릭 이벤트 연결
              style={{ cursor: "pointer" }} // 클릭 가능하도록 스타일 추가
            />
          </div>
        </div>

        {/* 경고 팝업 (클릭 시 사라짐) */}
        {isWarningVisible && (
          <div onClick={hideWarning}> {/* 클릭 시 경고 숨기기 */}
            {/*<Warning />*/}
          </div>
        )}

        {/* 세 번째 섹션 */}
        <div className="startingbutton_view-2">
          <div className="startingbutton_map-spicy">
            <div className="startingbutton_text-wrapper-3">map spicy</div>
          </div>
          <div className="startingbutton_image-wrapper">
            <img className="startingbutton_image" src={image35} alt="Map Image" />
          </div>
          <img className="startingbutton_menu" src={menuIcon} alt="Menu" />
        </div>
        <Startingbuttonfinish /> {/* 길찾기 종료 페이지 호출 */}

      </div>
    </div>
  );
}

export default Startingbutton;
