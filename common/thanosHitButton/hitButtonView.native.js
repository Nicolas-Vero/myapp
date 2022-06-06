import React from 'react';
import { Button } from 'react-native';
import style from '../../App.module.css';
export class HitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        style={style.button}
        title="Hit Thaano"
        onPress={this.props.increaseCount}
      />
    );
  }
}
