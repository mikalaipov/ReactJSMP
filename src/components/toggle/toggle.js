import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button/button';

Toggle.propTypes = {
  'onChange': PropTypes.func,
  'default': PropTypes.string,
  'options': PropTypes.arrayOf(PropTypes.string),
};

export class Toggle extends Component {
  constructor(props) {
    super(props);
    const {onChange} = props;
    this.state = {
      currentActive: props.default,
      onChange,
   };
 }

  render() {
    const {options = [], isLight} = this.props;

    return (
      <div className='Toggle'>
        {options.map((variantName) =>
          <div className='Toggle_btn' key={variantName}>
            <Button
              text={variantName}
              width='100%'
              onClick={this.btnClickHandler}
              isActive={variantName === this.state.currentActive}
              isLight={isLight} />
          </div>
        )}
      </div>
    );
 }

  btnClickHandler = (e) => {
    const current = e.currentTarget.value;

    if (this.state.currentActive != current) {
      this.setState({
        currentActive: current,
     });
   }

    if (this.state.onChange) {
      this.state.onChange(current);
   }
 }
};


