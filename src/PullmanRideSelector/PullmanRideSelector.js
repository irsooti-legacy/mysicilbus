import React from 'react'

const PullmanRideSelector = ({ defaultValue, options, onChange, isLoading, name }) => {
  
  const onClickHandler = (evt) => {
    const id = evt.nativeEvent.target.selectedIndex;
    console.log(window.ga)
    if (window.ga)
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'Stop selection',
        eventAction: 'select',
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
