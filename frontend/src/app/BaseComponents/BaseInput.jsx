import { Input } from '@/components/ui/input'
import React from 'react'

const BaseInput = ({className,placeholder}) => {
  return (
    <div>
      <Input placeholder={placeholder} className={className} />
    </div>
  )
}

export default BaseInput
