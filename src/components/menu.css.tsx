import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const li = style({
  border: "1px solid rgba(0, 0, 0, 0.125)",
  borderBottom: 0,
  ":first-child": {
    borderTopRightRadius: "0.3rem",
    borderTopLeftRadius: "0.3rem",
    
  },
  ":last-child": {
    borderBottomRightRadius: "0.3rem",
    borderBottomLeftRadius: "0.3rem",
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
  },
  ":hover": {
    backgroundColor: theme.colors.muted,
  }
})
