import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
const IconButtonComponent = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* 데스크톱 */
    @media (min-width: 1024px) {
        svg {
            width: 45px;
            height: 45px;
        }
    }

    /* 태블릿 */
    @media (min-width: 600px) and (max-width: 1023px) {
        svg {
            width: 35px;
            height: 35px;
        }
    }

    /* 모바일 */
    @media (max-width: 599px) {
        svg {
            width: 25px;
            height: 25px;
        }
    }
`;

const NonIcon = styled.span`
    font-size: 12px;
    color: #aaa;
`;

const IconButton = ({ icon, onClick }) => {
    return (
        <IconButtonComponent>
            <IconWrapper>{icon ? icon : <NonIcon>Icon not available</NonIcon>}</IconWrapper>
        </IconButtonComponent>
    );
};

IconButton.propTypes = {
    icon: PropTypes.node.isRequired, // icon은 React 노드로 필수 항목
    onClick: PropTypes.func.isRequired, // onClick은 함수 타입
};

IconButton.defaultProps = {
    icon: null, // 기본값은 null (비워진 상태)
    onClick: () => {}, // 기본값은 빈 함수
};

export default React.memo(IconButton);
