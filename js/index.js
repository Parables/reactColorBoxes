
// Some global vars
let mouseOver = false
let currentIndex = null

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index:null  }
        this.handleHover = this.handleHover.bind(this)
    }

    componentDidMount() {
            
    };

    handleHover(index){
        console.log("Hovering over me @ ", index)
        // this.setState({ index: index });
    };

    render() { 
        return ( 
            <div>
            <TopBar></TopBar>
            <Container handleHover={this.handleHover} >
            </Container>
            </div>
         );
    }
}
 

// Step 1: Zero out the default margins
document.getElementById("body").style = "margin: 0px"

// Step 2: Create an array colors variable 
let colors = [
    // Row 1
    { name: "TURQUOISE", color: "#1abc9c" },
    { name: "EMRALD", color: "#2ecc71" },
    { name: "PETER RIVER", color: "#3498db" },
    { name: "AMETHYST", color: "#9b59b6" },
    { name: "WET ASPHALT", color: "#34495e" },
    // Row 2
    { name: "GREEN SEA", color: "#16a085" },
    { name: "NEPHRITIS", color: "#27ae60" },
    { name: "BELIZE HOLE", color: "#2980b9" },
    { name: "WISTERIA", color: "#8e44ad" },
    { name: "MIDNIGHT BLUE", color: "#2c3e50" },
    // Row 3
    { name: "SUN FLOWER", color: "#f1c40f" },
    { name: "CARROT", color: "#e67e22" },
    { name: "ALIZARIN", color: "#e74c3c" },
    { name: "CLOUDS", color: "#ecf0f1" },
    { name: "CONCRETE", color: "#95a5a6" },
    // Row 4
    { name: "ORANGE", color: "#f39c12" },
    { name: "PUMPKIN", color: "#d35400" },
    { name: "POMEGRANATE", color: "#c0392b" },
    { name: "SILVER", color: "#bdc3c7" },
    { name: "ASBESTOS", color: "#7f8c8d" },
]

// This will contain the boxes that makes up the color
function Container(props) {
    return (<div style={{ width: "100%", display: "inline-flex", flexWrap: "wrap" }} >
                <Children  handleHover={props.handleHover}></Children>

    </div>)
}

// This is the text inside the Box
function BoxText(props) {
    return (
        <p style={{ position: "absolute", bottom: "5px", right: "8px", margin: "0px" }}>{props.name}</p>
    )
}
//props.handleHover(props.index)
// This is the Box wit color
function Box(props) {
    return (<div  style={props.style} onClick={props.handleHover(props.index)}> 
        <HoverButton />
        <BoxText name={props.name}></BoxText>
    </div>)
}

function HoverButton(props){
    return (
        <div className="clickMe" style={{border: "2px solid #ffffff33", borderRadius:"5px", color: "white", padding: "10px 30px", display: "inline-block", position: "absolute", left: "30%", top: "40%"}}>Copy</div>
    )
}

// handleHover={props.handleHover} 
// This will generate a list of boxes
function Children(props) {
    console.log(props.handleHover(0))
    return colors.map((c, i) => {
        return (
            <Box name={colors[i].name} key={i} style={{
                position: "relative",
                width: "20%",
                height: "140.25px",
                color: "white",
                backgroundColor: colors[i].color
            }} index={i}  handleHover={props.handleHover}></Box>
        )
    })
}

function TopBar(props) {
    return (
        <div style={{ height: "50px", width: "100%", padding:"0px 30px",boxSizing:"border-box", backgroundColor: "white", display: "inline-flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>← Back</span>
            <div style={{ padding: "8px 20px", backgroundColor: "black", color: "white", fontWeight: "bold", borderRadius: "5px", }}>Copy Format: HEX(#AA1923) <ArrowIcon></ArrowIcon> </div>
            <span>Sound On 🔊</span>
        </div>
    )
}

function ArrowIcon(props) {
    if (props.up) {
        return (
            <div style={{paddingLeft:"10px", display:"inline-flex" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10px" height="15px">
                    <defs />
                    <path fill="#FFF" d="M507.521 427.394L282.655 52.617c-12.074-20.122-41.237-20.122-53.311 0L4.479 427.394c-12.433 20.72 2.493 47.08 26.655 47.08h449.732c24.163 0 39.089-26.36 26.655-47.08z"  data-old_color="#000000" data-original="#000000" />
                </svg>
            </div>)
    }
    return (
        <div style={{paddingLeft:"10px", display:"inline-flex" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8px" height="10px">
                <defs />
                <path fill="#FFF" d="M4.479 84.606l224.866 374.777c12.074 20.122 41.237 20.122 53.311 0L507.521 84.606c12.433-20.72-2.493-47.08-26.655-47.08H31.134c-24.163 0-39.089 26.36-26.655 47.08z"  data-old_color="#000000" data-original="#000000" />
            </svg>
        </div>)
}

ReactDOM.render(<App />, document.getElementById("root"));