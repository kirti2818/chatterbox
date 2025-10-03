import { Input } from '@/components/ui/input'
import React from 'react'

const BaseInput = ({className,placeholder,onChange,value="",type}) => {
  return (
    <div>
      <Input type={type} onChange={onChange} value={value} placeholder={placeholder} className={className} />
    </div>
  )
}

export default BaseInput
