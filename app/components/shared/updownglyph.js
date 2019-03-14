import React, { PropTypes } from 'react';

class UpDownGlyph extends React.Component {
  static propTypes = {
    bool: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span style={{marginLeft:'10px'}} className={this.props.bool ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down'} aria-hidden="true" key="glyph">
      </span>
    )
  }
}

export default UpDownGlyph;
