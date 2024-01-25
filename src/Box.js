
const Box = ({ width, height, color }) => {

    const boxStyles = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color
      };

    return (
      <div class="box" style={boxStyles}>
    </div>
    );
  }

  export default Box