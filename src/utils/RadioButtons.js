import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import {Form } from 'react-bootstrap';

const RadioButtons= React.memo((props)=>{
  const { label, name, options, ...rest } = props;
  console.log(props)
  return (
      <Form.Group>
        <Form.Label as="legend" column>
            {label}
        </Form.Label>
        <Field name={name} >
          {({ field }) => {
            return options.map((option,i) => {
              return (
                <Form.Group key={i+'0'+i+Math.random()} className='d-flex'>
                  <Form.Check
                    type='radio'
                    id={option+name}
                    {...field}
                    {...rest}
                    value={option}
                    checked={field.value === option}
                    className="mb-3 px-3"
                  />
                  <Form.Label htmlFor={option+name}>{option}</Form.Label>
                </Form.Group>
              )
            })
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </Form.Group>
  )
})

export default RadioButtons;