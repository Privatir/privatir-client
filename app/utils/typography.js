import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

parnassusTheme.overrideStyles = ({ rhythm }, options) => ({
    "a": {
        color: "inherit",
        textDecoration: "none",
    },
    "a:hover": {
        color: "#7E57C2",
        textDecoration: "none"
    },
})

const typography = new Typography(parnassusTheme)

export default typography