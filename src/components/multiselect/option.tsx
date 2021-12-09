import React, { FC } from "react";
import styled from "@emotion/styled";

type OptionProps = {
  addSelectedOption: Function;
  value: string;
  label: string;
};

const StyledListItem = styled.li`
  box-sizing: border-box;
  padding: 0 10px;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  cursor: default;
  font-size: 15px;
  line-height: 30px;
  height: 30px;
  width: 100%;
  &:hover {
    background-color: #add8e6dd;
  }
`;

const Option: FC<OptionProps> = ({ value, label, addSelectedOption }) => {
  return (
    <StyledListItem onClick={() => addSelectedOption(value)}>
      {label}
    </StyledListItem>
  );
};

export { Option };
export type { OptionProps };
