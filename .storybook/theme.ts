import { create } from "@storybook/theming";

export default create({
  base: "dark",
  brandTitle: `
  <span style="display: flex; align-items: center; justify-content: center; gap: 10px;">
    <span style="display: flex; align-items: center; justify-content: center; border-radius: 50%; background-color: #fff; padding: 10px; width: 48px; height: 48px;">
    <img 
        src="/logo.png" 
        alt="Ravleen.Ink" 
        width="32" 
        height="32" 
        /> 
    </span>
   <span style="font-size: 24px; font-weight: 600;">Ravleen.Ink</span>     
  </span>
  `,
});
