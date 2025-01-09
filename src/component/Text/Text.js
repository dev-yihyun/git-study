import React from "react";
import styled from "styled-components";
/*
빨 : ff3f3f
파 : 0D47A1
초 : 4CAF50
검 : 212121
그레이 : 37474F
화이트 : #FFFAFA
색상
폰트크기
굵기
텍스트 위치
*/
const TextComponent = styled.p`
    color: ${(props) => {
        switch (props.$color) {
            case "black":
                return "#212121";
            case "white":
                return "#FFFAFA";
            case "error":
            case "red":
                return "#ff3f3f";
            case "blue":
                return "#0D47A1";
            case "green":
                return "#4CAF50";
            case "grey":
                return "#37474F";
            default:
                return props.$color;
        }
    }};
    font-size: ${(props) => props.$fontSize || "16px"}; // 기본값
    font-weight: ${(props) => (props.$fontWeight === "bold" ? "700" : "400")};
    text-align: ${(props) => props.$textAlign || "left"};
    align-self: ${(props) => props.$alignSelf || "auto"}; /* 부모의 Flexbox 정렬에서 독립 */
`;

const Text = ({ children, color, fontSize, fontWeight, textAlign, alignSelf }) => {
    return (
        <TextComponent
            $color={color}
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $textAlign={textAlign}
            $alignSelf={alignSelf} // 부모 Flexbox 정렬에서 독립
        >
            {children}
        </TextComponent>
    );
};

// 기본 props 설정
Text.defaultProps = {
    color: "#212121", // 기본 색상
    fontSize: "16px", // 기본 폰트 크기
    fontWeight: "normal", // 기본 폰트 굵기 (일반)
    textAlign: "left", // 기본 텍스트 정렬 (왼쪽)
    alignSelf: "auto", // 기본 Flexbox 정렬
};

export default React.memo(Text);
