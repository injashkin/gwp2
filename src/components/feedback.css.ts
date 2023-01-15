import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { buttons } from "./ui.css"

export const formControl = style({
  width: "100%",
  padding: "0.375rem 0.75rem",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
})

export const button = style([
  buttons.primary,
  { borderColor: theme.colors.primary },
])
