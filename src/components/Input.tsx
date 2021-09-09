import React from 'react'

import { styled } from '@/style/stitches.config'

const InputContainerStyled = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  paddingY: '10px',
  variants: {
    size: {
      twoColumns: {
        width: '40vw'
      }
    }
  }
})

const LabelStyled = styled('label', {
  paddingY: '5px',
  fontSize: 12,
  fontWeight: 'bold',
  color: '$gray200'
})

const InputStyled = styled('input', {
  paddingY: '15px',
  paddingLeft: '15px',
  fontSize: 16,
  color: '$gray400',
  border: '1px solid $gray150',
  borderRadius: 3,
  outline: 'none',
  '&::placeholder': {
    color: '$gray150'
  },
  '&:focus': {
    border: '1px solid $purple100'
  },
  variants: {
    color: {
      error: {
        borderColor: '$orange200'
      }
    }
  }
})

const MessageErrorStyled = styled('span', {
  fontSize: 12,
  color: '$orange200',
  paddingTop: '5px'
})

const Input = (props: any): React.ReactElement => {
  const { label, error, twoColumns = false, register } = props

  return (
    <InputContainerStyled size={twoColumns ? 'twoColumns' : undefined}>
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled color={error ? 'error' : undefined} {...register} {...props}></InputStyled>
      {error && <MessageErrorStyled>{error.message}</MessageErrorStyled>}
    </InputContainerStyled>
  )
}

export default Input