import React from 'react'
import ReactGa from 'react-ga'

const PullmanRideSelector = ({ defaultValue, options, onChange, isLoading, name }) => {
  
  const onClickHandler = (evt) => {
    const id = evt.nativeEvent.target.selectedIndex;

    ReactGa.ga('send', {
        hitType: 'event',
        eventCategory: 'Stop',
        eventAction: 'select [' + evt.currentTarget.name + ']',
        eventLabel: evt.nativeEvent.target[id].text
      });
    
    onChange(evt)
  }
  
  return (

    <div className="control has-icons-left">
      <div className={`select is-medium is-fullwidth ${isLoading ? 'is-loading' : ''}`}>
        <select name={name} disabled={options.length === 0} onChange={onClickHandler}>
          <option value="">{defaultValue}</option>
          {options.map(m =>
            <option value={m.id} key={m.id}>{m.label}</option>
          )}

        </select>
      </div>
      <span className="icon is-medium is-left">
        <i className="fas fa-bus"></i>
      </span>
    </div>
  )
}

export default PullmanRideSelector
