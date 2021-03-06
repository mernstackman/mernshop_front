import styled from "styled-components";

const LineWings = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    &::before,
    &::after {
        content: "";
        box-sizing: border-box;
        height: 2px;
        width: 30%;
        background: #6e6e6e;
        position: absolute;
        top: 50%;
        z-index: 2;
    }
    &::before {
        left: 0;
    }
    &:after {
        right: 0;
    }
`;
export default LineWings;
