import React from 'react'

type Props = {
  data: any
}

const Data = ({ data }) => {
  return (
    <div>
      <p> {data.source['If so, what condition(s) were you diagnosed with?']} </p>
    </div>
  )
}

export default Data