import React from 'react'

const PullmanRideSelector = ({ defaultValue, options, onChange, isLoading, name }) => {
  return (

    <div className="control has-icons-left">
      <div className={`select is-medium is-fullwidth ${isLoading ? 'is-loading' : ''}`}>
        <select name={name} disabled={options.length === 0} onChange={onChange}>
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
