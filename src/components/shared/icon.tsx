import { FC, MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { lightGreyColor } from "../multiselect/styledComponents";
import { css } from "@emotion/react";

interface StyledIconProps {
  inline?: boolean;
}

const StyledIcon = styled.i<StyledIconProps>`
  color: ${lightGreyColor};
  ${({ inline }) =>
    inline
      ? css`
          font-size: 16px;
          line-height: 16px;
          width: 100%;
          :hover {
            color: red;
          }
        `
      : css`
          font-size: 20px;
          line-height: 30px;
          width: 40px;
          :hover {
            color: #61616196;
          }
        `}
`;

interface Props extends StyledIconProps {
  type: string;
  action?: MouseEventHandler<HTMLElement>;
}

const Icon: FC<Props> = ({ type, action, inline = false }) => {
  return (
    <StyledIcon className={`bx bx-${type}`} onClick={action} inline={inline} />
  );
};

export default Icon;
