import React from 'react'
const DotActive = ({onClickPag, active}) => {
  return (
    <div onClick={() => {
      onClickPag()
    }} >{active ? '∘' : '∙'}</div>
  )
}
export default DotActive
