import { css } from "styled-components";

export const FlexRowCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FlexColumnSpaceBetween = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowSpaceBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowEnd = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const FlexColumnStart = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardShadow = css`
  box-shadow: 2px 4px 13px 3px #080530, 2px 5px 15px 5px #080530;
`;

export const GradientBG = css`
  background: linear-gradient(180deg, #43c4ed 0%, #ca32f0 100%);
`;

export const GradientColor = css`
  background: -webkit-linear-gradient(180deg, #43c4ed 0%, #ca32f0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LinkHover = css`
  background: linear-gradient(90deg, #43c4ed 0%, #ca32f0 100%);
`;

// export const CardShadowHover = css`
//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.4),
//     0px 4px 8px rgba(0, 0, 0, 0.4), 0px 8px 16px rgba(0, 0, 0, 0.4);
// `;
