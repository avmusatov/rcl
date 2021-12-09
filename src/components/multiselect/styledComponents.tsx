import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const lightGreyColor = "#c7c7c7ab";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  width: 100%;
`;

interface SelectControlProps {
  focused: boolean;
}

export const SelectControl = styled.div<SelectControlProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  min-height: 40px;
  border: 1px solid ${lightGreyColor};
  border-radius: 3px;
  padding-left: 10px;
  ${({ focused }) =>
    focused
      ? css`
          border: 2px solid blue;
        `
      : css`
          border: 1px solid ${lightGreyColor};
        `}
`;

export const Menu = styled.ul`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  margin-top: 5px;
  padding: 3px 0;
  width: 100%;
  list-style: none;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.7);
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
`;

export const SelectedOptionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SelectedOptionContainer = styled.div`
  background-color: rgb(230, 230, 230);
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin: 2px;
  min-width: 0px;
  height: 25px;
  box-sizing: border-box;
`;

export const SelectedOption = styled.div`
  border-radius: 2px;
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 3px 3px 3px 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: default;
`;

export const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 20px;
  cursor: default;
  border-radius: 2px;

  :hover {
    background-color: #ff7b64c9;
    color: red;
  }
`;

export const ControlIcons = styled.div`
  display: flex;
  text-align: center;
  i:last-of-type {
    border-left: 1px solid ${lightGreyColor};
  }
`;

export const DefaultLabel = styled.div`
  opacity: 0.6;
  font-style: "Roboto", sans-serif;
  font-size: 16px;
  cursor: default;
`;

export const StyledInput = styled.input`
  border: none;
  cursor: default;
  padding: 0;
  margin: 0;
  outline: none;
  font-style: "Roboto", sans-serif;
  flex: 1 1 auto;
  width: 50px;
  font-size: 16px;
`;
